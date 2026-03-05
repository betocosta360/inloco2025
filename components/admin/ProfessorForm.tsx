'use client';

import { useState } from "react";
import { upsertProfessor } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/admin/ToastProvider";
import { uploadImage } from "@/lib/upload";

export default function ProfessorForm({ professor }: { professor?: any }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const toast = useToast();
    const [imageUrl, setImageUrl] = useState(professor?.imagem || '');

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const tid = toast.loading("Enviando imagem...");
        const formData = new FormData();
        formData.append('file', file);

        try {
            const url = await uploadImage(formData);
            if (url) {
                setImageUrl(url);
                toast.success("Imagem enviada!");
            }
        } catch (error) {
            toast.error("Erro ao enviar imagem.");
        } finally {
            toast.dismiss(tid);
        }
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const tid = toast.loading("Salvando professor...");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            await upsertProfessor({
                ...data,
                id: professor?.id,
                imagem: imageUrl,
                ativo: formData.get('ativo') === 'on'
            });
            toast.dismiss(tid);
            toast.success("Professor salvo com sucesso!");
            router.push('/admin/professores');
            router.refresh();
        } catch (error) {
            toast.dismiss(tid);
            toast.error("Erro ao salvar professor.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Nome Completo</label>
                    <input
                        name="nome"
                        defaultValue={professor?.nome}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        defaultValue={professor?.email}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Senha</label>
                    <input
                        name="senha"
                        type="password"
                        required={!professor}
                        placeholder={professor ? "Deixe em branco para manter" : ""}
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Foto do Professor</label>
                    <div className="flex flex-col gap-4">
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt="Preview"
                                className="w-24 h-24 rounded-full object-cover border border-zinc-200"
                            />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-zinc-100 file:text-zinc-700 hover:file:bg-zinc-200 transition-all cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Biografia</label>
                <textarea
                    name="biografia"
                    defaultValue={professor?.biografia}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all resize-none"
                />
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    name="ativo"
                    id="ativo"
                    defaultChecked={professor ? professor.ativo : true}
                    className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                />
                <label htmlFor="ativo" className="text-sm font-medium text-zinc-700 cursor-pointer">Professor Ativo</label>
            </div>

            <div className="flex justify-end gap-4 pt-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-6 py-2 rounded-lg font-medium text-zinc-600 hover:bg-zinc-100 transition-all"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-zinc-900 text-white px-8 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-all disabled:opacity-50"
                >
                    {loading ? 'Salvando...' : 'Salvar Professor'}
                </button>
            </div>
        </form>
    );
}
