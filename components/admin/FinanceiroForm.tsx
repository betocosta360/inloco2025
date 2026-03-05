'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { upsertFinanceiro } from '@/lib/actions';
import { useToast } from '@/components/admin/ToastProvider';

interface Aluno {
    id: string;
    nome: string;
}

export default function FinanceiroForm({ initialData, alunos }: { initialData?: any, alunos: any[] }) {
    const router = useRouter();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: initialData?.id || '',
        alunoId: initialData?.alunoId || '',
        valor: initialData?.valor || '',
        dataVencimento: initialData?.dataVencimento ? new Date(initialData.dataVencimento).toISOString().split('T')[0] : '',
        dataPagamento: initialData?.dataPagamento ? new Date(initialData.dataPagamento).toISOString().split('T')[0] : '',
        status: initialData?.status || 'PENDENTE',
        descricao: initialData?.descricao || '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.alunoId) {
            toast.error('Por favor, selecione um aluno.');
            return;
        }
        setLoading(true);
        const tid = toast.loading('Salvando registro financeiro...');
        try {
            await upsertFinanceiro(formData);
            toast.dismiss(tid);
            toast.success('Registro financeiro salvo com sucesso!');
            router.push('/admin/financeiro');
            router.refresh();
        } catch (error: any) {
            toast.dismiss(tid);
            toast.error(error.message || 'Erro ao salvar lançamento financeiro');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Selecionar Aluno</label>
                    <select
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                        value={formData.alunoId}
                        onChange={(e) => setFormData({ ...formData, alunoId: e.target.value })}
                    >
                        <option value="">Escolha um aluno...</option>
                        {alunos.map((aluno) => (
                            <option key={aluno.id} value={aluno.id}>{aluno.nome}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Valor (R$)</label>
                        <input
                            type="number"
                            step="0.01"
                            required
                            placeholder="0,00"
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                            value={formData.valor}
                            onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Status</label>
                        <select
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        >
                            <option value="PENDENTE">Pendente</option>
                            <option value="PAGO">Pago</option>
                            <option value="ATRASADO">Atrasado</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Data de Vencimento</label>
                        <input
                            type="date"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                            value={formData.dataVencimento}
                            onChange={(e) => setFormData({ ...formData, dataVencimento: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Data de Pagamento (Opcional)</label>
                        <input
                            type="date"
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                            value={formData.dataPagamento}
                            onChange={(e) => setFormData({ ...formData, dataPagamento: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Observações (Opcional)</label>
                    <textarea
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all resize-none"
                        value={formData.descricao}
                        onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                        placeholder="Ex: Referente à mensalidade de Março"
                    ></textarea>
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
                    {loading ? 'Salvando...' : 'Salvar Registro'}
                </button>
            </div>
        </form>
    );
}
