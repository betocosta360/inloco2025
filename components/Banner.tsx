'use client';

import { useState, useEffect } from 'react';

interface BannerItem {
  id: string;
  titulo: string | null;
  subtitulo: string | null;
  descricao: string | null;
  imagem: string;
  link?: string | null;
}

export default function Banner({ data }: { data: BannerItem[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, [data]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="relative h-[500px] md:h-[710px] overflow-hidden bg-zinc-900">
      {data.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Zooming Image Wrapper */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.imagem}
              alt={slide.subtitulo || 'Banner'}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
            <div className="text-center text-white px-4">
              <h2 className={`text-4xl md:text-6xl font-black mb-6 tracking-tighter drop-shadow-2xl transition-all duration-700 delay-300 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {slide.subtitulo}
              </h2>
              <p className={`text-xl md:text-2xl max-w-2xl mx-auto font-medium opacity-90 drop-shadow-lg transition-all duration-700 delay-500 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {slide.descricao}
              </p>
              {slide.link && (
                <div className={`mt-10 transition-all duration-700 delay-700 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <a href={slide.link} className="bg-white text-zinc-900 px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-zinc-100 transition-colors">
                    Saiba Mais
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      {data.length > 1 && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}