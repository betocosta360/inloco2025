import { prisma } from "@/lib/prisma";
import { getAlunos } from "@/lib/actions";
import FinanceiroForm from "@/components/admin/FinanceiroForm";
import { notFound } from "next/navigation";

export default async function EditFinanceiroPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const registro = await prisma.financeiro.findUnique({ where: { id: params.id } });
    const alunos = await getAlunos();

    if (!registro) notFound();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Lançamento</h2>
            <FinanceiroForm initialData={registro} alunos={alunos.data} />
        </div>
    );
}
