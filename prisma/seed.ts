import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Iniciando o seed...');

    // Limpar dados existentes
    await prisma.banner.deleteMany();
    await prisma.equipe.deleteMany();
    await prisma.curso.deleteMany();
    await prisma.depoimento.deleteMany();
    await prisma.promocao.deleteMany();
    await prisma.administrador.deleteMany();

    // Seed Banners
    await prisma.banner.create({
        data: {
            titulo: 'Bem-vindo à Inloco',
            descricao: 'A melhor plataforma de cursos para sua evolução.',
            imagem: 'https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg',
            ativo: true,
        },
    });

    // Seed Equipe
    await prisma.equipe.create({
        data: {
            nome: 'Roberto Cerqueira',
            cargo: 'Diretor',
            imagem: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
            descricao: 'Líder visionário com vasta experiência no setor.',
        },
    });

    // Seed Cursos
    await prisma.curso.create({
        data: {
            nome: 'Desenvolvimento Web Fullstack',
            descricao: 'Aprenda do zero ao profissional.',
            duracao: '6 meses',
            nivel: 'Iniciante',
            preco: 'R$ 1.200,00',
            imagem: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
        },
    });

    // Seed Depoimentos
    await prisma.depoimento.create({
        data: {
            nome: 'Maria Silva',
            curso: 'Desenvolvimento Web',
            texto: 'Curso excelente, mudou minha carreira!',
            imagem: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
            aprovado: true,
        },
    });

    // Seed Promocões
    await prisma.promocao.create({
        data: {
            titulo: 'Black Friday 50% OFF',
            desconto: '50%',
            cupom: 'BLACK50',
            ativa: true,
        },
    });

    // Seed Administrador
    await prisma.administrador.create({
        data: {
            nome: 'Administrador',
            email: 'admin@inloco.com.br',
            senha: 'admin123_mudar_urgente',
            ativo: true,
        },
    });

    console.log('Seed finalizado com sucesso!');
}

main()
    .catch((e) => {
        console.error('Erro ao executar o seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
    });
