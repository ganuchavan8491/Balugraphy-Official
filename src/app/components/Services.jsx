import { Camera, Heart, Building2, Package, Users, Image } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Capture your special day with beautiful, timeless images that tell your unique love story.",
    price: "Starting at $2,500"
  },
  {
    icon: Users,
    title: "Portrait Sessions",
    description: "Professional portraits for individuals, families, and corporate headshots.",
    price: "Starting at $350"
  },
  {
    icon: Camera,
    title: "Event Photography",
    description: "Document your corporate events, parties, and celebrations with professional quality.",
    price: "Starting at $500"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Showcase properties with stunning architectural and interior photography.",
    price: "Starting at $400"
  },
  {
    icon: Package,
    title: "Product Photography",
    description: "High-quality product images for e-commerce, catalogs, and marketing materials.",
    price: "Starting at $300"
  },
  {
    icon: Image,
    title: "Fashion & Editorial",
    description: "Creative fashion shoots and editorial content for brands and publications.",
    price: "Custom Pricing"
  }
];

export function Services() {
  return (
    // Background ko dark (#0a0a0a) kiya hai
    <section id="services" className="py-20 px-4 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-bold">Services</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Professional photography services tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                // White cards ko dark glass look (bg-white/5) mein badla hai
                className="bg-white/5 p-8 rounded-sm border border-white/5 hover:border-white/20 transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 mb-4 text-gray-300 group-hover:text-white transition-colors" />
                <h3 className="text-2xl mb-3 font-semibold">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <p className="text-sm font-bold tracking-widest uppercase text-gray-300">{service.price}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            All packages include high-resolution digital files and professional editing
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            // Button ko pure white aur text black kiya hai contrast ke liye
            className="px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors rounded-sm uppercase tracking-wider text-sm"
          >
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}