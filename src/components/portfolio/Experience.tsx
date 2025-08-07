import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";


export const Experience = () => {
  const experiences = [
    {
      title: "Master Thesis Student",
      company: "Axel Christiernsson International AB - KTH Royal Institute of Technology",
      period: "Jan - Oct 2024",
      location: "Stockholm, Sweden",
      type: "Research & Development",
      description: "Developed an electric system for test rig for testing bearing current and shaft voltage to study the electric performance of greases.",
      responsibilities: [
        "Tested more than 150 steel and hybrid bearings for studying grease performance and improving energy consumption",
        "Oversaw test management using LabVIEW and extensive data collection and processing using MATLAB",
        "Performed an in-depth literature review on the tribology of greases and bearings, bearing current and shaft voltage",
        "Customized bearing seal that fits the requirement of the test improving test condition and reliability"
      ],
      technologies: ["LabVIEW", "MATLAB", "Bearing Testing", "Tribology", "Data Analysis"]
    },
    {
      title: "Research Intern",
      company: "KTH Royal Institute of Technology",
      period: "Jun - Aug 2024",
      location: "Stockholm, Sweden",
      type: "Research Internship",
      description: "Bearing testing research focusing on deep groove ball bearings and grease performance analysis.",
      responsibilities: [
        "Undertook tests on deep groove ball bearings to compare the performance of different greases",
        "Analyzed grease behaviour under different operating conditions",
        "Developed MATLAB-based speed profile and managed test parameters in LabVIEW",
        "Enhanced test accuracy and control",
        "Performed sensor mounting, assembling and disassembling of the test rig, laboratory treatment of test specimen and ultrasonic cleaning"
      ],
      technologies: ["MATLAB", "LabVIEW", "Bearing Analysis", "Sensor Systems", "Laboratory Equipment"]
    },
    {
      title: "Research Intern",
      company: "KTH Royal Institute of Technology",
      period: "Jun - Aug 2023",
      location: "Stockholm, Sweden",
      type: "Design Research",
      description: "Conducted research on elastomer bearing test rig design and electronic traction machine testing.",
      responsibilities: [
        "Designed a test rig that analyzes the compression and shear characteristics of an elastomer bearing used in a wave energy converter",
        "Established requirement specifications and developed and selected concepts by ensuring project alignment and feasibility",
        "Modelled, optimized and created manufacturing drawings using Autodesk Fusion 360 for efficient production and assembly",
        "Selected components for the design ensuring quality and cost efficiency",
        "Conducted tests on Electronic Traction Machine (ETM) and analyzed tribological characteristics of various grease in replicated gear contact conditions",
        "Acquired expertise in laboratory protocols and specialized training in precise handling of test equipment"
      ],
      technologies: ["Autodesk Fusion 360", "FEA", "Manufacturing Design", "Tribology Testing", "ETM"]
    },
    {
      title: "Junior Research Officer",
      company: "Government of Kerala, India",
      period: "Nov 2021 - Jun 2022",
      location: "Kerala, India",
      type: "Government Research",
      description: "Worked as a Junior Research Officer in the Commission for Reforms in Higher Education assigned by the Government of Kerala undertaking research tasks assisting the commission.",
      responsibilities: [
        "Collected and analysed a large amount of data from the whole higher education society of the state to draw actionable conclusions",
        "Organised meetings for the commission overseeing logistics, scheduling and participant management to facilitate productive sessions"
      ],
      technologies: ["Data Analysis", "Research Methodology", "Statistical Analysis", "Report Writing"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Engineering Design Track Machine Design",
      institution: "KTH Royal Institute of Technology",
      period: "2022-2024",
      location: "Stockholm, Sweden",
      description: "Advanced coursework in mechanical engineering design, machine design principles, and sustainable engineering solutions."
    },
    {
      degree: "Bachelor of Technology (Honors) in Mechanical Engineering",
      institution: "APJ Abdul Kalam Technological University",
      period: "2017-2021",
      location: "Kerala, India",
      description: "Comprehensive undergraduate program in mechanical engineering fundamentals, design, and manufacturing processes."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle" id="experience">
  <div className="container max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-foreground">Professional Experience</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Progressive experience in engineering research, product development, and advanced tribology studies
      </p>
    </div>

    <Accordion type="multiple" className="space-y-4 mb-16">
      {experiences.map((exp, index) => (
        <AccordionItem key={index} value={`exp-${index}`} className="border-border/50 border rounded-lg shadow-card">
          <AccordionTrigger className="p-6 text-left hover:no-underline">
            <div className="flex flex-col text-left w-full">
              <CardTitle className="text-xl text-foreground mb-1">{exp.title}</CardTitle>
              <div className="flex items-center gap-2 text-primary font-medium mb-1">
                <Building className="w-4 h-4" />
                {exp.company}
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
                <Badge variant="secondary" className="w-fit">{exp.type}</Badge>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6 pt-0">
            <CardContent className="px-0">
              <p className="text-foreground mb-6 leading-relaxed">{exp.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
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

    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold mb-4 text-foreground">Education</h3>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {education.map((edu, index) => (
        <Card key={index} className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">{edu.degree}</CardTitle>
            <div className="text-primary font-medium">{edu.institution}</div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {edu.period}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {edu.location}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">{edu.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

  );
};