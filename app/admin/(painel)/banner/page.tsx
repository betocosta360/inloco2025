import { getBanners, deleteBanner } from "@/lib/actions";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminBanner() {
    const banners = await getBanners();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Gerenciar Banners</h2>
                    <p className="text-sm text-zinc-500">Configure os slides da vitrine inicial do site.</p>
                </div>
                <Link
                    href="/admin/banner/novo"
                    className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm flex items-center gap-2"
                >
                    <span className="text-lg">+</span> Novo Banner
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-200">
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider">Identificação (Interno)</th>
                            <th className="px-6 py-4 font-semibold text-zinc-700 text-xs uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                        {banners.length === 0 ? (
                            <tr>
                                <td colSpan={2} className="px-6 py-12 text-center text-zinc-500 italic text-sm">
                                    Nenhum banner cadastrado.
                                </td>
                            </tr>
                        ) : (
                            banners.map((banner: any) => (
                                <tr key={banner.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-zinc-900">{banner.titulo}</td>
                                    <td className="px-6 py-4 text-right space-x-4">
                                        <Link href={`/admin/banner/${banner.id}`} className="text-zinc-400 hover:text-zinc-900 text-sm font-medium transition-colors underline-offset-4 hover:underline">Editar</Link>
                                        <DeleteButton id={banner.id} onDelete={deleteBanner} />
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