import { prisma } from "@/lib/prisma";
import { getCursos } from "@/lib/actions";
import AlunoForm from "@/components/admin/AlunoForm";
import { notFound } from "next/navigation";

export default async function EditAlunoPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const aluno = await prisma.aluno.findUnique({ where: { id: params.id } });
    const cursos = await getCursos();

    if (!aluno) notFound();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Aluno</h2>
            <AlunoForm initialData={aluno} cursos={cursos} />
        </div>
    );
}
