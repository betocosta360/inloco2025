'use client';

import { toggleDepoimentoAprovacao, deleteDepoimento } from "@/lib/actions";
import { useState } from "react";
import { useToast } from '@/components/admin/ToastProvider';

export default function DepoimentoActions({ id, aprovado }: { id: string, aprovado: boolean }) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);

    const handleToggle = async () => {
        setLoading(true);
        try {
            await toggleDepoimentoAprovacao(id, !aprovado);
            toast.success(aprovado ? 'Depoimento ocultado.' : 'Depoimento aprovado!');
        } catch (error) {
            toast.error("Erro ao alterar status do depoimento");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Tem certeza que deseja excluir este depoimento?")) return;
        setLoading(true);
        try {
            await deleteDepoimento(id);
            toast.success('Depoimento excluído.');
        } catch (error) {
            toast.error("Erro ao excluir depoimento");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-end gap-4">
            <button
                onClick={handleToggle}
                disabled={loading}
                className={`text-sm font-medium transition-colors underline-offset-4 hover:underline disabled:opacity-50 ${aprovado ? 'text-zinc-400 hover:text-zinc-600' : 'text-emerald-500 hover:text-emerald-700'
                    }`}
            >
                {loading ? '...' : (aprovado ? 'Ocultar' : 'Aprovar')}
            </button>
            <button
                onClick={handleDelete}
                disabled={loading}
                className="text-rose-400 hover:text-rose-600 text-sm font-medium transition-colors underline-offset-4 hover:underline disabled:opacity-50"
            >
                {loading ? '...' : 'Excluir'}
            </button>
        </div>
    );
}
