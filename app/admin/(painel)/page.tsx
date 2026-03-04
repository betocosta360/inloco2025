import { getBanners, getCursos, getEquipe, getDepoimentos, getPromocoes, getAdministradores, getAlunos, getFinanceiro } from "@/lib/actions";
import Link from "next/link";

export default async function AdminDashboard() {
    const [banners, cursos, equipe, depoimentos, promocoes, usuarios, alunos, financeiro] = await Promise.all([
        getBanners(),
        getCursos(),
        getEquipe(),
        getDepoimentos(),
        getPromocoes(),
        getAdministradores(),
        getAlunos(),
        getFinanceiro(),
    ]);

    const stats = [
        { title: 'Banners', count: banners.length, link: '/admin/banners' },
        { title: 'Cursos', count: cursos.length, link: '/admin/cursos' },
        { title: 'Alunos', count: alunos.length, link: '/admin/alunos' },
        { title: 'Financeiro', count: financeiro.length, link: '/admin/financeiro' },
        { title: 'Depoimentos', count: depoimentos.length, link: '/admin/comentarios' },
        { title: 'Promoções', count: promocoes.length, link: '/admin/promocao' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Dashboard</h1>
                <p className="text-zinc-500 mt-1">Bem-vindo ao painel administrativo da Inloco.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.title} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
                        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">{stat.title}</h3>
                        <p className="text-4xl font-black mt-2 text-zinc-900">{stat.count}</p>
                        <Link href={stat.link} className="text-xs font-bold text-zinc-900 mt-6 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Gerenciar <span className="text-lg">→</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
