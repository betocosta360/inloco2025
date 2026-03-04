'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { upsertBanner } from '@/lib/actions';
import { uploadImage } from '@/lib/upload';
import { useToast } from '@/components/admin/ToastProvider';

export default function BannerForm({ initialData }: { initialData?: any }) {
    const router = useRouter();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: initialData?.id || '',
        titulo: initialData?.titulo || '',
        subtitulo: initialData?.subtitulo || '',
        imagem: initialData?.imagem || '',
        link: initialData?.link || '',
        ordem: initialData?.ordem || 0,
        ativo: initialData?.ativo ?? true,
    });

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        const data = new FormData();
        data.set('file', file);

        try {
            const url = await uploadImage(data);
            if (url) {
                setFormData({ ...formData, imagem: url });
            }
        } catch (error) {
            toast.error('Erro ao fazer upload da imagem');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const tid = toast.loading('Salvando banner...');
        try {
            await upsertBanner(formData);
            toast.dismiss(tid);
            toast.success('Banner salvo com sucesso!');
            router.push('/admin/banner');
            router.refresh();
        } catch (error) {
            toast.dismiss(tid);
            toast.error('Erro ao salvar banner');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Título (Opcional)</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.titulo}
                        onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Subtítulo (Opcional)</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.subtitulo}
                        onChange={(e) => setFormData({ ...formData, subtitulo: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-700">Imagem do Banner</label>
                    <div className="flex items-center gap-4">
                        {formData.imagem && (
                            <div className="w-20 h-20 rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50 flex-shrink-0">
                                <img src={formData.imagem} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                        )}
                        <div className="flex-1">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-zinc-300 rounded-lg cursor-pointer bg-zinc-50 hover:bg-zinc-100 transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <span className="text-zinc-500 mb-2">Clique para selecionar imagem</span>
                                    <span className="text-xs text-zinc-400">PNG, JPG ou WEBP</span>
                                </div>
                                <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} disabled={loading} />
                            </label>
                        </div>
                    </div>
                    <input type="hidden" value={formData.imagem} required />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Link do Botão (Opcional)</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="ativo"
                        className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                        checked={formData.ativo}
                        onChange={(e) => setFormData({ ...formData, ativo: e.target.checked })}
                    />
                    <label htmlFor="ativo" className="text-sm font-medium text-zinc-700">Banner Ativo</label>
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
                    disabled={loading || !formData.imagem}
                    className="bg-zinc-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50"
                >
                    {loading ? 'Processando...' : 'Salvar Banner'}
                </button>
            </div>
        </form>
    );
}
