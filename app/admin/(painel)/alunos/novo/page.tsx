import AlunoForm from "@/components/admin/AlunoForm";
import { getCursos, getTurmas } from "@/lib/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function NovoAluno() {
    const cookieStore = await cookies();
    const role = cookieStore.get('userRole')?.value;

    if (role === 'PROFESSOR') {
        redirect('/admin/alunos');
    }

    const [cursos, turmas] = await Promise.all([
        getCursos(),
        getTurmas()
    ]);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Novo Aluno</h2>
                <p className="text-zinc-500 text-sm">Cadastre um novo estudante no sistema.</p>
            </div>
            <AlunoForm cursos={cursos.data} turmas={turmas.data} />
        </div>
    );
}
