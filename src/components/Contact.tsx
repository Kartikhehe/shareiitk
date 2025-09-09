import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import globalNetworkImage from "@/assets/global-network.jpg";

const Contact = () => {
  const contactMethods = [
    {
      icon: Instagram,
      label: "Instagram",
      value: "@share_iitkanpur",
      href: "https://instagram.com/share_iitkanpur",
      color: "hover:text-pink-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ShARE IIT Kanpur",
      href: "https://linkedin.com/company/share-iit-kanpur",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@shareiitk.com",
      href: "mailto:contact@shareiitk.com",
      color: "hover:text-primary"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "IIT Kanpur, Uttar Pradesh, India"
    },
    {
      icon: Phone,
      label: "Network",
      value: "Global presence across 41 countries"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on meaningful projects? Let's connect and explore how we can create impact together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-gradient-card border-border hover:shadow-primary transition-smooth group">
                    <CardContent className="p-6">
                      <a 
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 group-hover:scale-105 transition-transform"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <method.icon className={`w-6 h-6 text-primary transition-smooth ${method.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{method.label}</div>
                          <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                            {method.value}
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Office Information</h3>
              <div className="space-y-4">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-card rounded-lg border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-3">Ready to Collaborate?</h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Whether you're a startup looking for strategic consulting, an organization seeking social impact solutions, or a student interested in joining our network, we'd love to hear from you.
              </p>
              <Button variant="hero" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send us a Message
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={globalNetworkImage} 
                alt="Global ShARE Network" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-2">Global Network</h3>
                  <p className="text-xl opacity-90">Connecting minds across continents</p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">2852+</div>
                      <div className="text-sm opacity-80">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">98</div>
                      <div className="text-sm opacity-80">Universities</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">41</div>
                      <div className="text-sm opacity-80">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;