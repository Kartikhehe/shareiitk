import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Globe2, Users2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const aboutRef = useScrollAnimation();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  const objectivesRef = useScrollAnimation();
  const capabilitiesRef = useScrollAnimation();

  const objectives = [
    {
      icon: Target,
      title: "Drive Social Innovation",
      description: "We aspire to use our skills in strategy and analysis to support NGOs, social enterprises, and purpose-driven startups."
    },
    {
      icon: TrendingUp,
      title: "Foster a Culture of Excellence",
      description: "Through upskilling, collaborative learning, and participation in global competitions, we cultivate a high-performance, impact-focused mindset."
    },
    {
      icon: Globe2,
      title: "Expand Global Collaboration",
      description: "We envision building meaningful partnerships with organizations, contributing to projects that create both business value and positive change."
    }
  ];

  const capabilities = [
    "Partner with startups to unlock new markets and build effective pricing strategies",
    "Conduct Carbon Footprint and Do Well Do Good assessments",
    "Build strong strategic consulting capabilities through live projects",
    "Enable high-impact student learning through cross-disciplinary collaboration"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div ref={leftRef} className="space-y-6 animate-from-left">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                ShARE <span className="text-primary">IIT Kanpur</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We at ShARE-IIT Kanpur are a passionate team of aspiring problem-solvers and strategic thinkers dedicated to driving real-world impact through consulting. As part of a global network spanning 45+ countries, we combine rigorous training with practical experience to tackle challenges faced by startups, NGOs, and global organizations.
              </p>
            </div>
            
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in analytical thinking, collaboration, and leadership, we work at the intersection of business and social good, guided by our core philosophy of <span className="text-primary font-semibold">"doing well while doing good."</span>
              </p>
            </div>
          </div>

          {/* Image */}
          <div ref={rightRef} className="relative animate-from-right">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={teamImage} 
                alt="ShARE Team Collaboration" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div ref={objectivesRef} className="mb-20 animate-on-scroll">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Objectives</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-primary transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <objective.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{objective.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div ref={capabilitiesRef} className="animate-on-scroll">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">What We Do</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-card rounded-lg border border-border hover:shadow-primary transition-smooth group">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <p className="text-foreground leading-relaxed group-hover:text-primary transition-smooth">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;