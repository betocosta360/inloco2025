'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CursoItem {
  id: string;
  nome: string;
  descricao: string;
  conteudo?: string | null;
  duracao: string;
  nivel: string;
  preco: string;
  imagem: string;
}

export default function Cursos({ data }: { data: CursoItem[] }) {
  const [selectedCurso, setSelectedCurso] = useState<CursoItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  if (data.length === 0) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter sm:text-5xl animate-reveal">
            Nossos Cursos
          </h2>
          <div className="mt-4 w-20 h-1.5 bg-zinc-900 dark:bg-zinc-100 mx-auto rounded-full"></div>
        </div>

        <div className="relative group">
          {/* Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 dark:from-zinc-900/50 to-transparent z-1 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 dark:from-zinc-900/50 to-transparent z-1 pointer-events-none hidden md:block" />

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-8 lg:px-12"
          >
            {data.map((curso, idx) => (
              <div
                key={curso.id}
                className="flex-shrink-0 w-[280px] md:w-[350px] snap-center bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-all group/card"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={curso.imagem}
                    alt={curso.nome}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 opacity-0 animate-reveal reveal-delay-1">{curso.nome}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2 opacity-0 animate-reveal reveal-delay-2">{curso.descricao}</p>
                  <div className="flex justify-between items-center mb-4 opacity-0 animate-reveal reveal-delay-3">
                    <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {curso.duracao}
                    </span>
                    <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {curso.nivel}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-800 opacity-0 animate-reveal reveal-delay-3">
                    <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{curso.preco}</span>
                    <button
                      onClick={() => setSelectedCurso(curso)}
                      className="bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      Mais Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Detalhes do Curso */}
      {selectedCurso && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-reveal">
            <div className="relative h-48 md:h-64">
              <img
                src={selectedCurso.imagem}
                alt={selectedCurso.nome}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedCurso(null)}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter leading-tight">
                    {selectedCurso.nome}
                  </h3>
                  <div className="mt-2 flex gap-3">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{selectedCurso.nivel}</span>
                    <span className="text-xs font-bold text-zinc-400">•</span>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{selectedCurso.duracao}</span>
                  </div>
                </div>
                <div className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
                  {selectedCurso.preco}
                </div>
              </div>

              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line font-medium">
                  {selectedCurso.conteudo || selectedCurso.descricao}
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <button
                  onClick={() => setSelectedCurso(null)}
                  className="flex-1 bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Fechar Detalhes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}