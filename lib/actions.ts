'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

// --- AUTENTICAÇÃO ---
export async function validateLogin(email: string, senha: string) {
    // 1. Tentar Administrador
    const admin = await prisma.administrador.findFirst({
        where: { email, senha, ativo: true }
    });

    if (admin) {
        const cookieStore = await cookies();
        cookieStore.set('userRole', 'ADMIN', { path: '/' });
        cookieStore.set('userName', admin.nome, { path: '/' });
        cookieStore.set('userEmail', email, { path: '/' });
        return { success: true, role: 'ADMIN', nome: admin.nome };
    }

    // 2. Tentar Professor
    const professor = await prisma.professor.findFirst({
        where: { email, senha, ativo: true }
    });

    if (professor) {
        const cookieStore = await cookies();
        cookieStore.set('userRole', 'PROFESSOR', { path: '/' });
        cookieStore.set('userName', professor.nome, { path: '/' });
        cookieStore.set('userEmail', email, { path: '/' });
        return { success: true, role: 'PROFESSOR', nome: professor.nome };
    }

    return { success: false, error: 'Credenciais inválidas ou usuário inativo.' };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('userRole');
    cookieStore.delete('userName');
    cookieStore.delete('userEmail');
}

// --- ADMINISTRADORES ---
export async function getAdministradores() {
    return await prisma.administrador.findMany({ orderBy: { nome: 'asc' } });
}

export async function upsertAdministrador(data: any) {
    const { id, ...rest } = data;
    // Ensure we only pass expected fields if client is stale
    const cleanData = {
        nome: rest.nome,
        email: rest.email,
        senha: rest.senha,
        ativo: rest.ativo
    };

    if (id) {
        const res = await prisma.administrador.update({ where: { id }, data: cleanData });
        revalidatePath('/admin/usuarios');
        return res;
    }
    const res = await prisma.administrador.create({ data: cleanData });
    revalidatePath('/admin/usuarios');
    return res;
}

export async function deleteAdministrador(id: string) {
    await prisma.administrador.delete({ where: { id } });
    revalidatePath('/admin/usuarios');
}

// --- BANNERS ---
export async function getBanners() {
    // Keep it safe with createdAt until we are sure server restarted
    return await prisma.banner.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function upsertBanner(data: any) {
    const { id, ...rest } = data;

    // Data with ALL fields (new schema)
    const fullData: any = {
        titulo: rest.titulo || null,
        imagem: rest.imagem,
        ativo: !!rest.ativo,
        subtitulo: rest.subtitulo || null,
        descricao: rest.descricao || null,
        link: rest.link || null,
        ordem: Number(rest.ordem) || 0,
    };

    // Data with ONLY old fields (compatibility mode)
    const legacyData = {
        titulo: rest.titulo,
        imagem: rest.imagem,
        ativo: !!rest.ativo,
        descricao: rest.descricao || rest.subtitulo || "", // Map subtitulo to descricao for old schema
    };

    try {
        if (id) {
            return await prisma.banner.update({ where: { id }, data: fullData });
        }
        const result = await prisma.banner.create({ data: fullData });
        revalidatePath('/');
        revalidatePath('/admin/banner');
        return result;
    } catch (error: any) {
        // If it's a validation error about unknown fields, try legacy mode
        if (error.message?.includes('Unknown argument') || error.message?.includes('Unknown field')) {
            console.warn("Prisma Client is stale. Falling back to legacy banner fields.");
            if (id) {
                return await prisma.banner.update({ where: { id }, data: legacyData });
            }
            const result = await prisma.banner.create({ data: legacyData });
            revalidatePath('/');
            revalidatePath('/admin/banner');
            return result;
        }
        console.error("Prisma Error:", error);
        throw new Error(error.message || "Erro ao salvar banner");
    }
}

export async function deleteBanner(id: string) {
    await prisma.banner.delete({ where: { id } });
    revalidatePath('/');
    revalidatePath('/admin/banner');
}

// --- CURSOS ---
export async function getCursos(page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
        prisma.curso.findMany({
            skip,
            take: limit,
            orderBy: { nome: 'asc' }
        }),
        prisma.curso.count()
    ]);
    return { data, total };
}

