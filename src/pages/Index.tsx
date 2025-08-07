import { Header } from "@/components/portfolio/Header";
import { TechnicalSkills } from "@/components/portfolio/TechnicalSkills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Navbar } from "@/components/portfolio/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <TechnicalSkills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
