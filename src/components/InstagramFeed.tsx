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
      image: "../../public/images/image1.jpg",
      caption: "CFA Guidance session",
      link: "https://www.instagram.com/p/DQfP435E24H/"
    },
    {
      id: 2,
      image: "../public/images/image2.jpg",
      caption: "MBA Guidance Session",
      link: "https://www.instagram.com/p/DMxzN5yT6pJ/"
    },
    {
      id: 3,
      image: "../public/images/image3.jpg",
      caption: "Meet our complete team",
      link: "https://www.instagram.com/p/DLHvd-MM-KO/?img_index=1"
    },
    {
      id: 4,
      image: "../public/images/image4.jpg",
      caption: "We are back!!!",
      link: "https://www.instagram.com/p/DKL92mrsjEJ/?img_index=1"
    },
    {
      id: 5,
      image: "../public/images/image5.jpg",
      caption: "Past Tenure projects",
      link: "https://www.instagram.com/p/Cue2hy5p1NE/?img_index=1/"
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