export async function upsertCurso(data: any) {
    try {
        const { id, ...rest } = data;
        const cleanData = {
            nome: rest.nome,
            descricao: rest.descricao,
            imagem: rest.imagem,
            preco: rest.preco,
            duracao: rest.duracao,
            nivel: rest.nivel,
            conteudo: rest.conteudo || null,
            ativo: !!rest.ativo,
        };

        if (id) {
            const res = await prisma.curso.update({ where: { id }, data: cleanData });
            revalidatePath('/');
            revalidatePath('/admin/cursos');
            return res;
        }
        const result = await prisma.curso.create({ data: cleanData });
        revalidatePath('/');
        revalidatePath('/admin/cursos');
        return result;
    } catch (error: any) {
        console.error("UPSERT CURSO ERROR:", error);
        throw new Error(error.message || "Erro ao salvar curso");
    }
}

export async function deleteCurso(id: string) {
    await prisma.curso.delete({ where: { id } });
    revalidatePath('/');
    revalidatePath('/admin/cursos');
}

// --- EQUIPE ---
export async function getEquipe() {
    return await prisma.equipe.findMany({ orderBy: { nome: 'asc' } });
}

export async function upsertEquipe(data: any) {
    const { id, ...rest } = data;
    if (id) {
        const res = await prisma.equipe.update({ where: { id }, data: rest });
        revalidatePath('/');
        revalidatePath('/admin/equipe');
        return res;
    }
    const result = await prisma.equipe.create({ data: rest });
    revalidatePath('/');
    revalidatePath('/admin/equipe');
    return result;
}

export async function deleteEquipe(id: string) {
    await prisma.equipe.delete({ where: { id } });
    revalidatePath('/');
    revalidatePath('/admin/equipe');
}

export async function getEquipeCompleta() {
    const equipe = await prisma.equipe.findMany({ where: { ativo: true }, orderBy: { nome: 'asc' } });
    const professores = await prisma.professor.findMany({ where: { ativo: true }, orderBy: { nome: 'asc' } });

    // Map professors to equipe structure
    const profToEquipe = professores.map((p: any) => ({
        id: p.id,
        nome: p.nome,
        cargo: 'Professor(a)',
        imagem: p.imagem || '/images/default-avatar.png',
        descricao: p.biografia || '',
        ativo: true
    }));

    return [...equipe, ...profToEquipe].sort((a, b) => a.nome.localeCompare(b.nome));
}

export async function getProfessorByEmail(email: string) {
    return await prisma.professor.findUnique({ where: { email } });
}

// --- DEPOIMENTOS ---
export async function getDepoimentos() {
    return await prisma.depoimento.findMany({
        include: { aluno: true },
        orderBy: { createdAt: 'desc' }
    });
}

export async function toggleDepoimentoAprovacao(id: string, aprovado: boolean) {
    await prisma.depoimento.update({ where: { id }, data: { aprovado } });
    revalidatePath('/');
    revalidatePath('/admin/comentarios');
}

export async function createDepoimento(data: any) {
    // Tenta encontrar um aluno pelo nome completo (case-insensitive)
    const aluno = await prisma.aluno.findFirst({
        where: {
            nome: {
                equals: data.nome,
                mode: 'insensitive'
            }
        }
    });

    const result = await prisma.depoimento.create({
        data: {
            nome: data.nome,
            curso: data.curso,
            texto: data.texto,
            alunoId: aluno?.id || null,
            aprovado: false
        }
    });
    revalidatePath('/');
    revalidatePath('/admin/comentarios');
    return result;
}

export async function deleteDepoimento(id: string) {
    await prisma.depoimento.delete({ where: { id } });
    revalidatePath('/');
    revalidatePath('/admin/comentarios');
}

// --- CONFIGURAÇÃO ---
export async function getConfiguracao() {
    let config = await prisma.configuracao.findFirst();
    if (!config) {
        config = await prisma.configuracao.create({
            data: {
                id: 'singleton',
                historia: 'Fundada em 2005...',
                missao: 'Promover o desenvolvimento...',
                visao: 'Ser referência...',
                valores: 'Excelência, Integridade, Inovação...'
            }
        });
    }
    return config;
}

