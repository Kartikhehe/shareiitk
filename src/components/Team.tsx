import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Award, Globe, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import akshatImage from "@/assets/akshat-chouksey.jpg";
import shikiharImage from "@/assets/shikihar-chaudhary.jpg";
import manyaImage from "@/assets/manya-gupta.jpg";
import keshavImage from "@/assets/keshav-khandelwal.jpg";
import { useState } from "react";

interface TeamMember {
  name: string;
  position: string;
  department: string;
  image?: string;
  info: string;
  linkedin: string;
}

const TeamMemberCard = ({ member, isHead = false }: { member: TeamMember; isHead?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-gradient-card border-border hover:shadow-primary transition-smooth group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative">
          {member.image ? (
            <div className="relative h-64 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-sm text-foreground leading-relaxed mb-3">{member.info}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 bg-gradient-primary flex items-center justify-center">
              <Briefcase className="w-20 h-20 text-primary-foreground opacity-50" />
            </div>
          )}
        </div>
        <div className="p-6">
          <h4 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">{member.name}</h4>
          <p className="text-primary font-medium mb-1">{member.position}</p>
          <p className="text-sm text-muted-foreground">{member.department}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Team = () => {
  const teamRef = useScrollAnimation();
  const highlightsRef = useScrollAnimation();
  const leadershipRef = useScrollAnimation();
  const headsRef = useScrollAnimation();

  const leadership = [
    {
      name: "Akshat Chouksey",
      position: "President",
      department: "Electrical Engineering",
      image: akshatImage,
      info: "4th year undergrad | VC @Campus fund | President, ShARE IITK | Ex GenAI Intern @PwC",
      linkedin: "https://www.linkedin.com/in/akshat-chouksey-034539253/"
    },
    {
      name: "Keshav Khandelwal",
      position: "Vice President, Startups",
      department: "Business Development",
      image: keshavImage,
      info: "Full Stack intern at GrubWala",
      linkedin: "https://www.linkedin.com/in/keshav-khandelwal-6b0270184/"
    },
    {
      name: "Manya Gupta",
      position: "Vice President, Events & Internal Affairs",
      department: "Operations",
      image: manyaImage,
      info: "Business Analyst Intern @Vedanta Ltd. | 4th year undergrad",
      linkedin: "https://www.linkedin.com/in/manya-gupta"
    },
    {
      name: "Shikhar Chaudhary",
      position: "Vice President, External Affairs",
      department: "External Relations",
      image: shikiharImage,
      info: "4th year undergrad",
      linkedin: "https://www.linkedin.com/in/shikhar-chaudhary-03bb61255/"
    }
  ];

  const heads = [
    { 
      name: "Aayushman Kumar", 
      position: "Head",
      department: "Civil Engineering",
      info: "3rd Year | Upcoming SDE intern at Flipkart",
      linkedin: "https://www.linkedin.com/in/aayushmankumar"
    },
    { 
      name: "Aditya Sati", 
      position: "Head",
      department: "Civil Engineering",
      info: "3rd Year | Upcoming Summer Intern at Battery Smart as Strategy and Operations Intern",
      linkedin: "https://www.linkedin.com/in/aditya-sati-55a94a2a3/"
    },
    { 
      name: "Akshat Garg", 
      position: "Head",
      department: "Materials Science and Engineering",
      info: "3rd Year | Upcoming Intern at Deutsche Bank",
      linkedin: "https://www.linkedin.com/in/akshat-garg-a188b7230/"
    },
    { 
      name: "Ayush Kumar Singh", 
      position: "Head",
      department: "Business",
      info: "Incoming intern at BNY Mellon",
      linkedin: "https://www.linkedin.com/in/ayush-kumar-singh-7763b733a/"
    },
    { 
      name: "Kartik Raj", 
      position: "Head",
      department: "Mechanical Engineering",
      info: "3rd Year | Incoming SDE intern at IBY, Japan",
      linkedin: "https://www.linkedin.com/in/kartikr23/"
    },
    { 
      name: "Khush Maheshwari", 
      position: "Head",
      department: "Economic Sciences",
      info: "3rd Year | Upcoming summer Intern at Nomura",
      linkedin: "https://www.linkedin.com/in/khush-maheshwari-031187274/"
    }
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

        {/* President */}
        <div className="animate-fade-in mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">President</h3>
          <div className="max-w-md mx-auto">
            <TeamMemberCard member={leadership[0]} />
          </div>
        </div>

        {/* Vice Presidents */}
        <div ref={leadershipRef} className="animate-from-left mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Vice Presidents</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.slice(1).map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Department Heads */}
        <div ref={headsRef} className="animate-from-right">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Department Heads</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {heads.map((head, index) => (
              <TeamMemberCard key={index} member={head} isHead />
            ))}
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