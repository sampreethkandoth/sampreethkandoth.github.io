import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Electric System for Bearing Test Rig",
      organization: "Axel Christiernsson International AB - KTH",
      period: "Jan - Oct 2024",
      location: "Stockholm, Sweden",
      type: "Master Thesis",
      description: "Developed an electric system for a test rig for testing bearing current and shaft voltage to study the electric performance of greases.",
      achievements: [
        "Tested more than 150 steel and hybrid bearings for studying grease performance",
        "Oversaw test management using LabVIEW and extensive data collection using MATLAB",
        "Performed in-depth literature review on tribology of greases and bearings",
        "Customized bearing seal to improve test conditions and reliability"
      ],
      technologies: ["LabVIEW", "MATLAB", "Tribology", "Bearing Testing"]
    },
    {
      title: "Cable Gland Design for 5G Substation",
      organization: "KTH Royal Institute of Technology",
      period: "2023",
      location: "Stockholm, Sweden",
      type: "Design Project",
      description: "Redesigned the cable gland of the 5G substation of Ericsson by enhancing the ease of installation, extending product life and reducing worker's error.",
      achievements: [
        "Conducted tests on the prototype to verify compliance with requirements",
        "Validated product reliability and effectiveness",
        "Evaluated and selected rubber seal after extensive study maximizing recyclability, performance and durability",
        "Generated concept and developed detailed manufacturing drawings using Autodesk Fusion 360"
      ],
      technologies: ["Autodesk Fusion 360", "Product Design", "Manufacturing", "Materials Engineering"]
    },
    {
      title: "RCF Test Rig Development",
      organization: "KTH Royal Institute of Technology",
      period: "Feb - Apr 2023",
      location: "Stockholm, Sweden",
      type: "Research Project",
      description: "Contributed to the development of the Rolling Contact Fatigue test rig in KTH, procuring expertise in machine development and equipment functionality.",
      achievements: [
        "Performed assembling and disassembling of the test rig using different components",
        "Checked compatibility and improved machine skills and hands-on expertise"
      ],
      technologies: ["Mechanical Assembly", "Test Equipment", "Machine Development"]
    },
    {
      title: "Natural Draft Incinerator Design Improvement",
      organization: "RUBCO",
      period: "2021",
      location: "Kerala, India",
      type: "Design Innovation",
      description: "Designed a feeding mechanism by improving the feeding rate and solving the backfiring problem for effective waste management.",
      achievements: [
        "Developed innovative feeding mechanism for improved waste processing",
        "Solved critical backfiring issues affecting operational safety",
        "Enhanced overall efficiency of waste management system"
      ],
      technologies: ["Mechanical Design", "Waste Management", "Process Optimization"]
    },
    {
      title: "Elastomer Bearing Test Rig Design",
      organization: "KTH Royal Institute of Technology",
      period: "Jun - Aug 2023",
      location: "Stockholm, Sweden",
      type: "Research Project",
      description: "Designed a test rig that analyzes the compression and shear characteristics of an elastomer bearing used in a wave energy converter.",
      achievements: [
        "Established requirement specifications and developed concepts",
        "Modelled, optimized and created manufacturing drawings using Autodesk Fusion 360",
        "Selected components for the design ensuring quality and cost efficiency"
      ],
      technologies: ["Autodesk Fusion 360", "FEA", "Material Testing", "Energy Systems"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Key Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative engineering solutions spanning product design, tribology research, and sustainable technology development
          </p>
        </div>

        <Accordion type="multiple" className="space-y-4">
          {projects.map((project, index) => (
            <AccordionItem value={`project-${index}`} key={index} className="border-border/50 border rounded-lg shadow-card">
              <AccordionTrigger className="p-6 text-left hover:no-underline">
                <div className="flex flex-col w-full text-left">
                  <CardTitle className="text-xl text-foreground mb-1">{project.title}</CardTitle>
                  <div className="text-primary font-medium">{project.organization}</div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <Badge variant="secondary" className="w-fit">{project.type}</Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <CardContent className="px-0">
                  <p className="text-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