export async function upsertConfiguracao(data: any) {
    try {
        // Sanitize: only pass known fields to prevent Prisma errors
        const cleanData = {
            historia: data.historia || '',
            historiaImagem: data.historiaImagem || null,
            historiaVideo: data.historiaVideo || null,
            missao: data.missao || '',
            visao: data.visao || '',
            valores: data.valores || '',
            telefone: data.telefone || null,
            email: data.email || null,
            endereco: data.endereco || null,
            instagram: data.instagram || null,
            facebook: data.facebook || null,
            youtube: data.youtube || null,
            linkedin: data.linkedin || null,
            tiktok: data.tiktok || null,
            slogan: data.slogan || null,
        };
        const result = await prisma.configuracao.upsert({
            where: { id: 'singleton' },
            update: cleanData,
            create: {
                id: 'singleton',
                ...cleanData
            }
        });
        revalidatePath('/');
        revalidatePath('/admin/configuracao');
        return result;
    } catch (error: any) {
        console.error("Error in upsertConfiguracao:", error);
        throw new Error(error.message || "Erro ao salvar configurações");
    }

}

// --- PROMOÇÕES ---
export async function getPromocoes() {
    return await prisma.promocao.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function upsertPromocao(data: any) {
    const { id, ...rest } = data;
    if (id) {
        const res = await prisma.promocao.update({ where: { id }, data: rest });
        revalidatePath('/');
        revalidatePath('/admin/promocao');
        return res;
    }
    const result = await prisma.promocao.create({ data: rest });
    revalidatePath('/');
    revalidatePath('/admin/promocao');
    return result;
}

export async function deletePromocao(id: string) {
    await prisma.promocao.delete({ where: { id } });
    revalidatePath('/');
    revalidatePath('/admin/promocao');
}

// --- ALUNOS ---
export async function getAlunos(professorId?: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    // RBAC: Se professorId for passado, filtramos alunos matriculados nas turmas deste professor
    const where = professorId ? {
        turma: {
            professorId: professorId
        }
    } : {};

    const [data, total] = await Promise.all([
        prisma.aluno.findMany({
            where,
            include: {
                curso: true,
                turma: true
            },
            skip,
            take: limit,
            orderBy: { nome: 'asc' }
        }),
        prisma.aluno.count({ where })
    ]);

    return { data, total };
}

export async function upsertAluno(data: any) {
    const { id, ...rest } = data;
    const cleanData = {
        nome: rest.nome,
        email: rest.email,
        telefone: rest.telefone,
        endereco: rest.endereco,
        foto: rest.foto || null,
        nomePais: rest.nomePais || null,
        telefoneContato: rest.telefoneContato || null,
        cursoId: rest.cursoId,
        turmaId: rest.turmaId || null
    };

    if (id) {
        const res = await prisma.aluno.update({ where: { id }, data: cleanData });
        revalidatePath('/admin/alunos');
        return res;
    }
    const res = await prisma.aluno.create({ data: cleanData });
    revalidatePath('/admin/alunos');
    return res;
}

export async function deleteAluno(id: string) {
    await prisma.aluno.delete({ where: { id } });
    revalidatePath('/admin/alunos');
}

// --- FINANCEIRO ---
export async function getFinanceiro(page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
        prisma.financeiro.findMany({
            include: { aluno: true },
            skip,
            take: limit,
            orderBy: { dataVencimento: 'asc' }
        }),
        prisma.financeiro.count()
    ]);
    return { data, total };
}

export async function upsertFinanceiro(data: any) {
    const { id, ...rest } = data;
    const cleanData = {
        alunoId: rest.alunoId,
        valor: Number(rest.valor),
        dataVencimento: new Date(rest.dataVencimento),
        dataPagamento: rest.dataPagamento ? new Date(rest.dataPagamento) : null,
        status: rest.status || "PENDENTE",
        descricao: rest.descricao || null
    };

    if (id) {
        const res = await prisma.financeiro.update({ where: { id }, data: cleanData });
        revalidatePath('/admin/financeiro');
        return res;
    }
    const res = await prisma.financeiro.create({ data: cleanData });
    revalidatePath('/admin/financeiro');
    return res;
}

