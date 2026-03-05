import DespesaForm from "@/components/admin/DespesaForm";

export default function NovaDespesa() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Nova Despesa</h2>
                <p className="text-zinc-500 text-sm">Cadastre um novo gasto da escola.</p>
            </div>
            <DespesaForm />
        </div>
    );
}
