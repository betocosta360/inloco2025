'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { upsertEquipe } from '@/lib/actions';
import { uploadImage } from '@/lib/upload';
import { useToast } from '@/components/admin/ToastProvider';

export default function EquipeForm({ initialData }: { initialData?: any }) {
    const router = useRouter();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: initialData?.id || '',
        nome: initialData?.nome || '',
        cargo: initialData?.cargo || '',
        imagem: initialData?.imagem || '',
        descricao: initialData?.descricao || '',
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
        const tid = toast.loading('Salvando membro da equipe...');
        try {
            await upsertEquipe(formData);
            toast.dismiss(tid);
            toast.success('Membro salvo com sucesso!');
            router.push('/admin/equipe');
            router.refresh();
        } catch (error) {
            toast.dismiss(tid);
            toast.error('Erro ao salvar membro da equipe');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Nome do Membro</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Cargo</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                    />
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-medium text-zinc-700">Foto do Membro</label>
                    <div className="flex items-center gap-4">
                        {formData.imagem && (
                            <div className="w-20 h-20 rounded-full overflow-hidden border border-zinc-200 bg-zinc-50 flex-shrink-0">
                                <img src={formData.imagem} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                        )}
                        <div className="flex-1">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-zinc-300 rounded-lg cursor-pointer bg-zinc-50 hover:bg-zinc-100 transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <span className="text-zinc-500 mb-2">Buscar foto no computador</span>
                                    <span className="text-xs text-zinc-400">Clique para selecionar</span>
                                </div>
                                <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} disabled={loading} />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Breve Descrição/Bio</label>
                    <textarea
                        required
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.descricao}
                        onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    />
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                    <input
                        type="checkbox"
                        id="ativo"
                        className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                        checked={formData.ativo}
                        onChange={(e) => setFormData({ ...formData, ativo: e.target.checked })}
                    />
                    <label htmlFor="ativo" className="text-sm font-medium text-zinc-700">Membro Ativo</label>
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
                    {loading ? 'Processando...' : 'Salvar Membro'}
                </button>
            </div>
        </form>
    );
}
