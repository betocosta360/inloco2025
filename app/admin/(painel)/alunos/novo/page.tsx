import { getCursos } from "@/lib/actions";
import AlunoForm from "@/components/admin/AlunoForm";

export default async function NovoAlunoPage() {
    const cursos = await getCursos();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Cadastrar Novo Aluno</h2>
            <AlunoForm cursos={cursos} />
        </div>
    );
}
