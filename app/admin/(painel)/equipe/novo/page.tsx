import EquipeForm from "@/components/admin/EquipeForm";

export default function NovoMembroPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Novo Membro da Equipe</h2>
            <EquipeForm />
        </div>
    );
}
