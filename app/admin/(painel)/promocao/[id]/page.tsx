import { prisma } from "@/lib/prisma";
import PromocaoForm from "@/components/admin/PromocaoForm";
import { notFound } from "next/navigation";

export default async function EditPromocaoPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const promocao = await prisma.promocao.findUnique({ where: { id: params.id } });

    if (!promocao) notFound();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Promoção</h2>
            <PromocaoForm initialData={promocao} />
        </div>
    );
}
