'use client';

import { useEffect, useRef } from 'react';

interface EquipeItem {
  id: string;
  nome: string;
  cargo: string;
  imagem: string;
  descricao: string;
}

export default function Equipe({ data }: { data: EquipeItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || data.length === 0) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: 350, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scroll, 6000);
    return () => clearInterval(interval);
  }, [data]);

  if (data.length === 0) return null;

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden" id="equipe">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter sm:text-5xl">
            Nossa Equipe
          </h2>
          <div className="mt-4 w-20 h-1.5 bg-zinc-900 dark:bg-zinc-100 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-zinc-500 font-medium">
            Conheça os profissionais que fazem a Inloco acontecer todos os dias.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory px-4 -mx-4 scroll-smooth"
          >
            {data.map((membro) => (
              <div
                key={membro.id}
                /* Fixed width so the card never grows */
                className="w-[280px] md:w-[300px] flex-none group snap-start bg-zinc-50 dark:bg-zinc-900/50 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none"
              >
                {/* Image container: fixed height, clipped */}
                <div className="relative w-full h-64 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <img
                    src={membro.imagem}
                    alt={membro.nome}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 leading-tight line-clamp-1">
                    {membro.nome}
                  </h3>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">
                    {membro.cargo}
                  </p>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium line-clamp-3 leading-relaxed">
                    {membro.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}