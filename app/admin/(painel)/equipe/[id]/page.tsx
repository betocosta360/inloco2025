import { prisma } from "@/lib/prisma";
import EquipeForm from "@/components/admin/EquipeForm";
import { notFound } from "next/navigation";

export default async function EditEquipePage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const membro = await prisma.equipe.findUnique({ where: { id: params.id } });

    if (!membro) notFound();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Membro da Equipe</h2>
            <EquipeForm initialData={membro} />
        </div>
    );
}
