import ProfessorForm from "@/components/admin/ProfessorForm";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function EditarProfessor({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const professor = await prisma.professor.findUnique({ where: { id } });

    if (!professor) notFound();

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Professor</h2>
                <p className="text-zinc-500 text-sm">Modifique os dados do docente.</p>
            </div>
            <ProfessorForm professor={professor} />
        </div>
    );
}
