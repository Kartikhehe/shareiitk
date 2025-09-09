import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Award, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import akshatImage from "@/assets/akshat-chouksey.jpg";
import shikiharImage from "@/assets/shikihar-chaudhary.jpg";
import manyaImage from "@/assets/manya-gupta.jpg";
import keshavImage from "@/assets/keshav-khandelwal.jpg";

const Team = () => {
  const teamRef = useScrollAnimation();
  const highlightsRef = useScrollAnimation();
  const leadershipRef = useScrollAnimation();
  const headsRef = useScrollAnimation();

  const leadership = [
    {
      name: "Akshat Chouksey",
      position: "President",
      department: "Leadership",
      image: akshatImage
    },
    {
      name: "Shikihar Chaudhary",
      position: "Vice President, External Affairs",
      department: "External Relations",
      image: shikiharImage
    },
    {
      name: "Manya Gupta",
      position: "Vice President, Events & Internal Affairs",
      department: "Operations",
      image: manyaImage
    },
    {
      name: "Keshav Khandelwal",
      position: "Vice President, Startups",
      department: "Business Development",
      image: keshavImage
    }
  ];

  const heads = [
    { name: "Aditya Sati", position: "Head" },
    { name: "Akshat Garg", position: "Head" },
    { name: "Kartik Raj", position: "Head" },
    { name: "Aayushman", position: "Head" },
    { name: "Khush Maheswari", position: "Head" }
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Global Expertise, Local Impact",
      description: "Backed by the ShARE global network (2850+ students, 98 top universities, 41 countries), our team blends world-class training with deep understanding of emerging markets."
    },
    {
      icon: Users,
      title: "Passionate Problem Solvers",
      description: "Experienced in consulting, competitions, and strategic projects. Worked with firms, startups and various NGOs."
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      description: "Team members with backgrounds in firms like PwC, Vedanta, and leading NGOs. Skilled in market research, analytics, and business strategy."
    },
    {
      icon: Award,
      title: "Real Accountability",
      description: "Delivers real-world impact through high-quality consulting projects while fostering socially responsible leaders under 'Do Well, Do Good.'"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={teamRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate group of aspiring problem solvers with diverse expertise and shared commitment to excellence.
          </p>
        </div>

        {/* Team Highlights */}
        <div ref={highlightsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-on-scroll">
          {highlights.map((highlight, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-primary transition-smooth group text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leadership Team */}
          <div ref={leadershipRef} className="animate-from-left">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Leadership Team</h3>
            <div className="space-y-4">
              {leadership.map((member, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-primary transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">{member.name}</h4>
                        <p className="text-primary font-medium">{member.position}</p>
                        <p className="text-sm text-muted-foreground">{member.department}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Department Heads */}
          <div ref={headsRef} className="animate-from-right">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Department Heads</h3>
            <div className="grid gap-4">
              {heads.map((head, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-primary transition-smooth group">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">{head.name}</h4>
                        <p className="text-primary font-medium">{head.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-border shadow-primary max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Network</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Interested in collaborating with us or joining our team? We're always looking for passionate individuals who share our vision of doing well while doing good.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow hover:scale-105 transform transition-bounce"
                >
                  Get in Touch
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;