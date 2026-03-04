interface HistoriaProps {
  data: string;
  imagem?: string | null;
}

export default function Historia({ data, imagem }: HistoriaProps) {
  if (!data) return null;

  return (
    <section className="py-24 text-white overflow-hidden relative min-h-[500px]">
      {/* Background image or dark fallback */}
      {imagem ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imagem})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-900" />
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Decorative skew element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black tracking-tighter sm:text-6xl mb-8 leading-none">
            Uma trajetória de <br />
            <span className="text-white/50">Transformação.</span>
          </h2>
          <div className="w-16 h-2 bg-white rounded-full mb-12" />

          <div className="space-y-6 text-lg text-white/75 font-medium leading-relaxed">
            {data.split('\n').filter(p => p.trim()).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
