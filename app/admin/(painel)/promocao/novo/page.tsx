import PromocaoForm from "@/components/admin/PromocaoForm";

export default function NovaPromocaoPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">Nova Promoção</h2>
            <PromocaoForm />
        </div>
    );
}
