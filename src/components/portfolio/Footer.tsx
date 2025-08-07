import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 bg-gradient-primary text-primary-foreground" id="contact">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to collaborate on innovative engineering solutions? I'm always excited to discuss new opportunities and challenging projects.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-sm border-white/20 shadow-elevated">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <a 
                href="mailto:kandoth@kth.se" 
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                kandoth@kth.se
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <a 
                href="tel:+46734812965" 
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                +46 734812965
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/sampreeth-kandoth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Sampreeth Kandoth
              </a>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="secondary" 
              size="lg" 
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <a href="mailto:kandoth@kth.se">
                Start a Conversation
              </a>
            </Button>
          </div>
        </Card>

        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-primary-foreground/60">
            © 2024 Sampreeth Kandoth. Designed for innovation and sustainability.
          </p>
        </div>
      </div>
    </footer>
  );
};