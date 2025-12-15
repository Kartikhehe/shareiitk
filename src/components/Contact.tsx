import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const contactRef = useScrollAnimation();

  const teamContacts = [
    {
      name: "Akshat Chouksey",
      role: "President, ShARE IITK",
      email: "akshatc22@iitk.ac.in",
      linkedin: "https://www.linkedin.com/in/akshat-chouksey-034539253/"
    },
    {
      name: "Manya Gupta",
      role: "Vice President",
      linkedin: "https://www.linkedin.com/in/manya-gupta-427631250/"
    },
    {
      name: "Keshav Khandelwal",
      role: "Vice President",
      linkedin: "https://www.linkedin.com/in/keshav-khandelwal-6b0270184/"
    },
    {
      name: "Shikhar Choudhary",
      role: "Vice President",
      linkedin: "https://www.linkedin.com/in/shikhar-chaudhary-03bb61255/"
    },
    {
      name: "Aditya Sati",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/aditya-sati-55a94a2a3/"
    },
    {
      name: "Khush Maheshwari",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/khush-maheshwari-031187274/"
    },
    {
      name: "Aayushman Kumar",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/aayushmankumar"
    },
    {
      name: "Akshat Garg",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/akshat-garg-a188b7230/"
    },
    {
      name: "Ayush Kumar Singh",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/ayush-kumar-singh-7763b733a/"
    },
    {
      name: "Kartik Raj",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/kartikr23/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact us via LinkedIn or email directly. We're always happy to connect!
          </p>
        </div>

        <div ref={contactRef} className="animate-on-scroll">
          {/* Primary Contact */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Primary Contact</h3>
                <p className="text-muted-foreground">Reach out to our president directly</p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="text-center">
                  <p className="text-xl font-semibold text-foreground">{teamContacts[0].name}</p>
                  <p className="text-muted-foreground">{teamContacts[0].role}</p>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={`mailto:${teamContacts[0].email}`}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-smooth group"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{teamContacts[0].email}</span>
                  </a>
                  
                  <a
                    href={teamContacts[0].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition-smooth"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Contacts */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Connect with Our Team</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamContacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:shadow-card transition-smooth group"
                >
                  <div className="mb-4">
                    <p className="font-semibold text-foreground">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.role}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    {contact.email && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#0A66C2] hover:underline"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Follow Us</h3>
              <p className="text-muted-foreground mb-6">Stay updated with our latest activities and events</p>
              <a
                href="https://www.instagram.com/share.iitk/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:shadow-glow transition-smooth"
              >
                <Instagram className="w-6 h-6" />
                <span className="font-semibold">@share.iitk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
