'use client';

interface PromocaoItem {
    titulo: string;
    desconto: string;
    cupom?: string | null;
}

export default function Promocao({ data }: { data: PromocaoItem }) {
    return (
        <div className="bg-zinc-900 text-white py-3 px-4 relative overflow-hidden">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
                <div className="flex items-center gap-2">
                    <span className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/20">
                        Oferta Especial
                    </span>
                    <p className="text-sm font-medium tracking-tight">
                        <span className="text-zinc-400">{data.titulo}:</span> <span className="font-bold text-zinc-100">{data.desconto} de desconto</span>
                    </p>
                </div>

                {data.cupom && (
                    <div className="flex items-center gap-3">
                        <span className="h-4 w-px bg-white/20 hidden sm:block"></span>
                        <p className="text-sm font-medium">
                            Use o cupom: <span className="bg-white text-zinc-900 font-bold px-2 py-0.5 rounded text-xs select-all cursor-pointer">{data.cupom}</span>
                        </p>
                    </div>
                )}
            </div>

            {/* Detalhe decorativo sutil */}
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
        </div>
    );
}
