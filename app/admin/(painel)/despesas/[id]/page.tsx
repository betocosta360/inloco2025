import DespesaForm from "@/components/admin/DespesaForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditarDespesa({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const despesa = await prisma.despesa.findUnique({ where: { id } });

    if (!despesa) notFound();

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Despesa</h2>
                <p className="text-zinc-500 text-sm">Modifique os dados da despesa cadastrada.</p>
            </div>
            <DespesaForm initialData={despesa} />
        </div>
    );
}
