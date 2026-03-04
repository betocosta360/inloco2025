'use client';

import { useState } from 'react';
import { createDepoimento } from '@/lib/actions';

export default function TestimonialForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        curso: '',
        texto: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createDepoimento(formData);
            setSubmitted(true);
            setFormData({ nome: '', curso: '', texto: '' });
        } catch (error) {
            alert('Erro ao enviar depoimento. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Obrigado pelo seu depoimento!</h3>
                <p className="text-emerald-700">Sua mensagem foi enviada e será exibida no site após a revisão da nossa equipe.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-emerald-600 font-semibold hover:underline"
                >
                    Enviar outro comentário
                </button>
            </div>
        );
    }

    return (
        <section className="py-16 bg-zinc-50 border-y border-zinc-200" id="quero-comentar">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-black text-zinc-900 sm:text-4xl tracking-tight">Deixe seu Depoimento</h2>
                    <p className="mt-4 text-zinc-600 font-medium">Sua opinião é fundamental para crescermos e ajudarmos mais alunos.</p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-zinc-700 mb-2">Seu Nome</label>
                            <input
                                type="text"
                                required
                                placeholder="Ex: Maria Silva"
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-300"
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-zinc-700 mb-2">Qual seu curso?</label>
                            <input
                                type="text"
                                required
                                placeholder="Ex: Informática Básica"
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-300"
                                value={formData.curso}
                                onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">Seu Comentário</label>
                        <textarea
                            required
                            rows={4}
                            placeholder="Conte como foi sua experiência com a InLoco..."
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-300 resize-none"
                            value={formData.texto}
                            onChange={(e) => setFormData({ ...formData, texto: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-zinc-900 text-white py-4 rounded-xl font-black text-lg hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20 disabled:opacity-50 active:scale-[0.98]"
                    >
                        {loading ? 'Enviando...' : 'Publicar Depoimento'}
                    </button>

                    <p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest font-bold">
                        Seu depoimento passará por uma moderação antes de aparecer no site.
                    </p>
                </form>
            </div>
        </section>
    );
}
