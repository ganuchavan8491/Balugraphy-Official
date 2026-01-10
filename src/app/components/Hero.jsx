import { ChevronDown } from "lucide-react";
import '../../styles/button.css';

export function Hero() {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 h-[120%] w-[200%] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/iexmudnsUBY?start=0&end=45&autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=iexmudnsUBY,AltZDl-dFKw"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>


      <div className="relative z-10 flex flex-col items-center justify-end text-center text-white px-4 h-full pb-24">
        <h1 className="text-3xl md:text-4xl mb-4">Balugraphy Official</h1>
        <p className="text-xl md:text-1xl mb-8 text-gray-200">
          Professional Photographer | Storyteller Through Lens
        </p>
        <button
          onClick={scrollToGallery}
          className="px-8 py-3 bg-transparent text-white border-2 border-white transition-colors rounded-sm hover:bg-white hover:text-black , hero-btn"
        >
          View My Work
        </button>
      </div>


      <button
        onClick={scrollToGallery}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
