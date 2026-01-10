import { useState, useEffect } from "react";
import "../../styles/gallery.css";

function getDir(e, el) {
  const { width, height, top, left } = el.getBoundingClientRect();
  const x = (e.clientX - left - width/2) * (width > height ? height/width : 1);
  const y = (e.clientY - top - height/2) * (height > width ? width/height : 1);
  const d = Math.round((Math.atan2(y, x) * (180/Math.PI) + 180)/90 + 3) % 4;
  return ["top","right","bottom","left"][d];
}

const galleryItems = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1647730346059-c7c75506451e?auto=format&fit=crop&w=1200&q=80",
    category: "wedding",
    title: "Romantic Wedding"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?auto=format&fit=crop&w=1200&q=80",
    category: "portrait",
    title: "Portrait Session"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1699885846876-85bdb95c6e40?auto=format&fit=crop&w=1200&q=80",
    category: "landscape",
    title: "Nature's Beauty"
  },
  {
    id: 4,
    url: "https://instagram.fbom28-1.fna.fbcdn.net/v/t51.82787-15/580996174_18539447569065444_6583299072560307293_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc2NjI1MDM1OTk0MjMxNTU5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=N0PP7iOK-SUQ7kNvwEgjq-l&_nc_oc=Adktz2O5-Z-5szIrY9nwweEK8J_mEF7fLMq6kC5hMbQBsoq9lGr7L-vAmtqAZCtEKBs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbom28-1.fna&_nc_gid=YTe5SLeuPLjikieEiyICLA&oh=00_AfrEfO75BUXFbKkQkooylRLZ78rZkQEh_Yna7h91ktOYzw&oe=69671BE2",
    category: "fashion",
    title: "Fashion Editorial"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1647542582327-ae2f66c5854d?auto=format&fit=crop&w=1200&q=80",
    category: "architecture",
    title: "Urban Architecture"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1682078234868-412ec5566118?auto=format&fit=crop&w=1200&q=80",
    category: "product",
    title: "Product Photography"
  }
];

const categories = ["all", "wedding", "portrait", "landscape", "fashion", "architecture", "product"];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const cards = document.querySelectorAll(".dir-card");

    const enter = (e) => {
      const card = e.currentTarget;
      const overlay = card.querySelector(".dir-overlay");
      const dir = getDir(e, card);

      overlay.classList.remove("out-top","out-right","out-bottom","out-left");
      overlay.classList.remove("from-top","from-right","from-bottom","from-left");
      
      overlay.classList.add(`from-${dir}`);
      requestAnimationFrame(() => overlay.classList.add("in"));
    };

    const leave = (e) => {
      const card = e.currentTarget;
      const overlay = card.querySelector(".dir-overlay");
      const dir = getDir(e, card);

      overlay.classList.remove("in");
      overlay.classList.add(`out-${dir}`);
    };

    cards.forEach(card => {
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, [filtered]);

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-semibold text-center mb-3">Portfolio</h2>
        <p className="text-center text-gray-600 mb-10">My recent photography works</p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-5 py-2 rounded-full capitalize transition ${
                selectedCategory === c
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div key={item.id} className="dir-card aspect-square relative cursor-pointer overflow-hidden">

              <img src={item.url} alt={item.title} className="w-full h-full object-cover" />

              <div className="dir-overlay">
                <div className="text-center">
                  <p className="text-xl font-medium">{item.title}</p>
                  <p className="text-sm text-gray-200 capitalize">{item.category}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
