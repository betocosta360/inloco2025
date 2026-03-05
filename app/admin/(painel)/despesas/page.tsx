import { getDespesas, deleteDespesa } from "@/lib/actions";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default async function DespesasPage() {
    const despesas = await getDespesas();

    const totalPendente = despesas
        .filter((d: any) => !d.pago)
        .reduce((acc: number, curr: any) => acc + curr.valor, 0);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Gestão de Despesas</h2>
                    <p className="text-zinc-500 text-sm">Controle de gastos fixos e variáveis da escola.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-lg">
                        <span className="text-xs text-amber-600 font-bold uppercase">A pagar</span>
                        <div className="text-lg font-bold text-amber-700">
                            R$ {totalPendente.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                    </div>
                    <Link
                        href="/admin/despesas/nova"
                        className="bg-zinc-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2"
                    >
                        <span>+ Nova Despesa</span>
                    </Link>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-200">
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Descrição</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Categoria</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Vencimento</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Valor</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {despesas.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-zinc-500 italic text-sm">
                                    Nenhuma despesa cadastrada.
                                </td>
                            </tr>
                        ) : (
                            despesas.map((d: any) => (
                                <tr key={d.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-zinc-900">{d.descricao}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium bg-zinc-100 px-2 py-1 rounded text-zinc-600">
                                            {d.categoria}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-zinc-600">
                                            {format(new Date(d.vencimento), "dd 'de' MMMM", { locale: ptBR })}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-bold text-zinc-900">
                                            R$ {d.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.pago ? (
                                            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Pago</span>
                                        ) : (
                                            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Pendente</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-4">
                                        <Link href={`/admin/despesas/${d.id}`} className="text-zinc-400 hover:text-zinc-900 text-sm font-medium transition-colors">Editar</Link>
                                        <DeleteButton id={d.id} onDelete={deleteDespesa} />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
