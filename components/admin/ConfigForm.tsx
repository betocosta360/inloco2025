'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { upsertConfiguracao } from '@/lib/actions';
import { useToast } from '@/components/admin/ToastProvider';

export default function ConfigForm({ initialData }: { initialData: any }) {
    const router = useRouter();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        historia: initialData.historia || '',
        historiaImagem: initialData.historiaImagem || '',
        missao: initialData.missao || '',
        visao: initialData.visao || '',
        valores: initialData.valores || '',
    });

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const tid = toast.loading('Enviando imagem...');
        try {
            const fd = new FormData();
            fd.append('file', file);
            const res = await fetch('/api/upload', { method: 'POST', body: fd });
            const json = await res.json();
            if (!res.ok) throw new Error(json.error || 'Erro no upload');
            setFormData(prev => ({ ...prev, historiaImagem: json.url }));
            toast.dismiss(tid);
            toast.success('Imagem enviada com sucesso!');
        } catch (err: any) {
            toast.dismiss(tid);
            toast.error('Erro ao fazer upload: ' + err.message);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const tid = toast.loading('Salvando informações...');
        try {
            await upsertConfiguracao(formData);
            toast.dismiss(tid);
            toast.success('Informações salvas com sucesso!');
            router.refresh();
        } catch (error: any) {
            toast.dismiss(tid);
            toast.error('Erro ao salvar: ' + (error?.message || 'Tente novamente'));
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full px-4 py-3 rounded-2xl border border-zinc-200 focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-300 text-sm";
    const labelClass = "block text-sm font-black text-zinc-900 mb-2 uppercase tracking-widest";

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl bg-white p-10 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50">
            <div className="space-y-6">

                {/* HISTÓRIA */}
                <div>
                    <label className={labelClass}>Nossa História</label>
                    <textarea
                        required
                        rows={6}
                        className={inputClass}
                        value={formData.historia}
                        placeholder="Escreva a história da escola..."
                        onChange={(e) => setFormData({ ...formData, historia: e.target.value })}
                    />
                </div>

                {/* IMAGEM DE FUNDO DA HISTÓRIA */}
                <div>
                    <label className={labelClass}>
                        Imagem de Fundo da História
                    </label>

                    {/* Preview / Upload area */}
                    <div
                        className="relative w-full rounded-2xl border-2 border-dashed border-zinc-200 overflow-hidden bg-zinc-50 cursor-pointer group hover:border-zinc-400 transition-colors"
                        style={{ height: '180px' }}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {formData.historiaImagem ? (
                            <>
                                <img
                                    src={formData.historiaImagem}
                                    alt="Preview"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                                {/* Dark overlay over the image */}
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <span className="text-white text-sm font-bold">Clique para trocar</span>
                                </div>
                                {/* Always-visible "change" badge */}
                                <div className="absolute top-3 right-3 bg-white/90 text-zinc-900 text-xs font-black px-3 py-1 rounded-full shadow">
                                    {uploading ? 'Enviando...' : 'Trocar imagem'}
                                </div>
                            </>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                {uploading ? (
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 border-4 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
                                        <span className="text-zinc-500 text-sm font-medium">Enviando imagem...</span>
                                    </div>
                                ) : (
                                    <>
                                        <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm font-bold text-zinc-700">Clique para enviar uma imagem</p>
                                            <p className="text-xs text-zinc-400 mt-1">JPG, PNG, WEBP ou GIF</p>
                                        </div>
                                        <div className="bg-zinc-900 text-white text-xs font-black px-5 py-2 rounded-xl flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            Fazer Upload
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Hidden file input */}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        className="hidden"
                        onChange={handleImageUpload}
                    />

                    {/* Or use URL */}
                    <div className="mt-3 flex items-center gap-2">
                        <div className="flex-1 h-px bg-zinc-100" />
                        <span className="text-xs text-zinc-400 font-medium">ou cole uma URL</span>
                        <div className="flex-1 h-px bg-zinc-100" />
                    </div>
                    <input
                        type="text"
                        className={`${inputClass} mt-3`}
                        value={formData.historiaImagem}
                        placeholder="https://exemplo.com/imagem.jpg"
                        onChange={(e) => setFormData({ ...formData, historiaImagem: e.target.value })}
                    />
                </div>

                {/* MISSÃO + VISÃO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className={labelClass}>Missão</label>
                        <textarea
                            required
                            rows={4}
                            className={inputClass}
                            value={formData.missao}
                            onChange={(e) => setFormData({ ...formData, missao: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Visão</label>
                        <textarea
                            required
                            rows={4}
                            className={inputClass}
                            value={formData.visao}
                            onChange={(e) => setFormData({ ...formData, visao: e.target.value })}
                        />
                    </div>
                </div>

                {/* VALORES */}
                <div>
                    <label className={labelClass}>Valores <span className="text-zinc-400 font-normal normal-case tracking-normal ml-1">(um por linha)</span></label>
                    <textarea
                        required
                        rows={4}
                        className={inputClass}
                        value={formData.valores}
                        onChange={(e) => setFormData({ ...formData, valores: e.target.value })}
                        placeholder={"Excelência\nInovação\nÉtica"}
                    />
                </div>
            </div>

            <div className="flex items-center justify-end pt-6 border-t border-zinc-100">
                <button
                    type="submit"
                    disabled={loading || uploading}
                    className="bg-zinc-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20 disabled:opacity-50 active:scale-[0.98]"
                >
                    {loading ? 'Salvando...' : 'Salvar Informações'}
                </button>
            </div>
        </form>
    );
}
