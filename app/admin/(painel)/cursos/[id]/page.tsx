import { prisma } from "@/lib/prisma";
import CursoForm from "@/components/admin/CursoForm";
import { notFound } from "next/navigation";

export default async function EditCursoPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const curso = await prisma.curso.findUnique({ where: { id: params.id } });

    if (!curso) notFound();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Curso</h2>
            <CursoForm initialData={curso} />
        </div>
    );
}
