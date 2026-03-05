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
        historiaVideo: initialData.historiaVideo || '',
        missao: initialData.missao || '',
        visao: initialData.visao || '',
        valores: initialData.valores || '',
        telefone: initialData.telefone || '',
        email: initialData.email || '',
        endereco: initialData.endereco || '',
        instagram: initialData.instagram || '',
        facebook: initialData.facebook || '',
        youtube: initialData.youtube || '',
        linkedin: initialData.linkedin || '',
        tiktok: initialData.tiktok || '',
        slogan: initialData.slogan || '',
    });

    const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const isVideo = file.type.startsWith('video/');
        const tid = toast.loading(`Enviando ${isVideo ? 'vídeo' : 'imagem'}...`);
        try {
            const fd = new FormData();
            fd.append('file', file);
            const res = await fetch('/api/upload', { method: 'POST', body: fd });
            const json = await res.json();
            if (!res.ok) throw new Error(json.error || 'Erro no upload');

            if (isVideo) {
                setFormData(prev => ({ ...prev, historiaVideo: json.url, historiaImagem: '' }));
            } else {
                setFormData(prev => ({ ...prev, historiaImagem: json.url, historiaVideo: '' }));
            }

            toast.dismiss(tid);
            toast.success(`${isVideo ? 'Vídeo' : 'Imagem'} enviado com sucesso!`);
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

                {/* MÍDIA DE FUNDO DA HISTÓRIA (IMAGEM OU VÍDEO) */}
                <div>
                    <label className={labelClass}>
                        Mídia de Fundo da História (Imagem ou Vídeo)
                    </label>

                    {/* Preview / Upload area */}
                    <div
                        className="relative w-full rounded-2xl border-2 border-dashed border-zinc-200 overflow-hidden bg-zinc-50 cursor-pointer group hover:border-zinc-400 transition-colors"
                        style={{ height: '220px' }}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {formData.historiaVideo ? (
                            <>
                                <video
                                    src={formData.historiaVideo}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    muted
                                    loop
                                    autoPlay
                                />
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <span className="text-white text-sm font-bold">Trocar mídia</span>
                                </div>
                                <div className="absolute top-3 right-3 bg-zinc-900 border border-zinc-700 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span> VÍDEO ATIVO
                                </div>
                            </>
                        ) : formData.historiaImagem ? (
                            <>
                                <img
                                    src={formData.historiaImagem}
                                    alt="Preview"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <span className="text-white text-sm font-bold">Trocar mídia</span>
                                </div>
                                <div className="absolute top-3 right-3 bg-white/90 text-zinc-900 text-[10px] font-black px-3 py-1 rounded-full shadow border border-zinc-100">
                                    IMAGEM ATIVA
                                </div>
                            </>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                {uploading ? (
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 border-4 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
                                        <span className="text-zinc-500 text-sm font-medium">Enviando mídia...</span>
                                    </div>
                                ) : (
                                    <>
                                        <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm font-bold text-zinc-700">Clique para enviar Imagem ou Vídeo</p>
                                            <p className="text-xs text-zinc-400 mt-1">JPG, PNG, WEBP ou MP4</p>
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
                        accept="image/jpeg,image/png,image/webp,image/gif,video/mp4"
                        className="hidden"
                        onChange={handleMediaUpload}
                    />

                    {/* Manual URL Input */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1 block">URL da Imagem</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.historiaImagem}
                                placeholder="Pode colar o link de uma imagem aqui..."
                                onChange={(e) => setFormData({ ...formData, historiaImagem: e.target.value, historiaVideo: e.target.value ? '' : formData.historiaVideo })}
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1 block">URL do Vídeo</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.historiaVideo}
                                placeholder="Pode colar o link de um vídeo aqui..."
                                onChange={(e) => setFormData({ ...formData, historiaVideo: e.target.value, historiaImagem: e.target.value ? '' : formData.historiaImagem })}
                            />
                        </div>
                    </div>
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

                {/* CONTATO & FOOTER */}
                <div className="pt-8 border-t border-zinc-100">
                    <h3 className="text-lg font-black text-zinc-900 uppercase tracking-tighter mb-6">Informações de Contato & Rodapé</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className={labelClass}>Slogan no Rodapé</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.slogan}
                                placeholder="Ex: Transformando o mercado de tecnologia..."
                                onChange={(e) => setFormData({ ...formData, slogan: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>Email de Contato</label>
                            <input
                                type="email"
                                className={inputClass}
                                value={formData.email}
                                placeholder="contato@escola.com.br"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>Telefone / WhatsApp</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.telefone}
                                placeholder="(00) 00000-0000"
                                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className={labelClass}>Endereço Completo</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.endereco}
                                placeholder="Rua Exemplo, 123 - Bairro, Cidade - UF"
                                onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                {/* REDES SOCIAIS */}
                <div className="pt-8 border-t border-zinc-100">
                    <h3 className="text-lg font-black text-zinc-900 uppercase tracking-tighter mb-6">Redes Sociais (Links)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelClass}>Instagram</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.instagram}
                                placeholder="https://instagram.com/perfil"
                                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>Facebook</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.facebook}
                                placeholder="https://facebook.com/perfil"
                                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>YouTube</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.youtube}
                                placeholder="https://youtube.com/@canal"
                                onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>LinkedIn</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.linkedin}
                                placeholder="https://linkedin.com/company/perfil"
                                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>TikTok</label>
                            <input
                                type="text"
                                className={inputClass}
                                value={formData.tiktok}
                                placeholder="https://tiktok.com/@perfil"
                                onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                            />
                        </div>
                    </div>
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
        </form >
    );
}
