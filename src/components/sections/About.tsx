import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Server } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building end-to-end solutions with modern technologies",
    },
    {
      icon: Server,
      title: "Backend Expertise",
      description: "Specialized in .NET, C#, and Web API development",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Proficient in SQL Server and database optimization",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Expert in HTML, CSS, JavaScript, and Bootstrap",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated software engineer with a passion for creating efficient and scalable solutions
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-elegant overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-9xl text-primary/30">
                  👨‍💻
                </div>
              </div>
            </div>

            {/* Bio and Highlights */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Professional Software Engineer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With extensive experience in .NET development and full-stack engineering, I
                  specialize in building robust, scalable web applications. My expertise spans
                  across backend development with C# and Web API, database management with SQL
                  Server, and frontend technologies including HTML, CSS, JavaScript, and Bootstrap.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about clean code, best practices, and delivering high-quality
                  solutions that meet both technical requirements and business objectives. My
                  approach combines technical expertise with strong problem-solving skills to
                  create efficient and maintainable applications.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-lg transition-all hover:scale-105 bg-card/50 backdrop-blur border-border/50"
                  >
                    <div className="space-y-2">
                      <item.icon className="h-8 w-8 text-primary" />
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
