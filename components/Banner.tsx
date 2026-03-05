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
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="relative h-[500px] md:h-[710px] overflow-hidden">
      {data.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat bg-zinc-900"
            style={{ backgroundImage: `url('${slide.imagem}')` }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">{slide.titulo}</h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 drop-shadow-sm">{slide.subtitulo || slide.descricao}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {data.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}