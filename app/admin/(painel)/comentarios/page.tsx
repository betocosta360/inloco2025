import { getDepoimentos } from "@/lib/actions";
import DepoimentoActions from "@/components/admin/DepoimentoActions";

export default async function AdminComentarios() {
    const depoimentos = await getDepoimentos();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Gerenciar Depoimentos</h2>
                    <p className="text-sm text-zinc-500">Avaliações e feedbacks deixados por alunos.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-200">
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Aluno / Curso</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {depoimentos.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="px-6 py-12 text-center text-zinc-500 italic text-sm">
                                    Sem depoimentos para moderar.
                                </td>
                            </tr>
                        ) : (
                            depoimentos.map((depo: any) => (
                                <tr key={depo.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-zinc-900">{depo.nome}</div>
                                        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">{depo.curso}</div>
                                        <p className="text-sm text-zinc-600 mt-1 line-clamp-2 italic">"{depo.texto}"</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${depo.aprovado ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'
                                            }`}>
                                            {depo.aprovado ? 'Aprovado' : 'Pendente'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <DepoimentoActions id={depo.id} aprovado={depo.aprovado} />
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