import { getAlunos, deleteAluno } from "@/lib/actions";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AlunosPage() {
    const alunos = await getAlunos();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Gestão de Alunos</h2>
                    <p className="text-zinc-500 text-sm">Controle interno de estudantes e matrículas.</p>
                </div>
                <Link
                    href="/admin/alunos/novo"
                    className="bg-zinc-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2"
                >
                    <span>+ Novo Aluno</span>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-200">
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Aluno</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Curso</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Contato</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {alunos.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-zinc-500 italic text-sm">
                                    Nenhum aluno cadastrado.
                                </td>
                            </tr>
                        ) : (
                            alunos.map((aluno: any) => (
                                <tr key={aluno.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {aluno.foto ? (
                                                <img src={aluno.foto} alt={aluno.nome} className="w-10 h-10 rounded-full object-cover border border-zinc-200" />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold border border-zinc-200">
                                                    {aluno.nome.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <div className="font-medium text-zinc-900">{aluno.nome}</div>
                                                <div className="text-xs text-zinc-500">{aluno.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-zinc-600 bg-zinc-100 px-2 py-1 rounded">
                                            {aluno.curso?.nome || 'Sem curso'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-zinc-600">{aluno.telefone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-4">
                                        <Link href={`/admin/alunos/${aluno.id}`} className="text-zinc-400 hover:text-zinc-900 text-sm font-medium transition-colors underline-offset-4 hover:underline">Editar</Link>
                                        <DeleteButton id={aluno.id} onDelete={deleteAluno} />
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
