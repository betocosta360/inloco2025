import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white py-20 border-t border-zinc-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-3xl font-black tracking-tighter flex items-center gap-2 mb-6">
                            <span className="w-10 h-10 bg-white rounded-lg text-black flex items-center justify-center font-black text-xl">IL</span>
                            InLoco Cursos
                        </Link>
                        <p className="text-zinc-500 max-w-sm text-lg font-medium leading-relaxed">
                            Transformando o mercado de tecnologia através de educação prática e suporte especializado.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs text-zinc-400 mb-6">Links Rápidos</h4>
                        <ul className="space-y-4 text-zinc-500 font-bold">
                            <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
                            <li><Link href="#cursos" className="hover:text-white transition-colors">Nossos Cursos</Link></li>
                            <li><Link href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs text-zinc-400 mb-6">Contato</h4>
                        <ul className="space-y-4 text-zinc-500 font-bold">
                            <li className="flex items-center gap-2">
                                <span className="text-white">Email:</span> contato@inlococursos.com.br
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-white">Tel:</span> (00) 0000-0000
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-bold uppercase tracking-widest">
                    <p>© 2025 InLoco Cursos. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/admin" className="hover:text-white transition-colors">Área Restrita</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
