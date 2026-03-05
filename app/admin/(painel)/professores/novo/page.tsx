import ProfessorForm from "@/components/admin/ProfessorForm";

export default function NovoProfessor() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Novo Professor</h2>
                <p className="text-zinc-500 text-sm">Cadastre um novo docente no sistema.</p>
            </div>
            <ProfessorForm />
        </div>
    );
}
