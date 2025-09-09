import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, TrendingUp, Building, Users } from "lucide-react";

const Projects = () => {
  const competitions = [
    {
      title: "Malang Globe Case Competition 2025",
      organization: "Brawijaya University",
      client: "OCBC Ventura",
      achievement: "Semi-Finalist",
      description: "Delivered innovative and scalable strategies for early-stage startups in Southeast Asia with impactful strategic clarity and financial insights.",
      icon: Award,
      status: "Advanced to Semi-Finals"
    },
    {
      title: "International Business Competition",
      organization: "Airlangga University",
      achievement: "Qualified for Next Round",
      description: "Focused on driving business market growth through innovation and multi-channel strategies with forward-thinking, sustainable market solutions.",
      icon: TrendingUp,
      status: "Successfully Qualified"
    }
  ];

  const clientProjects = [
    {
      name: "AgriVision",
      sector: "Agriculture & Academic",
      description: "Supported diversification into new business verticals through comprehensive analysis of current resources, market gaps, and scalability potential.",
      services: ["Business Model Innovation", "Market Analysis", "Strategic Foundation"],
      icon: Building,
      website: "#"
    },
    {
      name: "ApniBaat",
      sector: "Social Platform",
      description: "Improving product features and user interface while driving targeted outreach through social media campaigns and campus networks.",
      services: ["Product Enhancement", "User Engagement", "Community Building"],
      icon: Users,
      website: "#"
    },
    {
      name: "RAHO",
      sector: "Hospitality",
      description: "Optimizing CRM and delivering seamless hospitality experience in Coorg through automation and data insights.",
      services: ["CRM Optimization", "Workflow Automation", "Data Analytics"],
      icon: Building,
      website: "#"
    },
    {
      name: "Place",
      sector: "Social Networking",
      description: "Building compelling launch narrative and supporting product development for alumni networks targeting first 100,000 users.",
      services: ["Launch Strategy", "Product Development", "Network Building"],
      icon: Users,
      website: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From international competitions to real-world client projects, we deliver strategic solutions that create lasting value and meaningful change.
          </p>
        </div>

        {/* Competitions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">International Competitions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitions.map((competition, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-primary transition-smooth group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <competition.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth">{competition.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{competition.organization}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {competition.client && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Client: </span>
                      <span className="text-primary font-medium">{competition.client}</span>
                    </div>
                  )}
                  <p className="text-muted-foreground leading-relaxed">{competition.description}</p>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4" />
                    <span>{competition.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Client Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {clientProjects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-primary transition-smooth group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth">{project.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{project.sector}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-smooth">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Services Provided:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
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