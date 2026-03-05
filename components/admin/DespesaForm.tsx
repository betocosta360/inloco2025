'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/admin/ToastProvider";
import { upsertDespesa } from "@/lib/actions";

export default function DespesaForm({ initialData }: { initialData?: any }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const toast = useToast();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const tid = toast.loading("Salvando despesa...");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            await upsertDespesa({
                ...data,
                id: initialData?.id,
                pago: formData.get('pago') === 'on'
            });
            toast.dismiss(tid);
            toast.success("Despesa salva com sucesso!");
            router.push('/admin/despesas');
            router.refresh();
        } catch (error) {
            toast.dismiss(tid);
            toast.error("Erro ao salvar despesa.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Descrição / Título</label>
                    <input
                        name="descricao"
                        defaultValue={initialData?.descricao}
                        required
                        placeholder="Ex: Aluguel Unidade Centro, Conta de Luz Março"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Valor (R$)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="valor"
                        defaultValue={initialData?.valor}
                        required
                        placeholder="0.00"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Data de Vencimento</label>
                    <input
                        type="date"
                        name="vencimento"
                        defaultValue={initialData?.vencimento ? new Date(initialData.vencimento).toISOString().split('T')[0] : ''}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Categoria</label>
                    <select
                        name="categoria"
                        defaultValue={initialData?.categoria}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all bg-white"
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="Aluguel">Aluguel</option>
                        <option value="Salários">Salários</option>
                        <option value="Infraestrutura (Água/Luz/Net)">Infraestrutura (Água/Luz/Net)</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Manutenção">Manutenção</option>
                        <option value="Impostos">Impostos</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>

                <div className="flex items-center gap-2 pt-8">
                    <input
                        type="checkbox"
                        name="pago"
                        id="pago"
                        defaultChecked={initialData?.pago}
                        className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                    />
                    <label htmlFor="pago" className="text-sm font-medium text-zinc-700 cursor-pointer">Despesa Paga</label>
                </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-6 py-2 rounded-lg font-medium text-zinc-600 hover:bg-zinc-100 transition-all"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-zinc-900 text-white px-8 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-all disabled:opacity-50"
                >
                    {loading ? 'Salvando...' : 'Salvar Despesa'}
                </button>
            </div>
        </form>
    );
}
