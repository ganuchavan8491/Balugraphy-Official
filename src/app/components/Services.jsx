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
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional photography services tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-12 h-12 mb-4 text-gray-700" />
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm">{service.price}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All packages include high-resolution digital files and professional editing
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded-sm"
          >
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
