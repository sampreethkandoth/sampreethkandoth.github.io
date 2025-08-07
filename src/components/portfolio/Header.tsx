import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export const Header = () => {
  return (
    <header id="about" className="relative min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-accent/2" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Sampreeth Kandoth
          </h1>
          <div className="text-xl md:text-2xl text-secondary-foreground mb-4 font-medium">
            Design Engineer specialized in Mechanical Systems, Tribology, and Testing
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mechanical Design Engineer specializing in engineering innovation, tribology, and sustainable product development. 
            Expert in CAD design, test rig development, and product optimization with a passion for solving complex engineering challenges.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 shadow-elevated bg-card/80 backdrop-blur-sm border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Email</div>
                <a href="mailto:kandoth@kth.se" className="text-primary hover:text-primary-dark transition-colors">
                  kandoth@kth.se
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Phone</div>
                <a href="tel:+46734812965" className="text-primary hover:text-primary-dark transition-colors">
                  +46 734812965
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">LinkedIn</div>
                <a 
                  href="https://linkedin.com/in/sampreeth-kandoth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  Sampreeth Kandoth
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Location</div>
                <div className="text-muted-foreground">Stockholm, Sweden</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="professional" size="lg" asChild>
              <a href="mailto:kandoth@kth.se">
                Get In Touch
              </a>
            </Button>
            <a href="/CV.pdf" download>
            <Button variant="outline" size="lg">
              Download CV
            </Button>
            </a>
          </div>
        </Card>
      </div>
    </header>
  );
};