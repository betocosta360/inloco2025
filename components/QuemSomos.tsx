interface QuemSomosProps {
  missao: string;
  visao: string;
  valores: string;
}

export default function QuemSomos({ data }: { data: QuemSomosProps }) {
  const valoresList = data.valores.split('\n').filter(v => v.trim() !== '');

  return (
    <div className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter sm:text-5xl">Nossa Essência</h2>
          <div className="mt-4 w-20 h-1.5 bg-zinc-900 dark:bg-zinc-100 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Missão */}
          <div className="bg-zinc-50 dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none group">
            <div className="w-16 h-16 bg-zinc-900 dark:bg-zinc-100 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-zinc-900 dark:text-zinc-100">Missão</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              {data.missao}
            </p>
          </div>

          {/* Visão */}
          <div className="bg-zinc-50 dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none group">
            <div className="w-16 h-16 bg-zinc-900 dark:bg-zinc-100 rounded-2xl flex items-center justify-center mb-8 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 8.07 5 12 5c1.512 0 2.91.502 4.06 1.375l.002.001m-4.06 10.25a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-zinc-900 dark:text-zinc-100">Visão</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              {data.visao}
            </p>
          </div>

          {/* Valores */}
          <div className="bg-zinc-900 dark:bg-zinc-100 p-10 rounded-[2.5rem] transition-all hover:shadow-2xl hover:shadow-zinc-900/20 group">
            <div className="w-16 h-16 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 rotate-6 group-hover:rotate-0 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-white dark:text-zinc-900">Valores</h3>
            <ul className="space-y-3">
              {valoresList.map((valor, i) => (
                <li key={i} className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest text-xs">
                  <span className="w-1.5 h-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-full"></span>
                  {valor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
