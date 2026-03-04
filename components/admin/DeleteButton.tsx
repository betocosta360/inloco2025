'use client';

import { useState } from 'react';
import { useToast } from '@/components/admin/ToastProvider';

export default function DeleteButton({ id, onDelete }: { id: string, onDelete: (id: string) => Promise<void> }) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Tem certeza que deseja excluir este item?")) return;
        setLoading(true);
        try {
            await onDelete(id);
            toast.success('Item excluído com sucesso.');
        } catch (error) {
            toast.error("Erro ao excluir item");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="text-rose-400 hover:text-rose-600 font-medium text-sm transition-colors underline-offset-4 hover:underline disabled:opacity-50"
        >
            {loading ? '...' : 'Excluir'}
        </button>
    );
}
