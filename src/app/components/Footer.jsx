import { Camera } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // bg-gray-900 ko change karke pitch black (#050505) kiya hai
    <footer className="bg-[#050505] text-white py-16 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6 group cursor-default">
              <Camera className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              <span className="text-xl font-bold tracking-tight">Balugraphy Official</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Professional photographer specializing in weddings, portraits, and creative storytelling through imagery. Capturing your best moments.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-300">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-300">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-6">
              Subscribe to get updates on new work and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                // Input ko dark glass look diya hai
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-white/30 text-white placeholder-gray-600 transition-all"
              />
              <button className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors rounded-sm text-xs uppercase tracking-widest">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-gray-600 tracking-wide uppercase">
            © {currentYear} Balugraphy Official. Designed with ❤️ by <span className="text-gray-400">Ganesh Chavan</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}