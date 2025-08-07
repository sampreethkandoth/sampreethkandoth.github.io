import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TechnicalSkills = () => {
  const softwareTools = [
    { name: "SOLIDWORKS", level: "Advanced", category: "CAD" },
    { name: "Autodesk Fusion 360", level: "Advanced", category: "CAD" },
    { name: "MATLAB", level: "Advanced", category: "Analysis" },
    { name: "ANSYS", level: "Intermediate", category: "Simulation" },
    { name: "LabVIEW", level: "Intermediate", category: "Testing" },
    { name: "LaTeX", level: "Intermediate", category: "Documentation" },
    { name: "Solid Edge", level: "Intermediate", category: "CAD" },
    { name: "ADAMS", level: "Beginner", category: "Simulation" },
  ];

  const engineeringSkills = [
    "Computer-Aided Design (CAD)",
    "Finite Element Modelling (FEM)",
    "Product Architecture DSM",
    "Product Life Cycle Management",
    "Monte Carlo Simulation",
    "Fractional Factorial Design",
    "Quality Function Deployment (QFD)",
    "Pugh Evaluation Matrix",
    "Technical Drawing",
    "ANOVA",
    "Morphological Chart",
    "Design of Experiment"
  ];

  const certifications = [
    "Certified SOLIDWORKS Professional in Mechanical Design (CSWP) - Dassault System",
    "Autodesk Fusion 360 integrated CAD/CAM/CAE - Autodesk, Coursera"
  ];

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Hindi", level: "Advanced" },
    { name: "Malayalam", level: "Mother Tongue" },
    { name: "Swedish", level: "Beginner" }
  ];

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-primary text-primary-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      case "Beginner": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle" id="skills">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced proficiency in design tools, simulation software, and engineering methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Software Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softwareTools.map((tool, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/30 bg-muted/30">
                    <div>
                      <div className="font-medium text-foreground">{tool.name}</div>
                      <div className="text-sm text-muted-foreground">{tool.category}</div>
                    </div>
                    <Badge className={getSkillLevelColor(tool.level)}>
                      {tool.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Engineering Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {engineeringSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-foreground">{cert}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="text-center p-4 rounded-lg border border-border/30 bg-muted/30">
                    <div className="font-medium text-foreground">{lang.name}</div>
                    <div className="text-sm text-muted-foreground">{lang.level}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};