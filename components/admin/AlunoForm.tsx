'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { upsertAluno } from '@/lib/actions';
import { uploadImage } from '@/lib/upload';
import { useToast } from '@/components/admin/ToastProvider';

interface Curso {
    id: string;
    nome: string;
}

interface Turma {
    id: string;
    nome: string;
    cursoId: string;
}

export default function AlunoForm({
    initialData,
    cursos,
    turmas = [],
    role = 'ADMIN'
}: {
    initialData?: any,
    cursos: any[],
    turmas?: any[],
    role?: string
}) {
    const isReadOnly = role === 'PROFESSOR';
    const router = useRouter();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: initialData?.id || '',
        nome: initialData?.nome || '',
        email: initialData?.email || '',
        telefone: initialData?.telefone || '',
        endereco: initialData?.endereco || '',
        foto: initialData?.foto || '',
        nomePais: initialData?.nomePais || '',
        telefoneContato: initialData?.telefoneContato || '',
        cursoId: initialData?.cursoId || '',
        turmaId: initialData?.turmaId || '',
    });

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        const data = new FormData();
        data.set('file', file);

        try {
            const url = await uploadImage(data);
            if (url) setFormData({ ...formData, foto: url });
        } catch (error) {
            toast.error('Erro ao enviar foto');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.cursoId) {
            toast.error('Por favor, selecione um curso.');
            return;
        }
        setLoading(true);
        const tid = toast.loading('Salvando aluno...');
        try {
            await upsertAluno(formData);
            toast.dismiss(tid);
            toast.success('Aluno salvo com sucesso!');
            router.push('/admin/alunos');
            router.refresh();
        } catch (error: any) {
            toast.dismiss(tid);
            toast.error(error.message || 'Erro ao salvar aluno');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Nome Completo</label>
                    <input
                        type="text"
                        required
                        readOnly={isReadOnly}
                        className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-zinc-900 outline-none transition-all ${isReadOnly ? 'bg-zinc-50 border-zinc-200 cursor-default' : 'border-zinc-300'}`}
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">E-mail</label>
                    <input
                        type="email"
                        required
                        readOnly={isReadOnly}
                        className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-zinc-900 outline-none transition-all ${isReadOnly ? 'bg-zinc-50 border-zinc-200 cursor-default' : 'border-zinc-300'}`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Telefone / WhatsApp</label>
                    <input
                        type="text"
                        required
                        readOnly={isReadOnly}
                        className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-zinc-900 outline-none transition-all ${isReadOnly ? 'bg-zinc-50 border-zinc-200 cursor-default' : 'border-zinc-300'}`}
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Endereço Completo</label>
                    <input
                        type="text"
                        required
                        readOnly={isReadOnly}
                        className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-zinc-900 outline-none transition-all ${isReadOnly ? 'bg-zinc-50 border-zinc-200 cursor-default' : 'border-zinc-300'}`}
                        value={formData.endereco}
                        onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Nome dos Pais / Responsável (Opcional)</label>
                    <input
                        type="text"
                        readOnly={isReadOnly}
                        className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-zinc-900 outline-none transition-all ${isReadOnly ? 'bg-zinc-50 border-zinc-200 cursor-default' : 'border-zinc-300'}`}
                        value={formData.nomePais}
                        onChange={(e) => setFormData({ ...formData, nomePais: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Contato de Emergência / Pais</label>
                    <input
                        type="text"
                        readOnly={isReadOnly}
                        className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-zinc-900 outline-none transition-all ${isReadOnly ? 'bg-zinc-50 border-zinc-200 cursor-default' : 'border-zinc-300'}`}
                        value={formData.telefoneContato}
                        onChange={(e) => setFormData({ ...formData, telefoneContato: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Curso Matriculado</label>
                    <select
                        required
                        disabled={isReadOnly}
                        className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-zinc-900 outline-none transition-all bg-white ${isReadOnly ? 'bg-zinc-50 border-zinc-200 cursor-default opcacity-100' : 'border-zinc-300'}`}
                        value={formData.cursoId}
                        onChange={(e) => setFormData({ ...formData, cursoId: e.target.value })}
                    >
                        <option value="">Selecione um curso...</option>
                        {cursos.map((curso) => (
                            <option key={curso.id} value={curso.id}>{curso.nome}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Turma</label>
                    <select
                        disabled={isReadOnly || !formData.cursoId}
                        className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-zinc-900 outline-none transition-all bg-white ${isReadOnly ? 'bg-zinc-50 border-zinc-200 cursor-default opacity-100' : 'border-zinc-300'}`}
                        value={formData.turmaId}
                        onChange={(e) => setFormData({ ...formData, turmaId: e.target.value })}
                    >
                        <option value="">Selecione uma turma...</option>
                        {turmas
                            .filter(t => t.cursoId === formData.cursoId)
                            .map((turma) => (
                                <option key={turma.id} value={turma.id}>{turma.nome}</option>
                            ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Foto do Aluno</label>
                    {!isReadOnly && (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-zinc-100 file:text-zinc-700 hover:file:bg-zinc-200"
                        />
                    )}
                    {formData.foto && (
                        <div className="mt-2 text-[10px] text-zinc-400 truncate">
                            URL: {formData.foto}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-zinc-100">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-4 py-2 text-zinc-600 hover:text-zinc-900 font-medium transition-colors"
                >
                    {isReadOnly ? 'Voltar' : 'Cancelar'}
                </button>
                {!isReadOnly && (
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-zinc-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Salvando...' : 'Salvar Aluno'}
                    </button>
                )}
            </div>
        </form>
    );
}
