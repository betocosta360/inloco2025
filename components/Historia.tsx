interface HistoriaProps {
  data: string;
  imagem?: string | null;
  video?: string | null;
}

export default function Historia({ data, imagem, video }: HistoriaProps) {
  if (!data) return null;

  return (
    <section className="py-24 text-white overflow-hidden relative min-h-[600px] flex items-center group">
      {/* BACKGROUND CONTENT */}
      {video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-out scale-110 group-hover:scale-100"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : imagem ? (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imagem}
            alt="História"
            className="w-full h-full object-cover transition-transform duration-[10000ms] ease-out scale-110 group-hover:scale-100"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-zinc-900" />
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          <h2 className="text-5xl font-black tracking-tighter sm:text-7xl mb-8 leading-none animate-reveal">
            Uma trajetória de <br />
            <span className="text-zinc-400">Transformação.</span>
          </h2>
          <div className="mt-4 w-24 h-2 bg-white rounded-full mb-12 animate-reveal" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-xl text-white/90 font-medium leading-relaxed animate-reveal reveal-delay-1">
              {data.split('\n').filter(p => p.trim()).slice(0, Math.ceil(data.split('\n').filter(p => p.trim()).length / 2)).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-6 text-xl text-white/70 font-medium leading-relaxed animate-reveal reveal-delay-2">
              {data.split('\n').filter(p => p.trim()).slice(Math.ceil(data.split('\n').filter(p => p.trim()).length / 2)).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
