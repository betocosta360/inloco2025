import UsuarioForm from "@/components/admin/UsuarioForm";

export default function NovoUsuarioPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Novo Administrador</h2>
            <UsuarioForm />
        </div>
    );
}
