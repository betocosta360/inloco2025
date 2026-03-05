'use client';

import { useEffect, useRef } from 'react';

interface DepoimentoItem {
    id: string;
    nome: string;
    curso: string;
    texto: string;
    imagem?: string | null;
    aluno?: {
        foto?: string | null;
        [key: string]: any;
    } | null;
    [key: string]: any;
}

export default function Depoimentos({ data }: { data: DepoimentoItem[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || data.length === 0) return;

        const scroll = () => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
            }
        };

        const interval = setInterval(scroll, 5000);
        return () => clearInterval(interval);
    }, [data]);

    if (data.length === 0) return null;

    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden" id="depoimentos">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
                        <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter sm:text-5xl">
                            O que dizem nossos alunos
                        </h2>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                            Histórias reais de quem transformou sua carreira com a InLoco Cursos.
                        </p>
                    </div>
                </div>

                <div className="relative group">
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory px-4 -mx-4 scroll-smooth"
                    >
                        {data.map((depoimento) => (
                            <div
                                key={depoimento.id}
                                className="min-w-[320px] md:min-w-[400px] bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 flex flex-col h-full snap-start transition-transform hover:scale-[1.02] duration-500"
                            >
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 ring-4 ring-zinc-50 dark:ring-zinc-800/50 shadow-inner">
                                        {(depoimento.aluno?.foto || depoimento.imagem) ? (
                                            <img
                                                src={depoimento.aluno?.foto || depoimento.imagem || ''}
                                                alt={depoimento.nome}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xl font-black">
                                                {depoimento.nome.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-zinc-900 dark:text-zinc-100 text-lg">{depoimento.nome}</h4>
                                        <p className="text-sm text-zinc-500 font-bold uppercase tracking-wide">{depoimento.curso}</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <svg className="absolute -top-4 -left-2 w-10 h-10 text-zinc-100 dark:text-zinc-800 -z-10" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M10 8v8H6v6h6V8h-2zm12 0v8h-4v6h6V8h-2z" />
                                    </svg>
                                    <p className="text-zinc-700 dark:text-zinc-300 italic text-lg leading-relaxed mb-8 flex-1">
                                        "{depoimento.texto}"
                                    </p>
                                </div>
                                <div className="mt-auto flex text-amber-400 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
