import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Building2, Users, Award, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import agrivisionLogo from "@/assets/agrivision-logo.jpg";
import apnibaatLogo from "@/assets/apnibaat-logo.jpg";
import rahoLogo from "@/assets/raho-logo.jpg";
import placeLogo from "@/assets/place-logo.jpg";

const Projects = () => {
  const projectsRef = useScrollAnimation();
  const competitionsRef = useScrollAnimation();
  const clientProjectsRef = useScrollAnimation();

  const competitions = [
    {
      title: "Malang Globe International Business Case Competition 2025",
      organizer: "Brawijaya University",
      description: "The case was provided by OCBC Ventura, focusing on building innovative and scalable strategies for early-stage startups in Southeast Asia.",
      status: "Semi-Finals",
      achievements: [
        "Proudly represented our institute at the competition",
        "Delivered strong performances with impactful strategic clarity",
        "Advanced through quarterfinals and reached semi-finals"
      ]
    },
    {
      title: "International Business Competition",
      organizer: "Airlangga University",
      description: "Competition focused on driving business market growth through innovation and multi-channel strategies.",
      status: "Qualified",
      achievements: [
        "Tasked with developing forward-thinking market solutions",
        "Advanced through initial rounds with innovative proposals",
        "Successfully qualified for the next round"
      ]
    }
  ];

  const clientProjects = [
    {
      title: "AgriVision Business Model Innovation",
      company: "AgriVision",
      logo: agrivisionLogo,
      description: "Collaborating with AgriVision to diversify from agriculture into new business verticals through innovation-driven partnerships and cross-sector expansion.",
      status: "Ongoing",
      website: "#",
      achievements: [
        "Comprehensive analysis of current resources and market gaps",
        "Strategic foundation for expansion with scalability potential",
        "Refined business model aligned with ecosystem needs"
      ]
    },
    {
      title: "ApniBaat User Experience Enhancement",
      company: "ApniBaat",
      logo: apnibaatLogo,
      description: "Improving product features and user interface while driving targeted outreach through social media campaigns and building an active user community.",
      status: "Active",
      website: "#",
      achievements: [
        "Enhanced UI/UX for smoother user experience",
        "Successful social media and campus outreach campaigns",
        "Built early community of active users for organic growth"
      ]
    },
    {
      title: "RAHO CRM Optimization",
      company: "RAHO",
      logo: rahoLogo,
      description: "Optimizing CRM systems and delivering seamless hospitality experience in Coorg through streamlined operations and customer management.",
      status: "Completed",
      website: "#",
      achievements: [
        "Streamlined user registration and booking confirmations",
        "Digitized workforce management and housekeeping tasks",
        "Implemented direct complaint logging system with live updates"
      ]
    },
    {
      title: "Place App Launch Strategy",
      company: "Place",
      logo: placeLogo,
      description: "Building compelling launch narrative and supporting product development for effortless belonging platform targeting first 100,000 users.",
      status: "Pre-Launch",
      website: "#",
      achievements: [
        "Compelling launch narrative for tier-1 college communities",
        "Contributed to profiling and matching algorithms",
        "Strategic channels identified for reaching top students and alumni"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={projectsRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From international competitions to real-world consulting projects, we deliver impact across diverse sectors.
          </p>
        </div>

        {/* Competitions Section */}
        <div ref={competitionsRef} className="mb-20 animate-from-left">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            <Trophy className="inline-block w-6 h-6 mr-2 text-primary" />
            International Competitions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitions.map((competition, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-primary transition-smooth group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {competition.title}
                      </CardTitle>
                      <p className="text-primary font-medium mt-1">{competition.organizer}</p>
                    </div>
                    <Badge variant={competition.status === "Semi-Finals" ? "default" : "secondary"} className="ml-2">
                      {competition.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {competition.description}
                  </p>
                  <div className="space-y-2">
                    {competition.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Projects Section */}
        <div ref={clientProjectsRef} className="animate-from-right">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            <Building2 className="inline-block w-6 h-6 mr-2 text-primary" />
            Client Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {clientProjects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-primary transition-smooth group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2">
                    <img 
                      src={project.logo} 
                      alt={`${project.company} logo`}
                      className="w-12 h-12 rounded-lg object-cover border border-border shadow-sm"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {project.title}
                      </CardTitle>
                      <p className="text-primary font-medium">{project.company}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={
                          project.status === "Ongoing" ? "default" : 
                          project.status === "Active" ? "secondary" : 
                          project.status === "Completed" ? "outline" : "default"
                        }
                      >
                        {project.status}
                      </Badge>
                      <a 
                        href={project.website} 
                        className="text-primary hover:text-primary-dark transition-smooth"
                        aria-label={`Visit ${project.company} website`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;