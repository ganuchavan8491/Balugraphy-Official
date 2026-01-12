import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Dark Theme optimized classes
  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-500 transition-all";

  return (
    <section id="contact" className="py-20 px-4 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-bold">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Let's create something beautiful together. Reach out to discuss your photography needs.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-lg border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2 text-gray-300">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-[#1a1a1a]">Select a service</option>
                  <option value="wedding" className="bg-[#1a1a1a]">Wedding Photography</option>
                  <option value="portrait" className="bg-[#1a1a1a]">Portrait Session</option>
                  <option value="event" className="bg-[#1a1a1a]">Event Photography</option>
                  <option value="real-estate" className="bg-[#1a1a1a]">Real Estate</option>
                  <option value="product" className="bg-[#1a1a1a]">Product Photography</option>
                  <option value="fashion" className="bg-[#1a1a1a]">Fashion & Editorial</option>
                  <option value="other" className="bg-[#1a1a1a]">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-colors rounded-sm uppercase tracking-widest text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                  <Mail className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">balupatil@photography.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                  <Phone className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                  <MapPin className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">New York, NY<br />Available for travel worldwide</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-gray-500">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" }
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-white"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 border border-white/5 rounded-lg">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Business Hours</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: By Appointment Only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}