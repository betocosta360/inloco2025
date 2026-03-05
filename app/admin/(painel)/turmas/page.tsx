import { getTurmas, deleteTurma, getProfessorByEmail } from "@/lib/actions";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { cookies } from "next/headers";
import Pagination from "@/components/admin/Pagination";

export default async function TurmasPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    const cookieStore = await cookies();
    const role = cookieStore.get('userRole')?.value;
    const email = cookieStore.get('userEmail')?.value;

    let professorId = undefined;
    if (role === 'PROFESSOR' && email) {
        const prof = await getProfessorByEmail(email);
        professorId = prof?.id;
    }

    const { data: turmas = [], total = 0 } = await getTurmas(professorId, currentPage, 10);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Gestão de Turmas</h2>
                    <p className="text-zinc-500 text-sm">Organize as turmas, horários e professores.</p>
                </div>
                <Link
                    href="/admin/turmas/nova"
                    className="bg-zinc-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2"
                >
                    <span>+ Nova Turma</span>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-200">
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Turma / Curso</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Professor</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Horário / Dias</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Alunos</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {(!turmas || turmas.length === 0) ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-zinc-500 italic text-sm">
                                    Nenhuma turma cadastrada.
                                </td>
                            </tr>
                        ) : (
                            turmas.map((turma: any) => (
                                <tr key={turma.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-zinc-900">{turma.nome}</div>
                                        <div className="text-xs text-zinc-500">{turma.curso?.nome}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-zinc-600">{turma.professor?.nome}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-zinc-600">{turma.horario}</div>
                                        <div className="text-xs text-zinc-400">{turma.diasSemana}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full text-xs font-medium">
                                            {turma._count?.alunos || 0} alunos
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-4">
                                        <Link href={`/admin/turmas/${turma.id}`} className="text-zinc-400 hover:text-zinc-900 text-sm font-medium transition-colors underline-offset-4 hover:underline">Editar</Link>
                                        <DeleteButton id={turma.id} onDelete={deleteTurma} />
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
