'use client';

import { useState } from "react";
import { upsertTurma } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/admin/ToastProvider";

export default function TurmaForm({
    turma,
    cursos,
    professores,
    role = 'ADMIN',
    currentProfessorId
}: {
    turma?: any;
    cursos: any[];
    professores: any[];
    role?: string;
    currentProfessorId?: string;
}) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const toast = useToast();

    // Parse existing horario "HH:mm - HH:mm"
    const [startH, endH] = (turma?.horario || "08:00 - 10:00").split(" - ");
    const [horaInicio, setHoraInicio] = useState(startH);
    const [horaFim, setHoraFim] = useState(endH);

    const isProfessor = role === 'PROFESSOR';

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const tid = toast.loading("Salvando turma...");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Auto-set professorId for professors, or use the form value for admins
        const professorId = isProfessor ? (currentProfessorId || turma?.professorId) : data.professorId;
        const horario = `${horaInicio} - ${horaFim}`;

        try {
            await upsertTurma({
                ...data,
                id: turma?.id,
                professorId,
                horario,
                ativo: formData.get('ativo') === 'on'
            });
            toast.dismiss(tid);
            toast.success("Turma salva com sucesso!");
            router.push('/admin/turmas');
            router.refresh();
        } catch (error) {
            toast.dismiss(tid);
            toast.error("Erro ao salvar turma.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Nome da Turma</label>
                    <input
                        name="nome"
                        defaultValue={turma?.nome}
                        required
                        placeholder="Ex: Turma A - Noite"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Curso</label>
                    <select
                        name="cursoId"
                        defaultValue={turma?.cursoId}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all bg-white"
                    >
                        <option value="">Selecione um curso</option>
                        {cursos.map(curso => (
                            <option key={curso.id} value={curso.id}>{curso.nome}</option>
                        ))}
                    </select>
                </div>
                {!isProfessor && (
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-700">Professor</label>
                        <select
                            name="professorId"
                            defaultValue={turma?.professorId}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all bg-white"
                        >
                            <option value="">Selecione um professor</option>
                            {professores.map(prof => (
                                <option key={prof.id} value={prof.id}>{prof.nome}</option>
                            ))}
                        </select>
                    </div>
                )}
                <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-semibold text-zinc-700 text-zinc-400 block pb-1">Horário</label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <span className="text-[10px] uppercase font-bold text-zinc-400">Início</span>
                            <select
                                value={horaInicio}
                                onChange={(e) => setHoraInicio(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all bg-white"
                            >
                                {Array.from({ length: 32 }).map((_, i) => {
                                    const hour = Math.floor(i / 2) + 7;
                                    const min = i % 2 === 0 ? '00' : '30';
                                    const time = `${hour.toString().padStart(2, '0')}:${min}`;
                                    return <option key={time} value={time}>{time}</option>;
                                })}
                            </select>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] uppercase font-bold text-zinc-400">Fim</span>
                            <select
                                value={horaFim}
                                onChange={(e) => setHoraFim(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all bg-white"
                            >
                                {Array.from({ length: 32 }).map((_, i) => {
                                    const hour = Math.floor(i / 2) + 7;
                                    const min = i % 2 === 0 ? '00' : '30';
                                    const time = `${hour.toString().padStart(2, '0')}:${min}`;
                                    return <option key={time} value={time}>{time}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-zinc-700">Dias da Semana</label>
                    <select
                        name="diasSemana"
                        defaultValue={turma?.diasSemana}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 outline-none transition-all bg-white"
                    >
                        <option value="">Selecione os dias</option>
                        <option value="Segunda e Quarta">Segunda e Quarta</option>
                        <option value="Terça e Quinta">Terça e Quinta</option>
                        <option value="Sexta-feira">Sexta-feira</option>
                        <option value="Sábado">Sábado</option>
                        <option value="Segunda, Quarta e Sexta">Segunda, Quarta e Sexta</option>
                        <option value="Terça, Quinta e Sábado">Terça, Quinta e Sábado</option>
                        <option value="Segunda a Sexta">Segunda a Sexta</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    name="ativo"
                    id="ativo"
                    defaultChecked={turma ? turma.ativo : true}
                    className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                />
                <label htmlFor="ativo" className="text-sm font-medium text-zinc-700 cursor-pointer">Turma Ativa</label>
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
                    {loading ? 'Salvando...' : 'Salvar Turma'}
                </button>
            </div>
        </form>
    );
}
