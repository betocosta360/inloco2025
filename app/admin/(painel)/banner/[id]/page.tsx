import { prisma } from "@/lib/prisma";
import BannerForm from "@/components/admin/BannerForm";
import { notFound } from "next/navigation";

export default async function EditBannerPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const banner = await prisma.banner.findUnique({ where: { id: params.id } });

    if (!banner) notFound();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Editar Banner</h2>
            <BannerForm initialData={banner} />
        </div>
    );
}
