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
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Let's create something beautiful together. Reach out to discuss your photography needs
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="event">Event Photography</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="product">Product Photography</option>
                  <option value="fashion">Fashion & Editorial</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 text-gray-700" />
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <p className="text-gray-600">balupatil@photography.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 text-gray-700" />
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-gray-700" />
                <div>
                  <h3 className="text-lg mb-1">Location</h3>
                  <p className="text-gray-600">New York, NY<br />Available for travel worldwide</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-sm">
              <h3 className="text-lg mb-2">Business Hours</h3>
              <p className="text-gray-600 text-sm">
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
