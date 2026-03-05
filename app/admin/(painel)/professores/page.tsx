import { getProfessores, deleteProfessor } from "@/lib/actions";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import Pagination from "@/components/admin/Pagination";

export default async function ProfessoresPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    const { data: professores = [], total = 0 } = await getProfessores(currentPage, 10);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Gestão de Professores</h2>
                    <p className="text-zinc-500 text-sm">Gerencie o corpo docente da instituição.</p>
                </div>
                <Link
                    href="/admin/professores/novo"
                    className="bg-zinc-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2"
                >
                    <span>+ Novo Professor</span>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-200">
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Professor</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {(!professores || professores.length === 0) ? (
                            <tr>
                                <td colSpan={3} className="px-6 py-12 text-center text-zinc-500 italic text-sm">
                                    Nenhum professor cadastrado.
                                </td>
                            </tr>
                        ) : (
                            professores.map((prof: any) => (
                                <tr key={prof.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {prof.imagem ? (
                                                <img src={prof.imagem} alt={prof.nome} className="w-10 h-10 rounded-full object-cover border border-zinc-200" />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold border border-zinc-200">
                                                    {prof.nome.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <div className="font-medium text-zinc-900">{prof.nome}</div>
                                                <div className="text-xs text-zinc-500">{prof.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${prof.ativo ? 'bg-emerald-100 text-emerald-700' : 'bg-zinc-100 text-zinc-500'}`}>
                                            {prof.ativo ? 'ATIVO' : 'INATIVO'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-4">
                                        <Link href={`/admin/professores/${prof.id}`} className="text-zinc-400 hover:text-zinc-900 text-sm font-medium transition-colors underline-offset-4 hover:underline">Editar</Link>
                                        <DeleteButton id={prof.id} onDelete={deleteProfessor} />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination
                totalItems={total}
                itemsPerPage={10}
                currentPage={currentPage}
            />
        </div>
    );
}
