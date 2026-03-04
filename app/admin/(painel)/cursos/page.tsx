import { getCursos, deleteCurso } from "@/lib/actions";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminCursos() {
    const cursos = await getCursos();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Gerenciar Cursos</h2>
                    <p className="text-sm text-zinc-500">Administre o catálogo de cursos e treinamentos.</p>
                </div>
                <Link
                    href="/admin/cursos/novo"
                    className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm flex items-center gap-2"
                >
                    <span className="text-lg">+</span> Novo Curso
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-200">
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Curso</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {cursos.length === 0 ? (
                            <tr>
                                <td colSpan={2} className="px-6 py-12 text-center text-zinc-500 italic text-sm">
                                    Nenhum curso cadastrado.
                                </td>
                            </tr>
                        ) : (
                            cursos.map((curso: any) => (
                                <tr key={curso.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-zinc-900">{curso.nome}</td>
                                    <td className="px-6 py-4 text-right space-x-4">
                                        <Link href={`/admin/cursos/${curso.id}`} className="text-zinc-400 hover:text-zinc-900 text-sm font-medium transition-colors underline-offset-4 hover:underline">Editar</Link>
                                        <DeleteButton id={curso.id} onDelete={deleteCurso} />
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