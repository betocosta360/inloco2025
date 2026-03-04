import { prisma } from "@/lib/prisma";
import UsuarioForm from "@/components/admin/UsuarioForm";
import { notFound } from "next/navigation";

export default async function EditUsuarioPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const usuario = await prisma.administrador.findUnique({ where: { id: params.id } });

    if (!usuario) notFound();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Administrador</h2>
            <UsuarioForm initialData={usuario} />
        </div>
    );
}
