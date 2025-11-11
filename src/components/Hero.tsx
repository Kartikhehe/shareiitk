import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-light-bg.jpg";
import shareLogo from "@/assets/share-iitk-logo.png";

const Hero = () => {
  const heroRef = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="ShARE Global Network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={heroRef} className="space-y-8 animate-on-scroll">
            <div className="space-y-4">
              <div className="hero-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <img src={shareLogo} alt="ShARE IITK Logo" className="w-20 h-20 object-contain" />
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Globe className="w-4 h-4" />
                    <span>Global Community</span>
                  </div>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Global ShARE
                  <span className="block text-primary">Community</span>
                </h1>
              </div>
              
              <div className="hero-fade-in-delay">
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  <span className="text-primary font-semibold">DO WELL DO GOOD</span> - Training future leaders through consulting excellence and social impact across 98 top universities in 41 countries.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="hero-fade-in-delay">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2852+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98</div>
                  <div className="text-sm text-muted-foreground">Top Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">41</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-fade-in-delay">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-primary hover:shadow-glow transition-smooth group">
                  Explore Our Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Join Our Network
                </Button>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative float">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">ShARE IIT Kanpur</h3>
                  <p className="text-muted-foreground">Passionate problem-solvers and strategic thinkers</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-lg text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Strategic Consulting</div>
                  </div>
                  <div className="glass p-4 rounded-lg text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Global Network</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground italic">
                    "Doing well while doing good"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;