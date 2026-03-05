import Banner from "@/components/Banner";
import Cursos from "@/components/Cursos";
import Equipe from "@/components/Equipe";
import Historia from "@/components/Historia";
import QuemSomos from "@/components/QuemSomos";
import Promocao from "@/components/Promocao";
import Header from "@/components/Header";
import ContatoFlutuante from "@/components/ContatoFlutuante";
import Depoimentos from "@/components/Depoimentos";
import TestimonialForm from "@/components/TestimonialForm";
import { prisma } from "@/lib/prisma";
import { getConfiguracao, getEquipeCompleta } from "@/lib/actions";
import Footer from "@/components/Footer";

export default async function Home() {
  const banners = await prisma.banner.findMany({ where: { ativo: true }, orderBy: { createdAt: 'desc' } });
  const cursos = await prisma.curso.findMany({ where: { ativo: true }, orderBy: { nome: 'asc' } });
  const equipe = await getEquipeCompleta();
  const depoimentos = await prisma.depoimento.findMany({
    where: { aprovado: true },
    include: { aluno: true },
    orderBy: { createdAt: 'desc' }
  });
  const promocao = await prisma.promocao.findFirst({ where: { ativa: true }, orderBy: { createdAt: 'desc' } });
  const config = await getConfiguracao();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      {promocao && <Promocao data={promocao} />}
      <Header />
      <section id="inicio">
        <Banner data={banners} />
      </section>
      <section id="quem-somos">
        <QuemSomos data={config} />
        <Historia
          data={config.historia}
          imagem={config.historiaImagem}
          video={config.historiaVideo}
        />
      </section>
      <section id="cursos">
        <Cursos data={cursos} />
      </section>
      <section id="equipe">
        <Equipe data={equipe} />
      </section>
      <section id="depoimentos">
        <Depoimentos data={depoimentos} />
        <TestimonialForm />
      </section>
      <Footer data={config} />
      <ContatoFlutuante />
    </div>
  );
}
