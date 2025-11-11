import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/iitk-library.png";
import shareLogo from "@/assets/share-iitk-logo.png";

const Hero = () => {
  const heroRef = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="IIT Kanpur Library" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <div ref={heroRef} className="space-y-8 animate-on-scroll max-w-4xl">
            <div className="space-y-6">
              <div className="hero-fade-in flex flex-col items-center">
                <img src={shareLogo} alt="ShARE IITK Logo" className="w-24 h-24 object-contain mb-6" />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  ShARE IITK
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mt-4 font-medium drop-shadow-md">
                  IIT Kanpur chapter of DO WELL DO GOOD - Future leaders program
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="hero-fade-in-delay">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-white drop-shadow-lg">2852+</div>
                  <div className="text-sm text-white/80">Students</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-white drop-shadow-lg">98</div>
                  <div className="text-sm text-white/80">Top Universities</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-white drop-shadow-lg">41</div>
                  <div className="text-sm text-white/80">Countries</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-fade-in-delay">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:shadow-glow transition-smooth group">
                  Explore Our Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Our Network
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;