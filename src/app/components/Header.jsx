import { Camera, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4np ${
        scrolled ? "py-3 bg-black/80 backdrop-blur-lg border-b border-white/10" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* STYLISH LOGO */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors border border-white/10">
               <Camera className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">
              Balu<span className="text-white/40">graphy</span>
            </span>
          </div>

          {/* DESKTOP NAV - Stylish Pill Shape */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md">
            {['About', 'Gallery', 'Services', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all hover:bg-white/5 rounded-full"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA BUTTON */}
          <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all">
            Book Now
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU - Full Screen Blur */}
        <div className={`fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {['About', 'Gallery', 'Services', 'Contact'].map((item, index) => (
              <button
                key={item}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-3xl font-black uppercase italic text-white/40 hover:text-white transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}