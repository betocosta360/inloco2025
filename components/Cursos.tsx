'use client';

interface CursoItem {
  id: string;
  nome: string;
  descricao: string;
  duracao: string;
  nivel: string;
  preco: string;
  imagem: string;
}

export default function Cursos({ data }: { data: CursoItem[] }) {
  if (data.length === 0) return null;

  return (
    <div className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100 tracking-tighter">
          Nossos Cursos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((curso) => (
            <div key={curso.id} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-all group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={curso.imagem}
                  alt={curso.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">{curso.nome}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">{curso.descricao}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {curso.duracao}
                  </span>
                  <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {curso.nivel}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{curso.preco}</span>
                  <button className="bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                    Mais Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}