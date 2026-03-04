'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { upsertAdministrador } from '@/lib/actions';
import { useToast } from '@/components/admin/ToastProvider';

export default function UsuarioForm({ initialData }: { initialData?: any }) {
    const router = useRouter();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: initialData?.id || '',
        nome: initialData?.nome || '',
        email: initialData?.email || '',
        senha: '',
        ativo: initialData?.ativo ?? true,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const tid = toast.loading('Salvando administrador...');
        try {
            await upsertAdministrador(formData);
            toast.dismiss(tid);
            toast.success('Administrador salvo com sucesso!');
            router.push('/admin/usuarios');
            router.refresh();
        } catch (error) {
            toast.dismiss(tid);
            toast.error('Erro ao salvar usuário');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Nome Completo</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                    <input
                        type="email"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Senha</label>
                    <input
                        type="password"
                        required={!formData.id}
                        placeholder={formData.id ? 'Deixe em branco para manter a atual' : ''}
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.senha}
                        onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
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
                    <label htmlFor="ativo" className="text-sm font-medium text-zinc-700">Conta Ativa</label>
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
                    {loading ? 'Salvando...' : 'Salvar Administrador'}
                </button>
            </div>
        </form>
    );
}
