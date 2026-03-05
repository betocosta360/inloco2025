import AlunoForm from "@/components/admin/AlunoForm";
import { getCursos, getTurmas } from "@/lib/actions";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export default async function EditarAluno({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cookieStore = await cookies();
    const role = cookieStore.get('userRole')?.value;

    const [aluno, cursos, turmas] = await Promise.all([
        prisma.aluno.findUnique({ where: { id } }),
        getCursos(),
        getTurmas()
    ]);

    if (!aluno) notFound();

    const isProfessor = role === 'PROFESSOR';

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">
                    {isProfessor ? 'Detalhes do Aluno' : 'Editar Aluno'}
                </h2>
                <p className="text-zinc-500 text-sm">
                    {isProfessor ? 'Visualize os dados cadastrais do estudante.' : 'Modifique os dados do estudante.'}
                </p>
            </div>
            <AlunoForm initialData={aluno} cursos={cursos} turmas={turmas} role={role} />
        </div>
    );
}
