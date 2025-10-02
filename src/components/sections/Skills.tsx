import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Backend Development",
      skills: [
        { name: "C# / .NET", level: 95 },
        { name: "ASP.NET Core", level: 90 },
        { name: "Web API", level: 92 },
        { name: "Entity Framework", level: 88 },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "T-SQL", level: 88 },
        { name: "Database Design", level: 85 },
        { name: "Query Optimization", level: 82 },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5 / CSS3", level: 92 },
        { name: "JavaScript / TypeScript", level: 88 },
        { name: "Bootstrap", level: 90 },
        { name: "React", level: 85 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git / GitHub", level: 88 },
        { name: "Visual Studio", level: 92 },
        { name: "Azure DevOps", level: 80 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise across a comprehensive range of technologies and frameworks
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 hover:shadow-elegant transition-all bg-card/50 backdrop-blur border-border/50"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
