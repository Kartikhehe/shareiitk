import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InstagramFeed = () => {
  const feedRef = useScrollAnimation();

  // Placeholder posts - Replace with actual Instagram API integration
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop",
      caption: "Team collaboration at ShARE IITK",
      link: "https://www.instagram.com/share.iitk/"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=500&fit=crop",
      caption: "Strategic consulting workshop",
      link: "https://www.instagram.com/share.iitk/"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
      caption: "Global network meeting",
      link: "https://www.instagram.com/share.iitk/"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=500&fit=crop",
      caption: "Leadership development session",
      link: "https://www.instagram.com/share.iitk/"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop",
      caption: "DO WELL DO GOOD in action",
      link: "https://www.instagram.com/share.iitk/"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={feedRef} className="animate-on-scroll">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Latest from Instagram</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow our journey and see what we're up to @share.iitk
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-xl border border-border shadow-card hover:shadow-glow transition-smooth">
                      <img
                        src={post.image}
                        alt={post.caption}
                        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white text-sm font-medium">{post.caption}</p>
                          <div className="flex items-center gap-2 mt-2 text-white/80">
                            <Instagram className="w-4 h-4" />
                            <span className="text-xs">@share.iitk</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-card border-border" />
            <CarouselNext className="-right-4 bg-card border-border" />
          </Carousel>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/share.iitk/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View all posts on Instagram
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