export async function deleteFinanceiro(id: string) {
    await prisma.financeiro.delete({ where: { id } });
    revalidatePath('/admin/financeiro');
}

// --- PROFESSORES ---
export async function getProfessores(page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
        prisma.professor.findMany({
            skip,
            take: limit,
            orderBy: { nome: 'asc' }
        }),
        prisma.professor.count()
    ]);
    return { data, total };
}

export async function upsertProfessor(data: any) {
    const { id, ...rest } = data;
    const cleanData = {
        nome: rest.nome,
        email: rest.email,
        senha: rest.senha, // Na vida real: criptografar
        biografia: rest.biografia || null,
        imagem: rest.imagem,
        ativo: rest.ativo !== undefined ? rest.ativo : true,
    };

    if (id) {
        const res = await prisma.professor.update({ where: { id }, data: cleanData });
        revalidatePath('/admin/professores');
        return res;
    }
    const res = await prisma.professor.create({ data: cleanData });
    revalidatePath('/admin/professores');
    return res;
}

export async function deleteProfessor(id: string) {
    // Verificar se professor tem turmas antes de deletar ou lidar com cascata
    await prisma.professor.delete({ where: { id } });
    revalidatePath('/admin/professores');
}

// --- TURMAS ---
export async function getTurmas(professorId?: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    // Se professorId for passado, filtrará apenas as turmas dele (RBAC)
    const where = professorId ? { professorId } : {};

    const [data, total] = await Promise.all([
        prisma.turma.findMany({
            where,
            include: {
                curso: true,
                professor: true,
                _count: {
                    select: { alunos: true }
                }
            },
            skip,
            take: limit,
            orderBy: { nome: 'asc' }
        }),
        prisma.turma.count({ where })
    ]);

    return { data, total };
}

export async function upsertTurma(data: any) {
    const { id, ...rest } = data;
    const cleanData = {
        nome: rest.nome,
        horario: rest.horario,
        diasSemana: rest.diasSemana,
        cursoId: rest.cursoId,
        professorId: rest.professorId,
        ativo: rest.ativo !== undefined ? rest.ativo : true,
    };

    if (id) {
        const res = await prisma.turma.update({ where: { id }, data: cleanData });
        revalidatePath('/admin/turmas');
        return res;
    }
    const res = await prisma.turma.create({ data: cleanData });
    revalidatePath('/admin/turmas');
    return res;
}

export async function deleteTurma(id: string) {
    await prisma.turma.delete({ where: { id } });
    revalidatePath('/admin/turmas');
}

// --- DESPESAS ---
export async function getDespesas() {
    return await prisma.despesa.findMany({ orderBy: { vencimento: 'asc' } });
}

export async function upsertDespesa(data: any) {
    const { id, ...rest } = data;
    const cleanData = {
        descricao: rest.descricao,
        valor: Number(rest.valor),
        vencimento: new Date(rest.vencimento),
        categoria: rest.categoria,
        pago: !!rest.pago
    };

    if (id) {
        const res = await prisma.despesa.update({ where: { id }, data: cleanData });
        revalidatePath('/admin/despesas');
        return res;
    }
    const res = await prisma.despesa.create({ data: cleanData });
    revalidatePath('/admin/despesas');
    return res;
}

export async function deleteDespesa(id: string) {
    await prisma.despesa.delete({ where: { id } });
    revalidatePath('/admin/despesas');
}

// --- REPORT FINANCEIRO ---
export async function getFinancialStats() {
    const [mensalidades, despesas] = await Promise.all([
        prisma.financeiro.findMany({ where: { status: 'PAGO' } }),
        prisma.despesa.findMany()
    ]);

    const totalArrecadado = mensalidades.reduce((acc: number, curr: any) => acc + curr.valor, 0);
    const totalDespesas = despesas.reduce((acc: number, curr: any) => acc + curr.valor, 0);
    const saldo = totalArrecadado - totalDespesas;

    // Dados para gráfico (simplificado: agrupar por mês do vencimento)
    // Aqui poderíamos fazer algo mais robusto, mas para o MVP vamos retornar totais
    return {
        totalArrecadado,
        totalDespesas,
        saldo,
        mensalidades,
        despesas
    };
}
