import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with ASP.NET Core Web API backend, SQL Server database, and React frontend. Features include user authentication, product management, shopping cart, and payment integration.",
      tags: ["ASP.NET Core", "Web API", "SQL Server", "React", "Bootstrap"],
      image: "🛍️",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description:
        "Enterprise task management application built with .NET 6, featuring role-based access control, real-time notifications, and comprehensive reporting. Integrated with Azure DevOps for CI/CD.",
      tags: [".NET 6", "Entity Framework", "SignalR", "Azure", "SQL Server"],
      image: "📋",
      github: "#",
      demo: "#",
    },
    {
      title: "RESTful API Service",
      description:
        "Scalable RESTful API service with JWT authentication, rate limiting, and comprehensive API documentation using Swagger. Implements CQRS pattern and follows clean architecture principles.",
      tags: ["ASP.NET Core", "Web API", "JWT", "Swagger", "CQRS"],
      image: "🔌",
      github: "#",
      demo: "#",
    },
    {
      title: "Customer Portal",
      description:
        "Modern customer portal with responsive design, built using ASP.NET MVC and Bootstrap. Features include user dashboard, ticket management, and real-time chat support integration.",
      tags: ["ASP.NET MVC", "Bootstrap", "JavaScript", "SQL Server"],
      image: "👥",
      github: "#",
      demo: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive analytics dashboard with data visualization, built using .NET Web API backend and modern JavaScript frameworks. Implements real-time data updates and custom reporting.",
      tags: [".NET", "Web API", "Chart.js", "TypeScript", "SQL Server"],
      image: "📊",
      github: "#",
      demo: "#",
    },
    {
      title: "Inventory Management",
      description:
        "Comprehensive inventory management system with barcode scanning, stock tracking, and automated reporting. Built with ASP.NET Core and Entity Framework Core.",
      tags: ["ASP.NET Core", "EF Core", "SQL Server", "Bootstrap"],
      image: "📦",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur border-border/50"
              >
                {/* Project Image/Icon */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
