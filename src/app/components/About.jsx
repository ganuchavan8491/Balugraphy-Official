import { Award, Camera, Heart } from "lucide-react";

export function About() {
  return (
    // bg-gray-50 ko change karke pitch black background aur white text kiya hai
    <section id="about" className="py-20 px-4 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1692754107964-b0e0422ada3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjB3b3JraW5nJTIwY2FtZXJhfGVufDF8fHx8MTc2Nzg5ODE1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Photographer at work"
              // Border add ki hai taaki image dark background par alag dikhe
              className="w-full h-[500px] object-cover rounded-sm border border-white/10"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl mb-6 font-bold">About Me</h2>
            <p className="text-lg text-gray-400 mb-6">
              With over 10 years of experience in professional photography, I specialize in
              capturing authentic moments that tell compelling stories. My passion lies in
              creating timeless images that evoke emotion and preserve precious memories.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              From intimate portraits to grand celebrations, I approach each project with
              dedication, creativity, and attention to detail. My work has been featured in
              numerous publications and I've had the privilege of working with clients worldwide.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                {/* Icons ko light gray kiya hai */}
                <Camera className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                <p className="text-2xl mb-1 font-bold">10+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                <p className="text-2xl mb-1 font-bold">25+</p>
                <p className="text-sm text-gray-500">Awards Won</p>
              </div>
              <div className="text-center">
                <Heart className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                <p className="text-2xl mb-1 font-bold">500+</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}