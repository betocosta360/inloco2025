import TurmaForm from "@/components/admin/TurmaForm";
import { getCursos, getProfessores, getProfessorByEmail } from "@/lib/actions";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export default async function EditarTurma({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cookieStore = await cookies();
    const role = cookieStore.get('userRole')?.value;
    const email = cookieStore.get('userEmail')?.value;

    let currentProfessorId = undefined;
    if (role === 'PROFESSOR' && email) {
        const prof = await getProfessorByEmail(email);
        currentProfessorId = prof?.id;
    }

    const [turma, cursos, professores] = await Promise.all([
        prisma.turma.findUnique({ where: { id } }),
        getCursos(),
        getProfessores()
    ]);

    if (!turma) notFound();

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Turma</h2>
                <p className="text-zinc-500 text-sm">Modifique os dados da turma.</p>
            </div>
            <TurmaForm
                turma={turma}
                cursos={cursos.data}
                professores={professores.data}
                role={role}
                currentProfessorId={currentProfessorId}
            />
        </div>
    );
}
