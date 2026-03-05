import TurmaForm from "@/components/admin/TurmaForm";
import { getCursos, getProfessores, getProfessorByEmail } from "@/lib/actions";
import { cookies } from "next/headers";

export default async function NovaTurma() {
    const cookieStore = await cookies();
    const role = cookieStore.get('userRole')?.value;
    const email = cookieStore.get('userEmail')?.value;

    let currentProfessorId = undefined;
    if (role === 'PROFESSOR' && email) {
        const prof = await getProfessorByEmail(email);
        currentProfessorId = prof?.id;
    }

    const [cursos, professores] = await Promise.all([
        getCursos(),
        getProfessores()
    ]);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Nova Turma</h2>
                <p className="text-zinc-500 text-sm">Configure uma nova turma e atribua um professor.</p>
            </div>
            <TurmaForm
                cursos={cursos.data}
                professores={professores.data}
                role={role}
                currentProfessorId={currentProfessorId}
            />
        </div>
    );
}
