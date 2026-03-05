import { getBanners, getCursos, getEquipe, getDepoimentos, getPromocoes, getAdministradores, getAlunos, getFinanceiro, getProfessores, getTurmas, getFinancialStats, getDespesas } from "@/lib/actions";
import Link from "next/link";
import { cookies } from "next/headers";
import FinanceSummary from "@/components/admin/FinanceSummary";

export default async function AdminDashboard() {
    const cookieStore = await cookies();
    const role = cookieStore.get('userRole')?.value || 'ADMIN';

    const [banners, cursos, equipe, depoimentos, promocoes, usuarios, alunos, financeiro, professores, turmas, finStats, despesas] = await Promise.all([
        getBanners(),
        getCursos(),
        getEquipe(),
        getDepoimentos(),
        getPromocoes(),
        getAdministradores(),
        getAlunos(),
        getFinanceiro(),
        getProfessores(),
        getTurmas(),
        getFinancialStats(),
        getDespesas(),
    ]);

    const isAdmin = role === 'ADMIN';

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Dashboard</h1>
                <p className="text-zinc-500 mt-1">Bem-vindo ao painel administrativo da Inloco.</p>
            </div>

            {isAdmin ? (
                <FinanceSummary stats={finStats} />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
                        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Turmas</h3>
                        <p className="text-4xl font-black mt-2 text-zinc-900">{turmas.total}</p>
                        <Link href="/admin/turmas" className="text-xs font-bold text-zinc-900 mt-6 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Gerenciar <span className="text-lg">→</span>
                        </Link>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
                        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Alunos</h3>
                        <p className="text-4xl font-black mt-2 text-zinc-900">{alunos.total}</p>
                        <Link href="/admin/alunos" className="text-xs font-bold text-zinc-900 mt-6 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Gerenciar <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
