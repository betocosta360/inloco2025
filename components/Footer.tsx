import Link from 'next/link';
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ data }: { data: any }) {
    if (!data) return null;

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
                            {data.slogan || "Transformando o mercado de tecnologia através de educação prática e suporte especializado."}
                        </p>

                        {/* REDES SOCIAIS */}
                        <div className="flex gap-4 mt-8">
                            <a href={data.instagram || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#E4405F]/20">
                                <Instagram size={20} />
                            </a>
                            <a href={data.facebook || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#1877F2]/20">
                                <Facebook size={20} />
                            </a>
                            <a href={data.youtube || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#FF0000]/20">
                                <Youtube size={20} />
                            </a>
                            <a href={data.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#0A66C2]/20">
                                <Linkedin size={20} />
                            </a>
                            <a href={data.tiktok || "https://tiktok.com"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#ff0050] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#ff0050]/40 border border-white/20">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                                </svg>
                            </a>
                        </div>
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
                            {data.email && (
                                <li className="flex items-start gap-3">
                                    <Mail size={18} className="text-zinc-600 mt-0.5 shrink-0" />
                                    <span className="text-zinc-400">{data.email}</span>
                                </li>
                            )}
                            {data.telefone && (
                                <li className="flex items-start gap-3">
                                    <Phone size={18} className="text-zinc-600 mt-0.5 shrink-0" />
                                    <span className="text-zinc-400">{data.telefone}</span>
                                </li>
                            )}
                            {data.endereco && (
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="text-zinc-600 mt-0.5 shrink-0" />
                                    <span className="text-zinc-400">{data.endereco}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-bold uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} InLoco Cursos. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
