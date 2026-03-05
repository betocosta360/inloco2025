import { getAlunos } from "@/lib/actions";
import FinanceiroForm from "@/components/admin/FinanceiroForm";

export default async function NovoLançamentoPage() {
    const alunos = await getAlunos();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Novo Lançamento Financeiro</h2>
            <FinanceiroForm alunos={alunos.data} />
        </div>
    );
}
