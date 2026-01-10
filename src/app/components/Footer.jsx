import { Camera } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-6 h-6" />
              <span className="text-xl">Balugraphy Official</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional photographer specializing in weddings, portraits, and creative storytelling through imagery.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get updates on new work and special offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors rounded-sm text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Balugraphy Official. Designed by ❤️ by Ganesh Chavan.</p>
        </div>
      </div>
    </footer>
  );
}
