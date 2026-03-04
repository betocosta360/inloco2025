import { getConfiguracao } from "@/lib/actions";
import ConfigForm from "@/components/admin/ConfigForm";

export default async function ConfigPage() {
    const config = await getConfiguracao();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black tracking-tight text-zinc-900">Informações da Escola</h1>
                <p className="text-zinc-500 mt-1">Gerencie a história, missão, visão e valores da InLoco.</p>
            </div>

            <ConfigForm initialData={config} />
        </div>
    );
}
