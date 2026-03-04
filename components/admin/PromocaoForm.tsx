'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { upsertPromocao } from '@/lib/actions';
import { useToast } from '@/components/admin/ToastProvider';

export default function PromocaoForm({ initialData }: { initialData?: any }) {
    const router = useRouter();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: initialData?.id || '',
        titulo: initialData?.titulo || '',
        desconto: initialData?.desconto || '',
        cupom: initialData?.cupom || '',
        ativa: initialData?.ativa ?? true,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const tid = toast.loading('Salvando promoção...');
        try {
            await upsertPromocao(formData);
            toast.dismiss(tid);
            toast.success('Promoção salva com sucesso!');
            router.push('/admin/promocao');
            router.refresh();
        } catch (error) {
            toast.dismiss(tid);
            toast.error('Erro ao salvar promoção');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Título da Promoção</label>
                    <input
                        type="text"
                        required
                        placeholder="Ex: Black Friday 50% OFF"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.titulo}
                        onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Valor do Desconto</label>
                    <input
                        type="text"
                        required
                        placeholder="Ex: 50% ou R$ 100,00"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.desconto}
                        onChange={(e) => setFormData({ ...formData, desconto: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Cupom (Opcional)</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.cupom}
                        onChange={(e) => setFormData({ ...formData, cupom: e.target.value })}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="ativa"
                        className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                        checked={formData.ativa}
                        onChange={(e) => setFormData({ ...formData, ativa: e.target.checked })}
                    />
                    <label htmlFor="ativa" className="text-sm font-medium text-zinc-700">Promoção Ativa</label>
                </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-zinc-100">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-4 py-2 text-zinc-600 hover:text-zinc-900 font-medium transition-colors"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-zinc-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50"
                >
                    {loading ? 'Salvando...' : 'Salvar Promoção'}
                </button>
            </div>
        </form>
    );
}
