import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior .NET Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of enterprise web applications using ASP.NET Core and Web API. Mentored junior developers and implemented best practices for code quality and performance optimization.",
      achievements: [
        "Architected and developed 5+ enterprise applications",
        "Improved API response time by 40% through optimization",
        "Implemented CI/CD pipelines using Azure DevOps",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description:
        "Developed full-stack web applications using .NET framework and modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built and maintained 10+ web applications",
        "Integrated third-party APIs and payment gateways",
        "Reduced database query execution time by 35%",
      ],
    },
    {
      title: "Software Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description:
        "Contributed to the development of web applications and RESTful APIs. Worked with SQL Server databases and implemented responsive user interfaces using Bootstrap.",
      achievements: [
        "Developed RESTful APIs for mobile applications",
        "Implemented responsive designs for 15+ projects",
        "Participated in code reviews and agile ceremonies",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2018",
      description: "Specialized in Software Engineering and Database Systems",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "State University",
      period: "2012 - 2016",
      description: "Focus on Web Development and Programming",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all bg-card/50 backdrop-blur border-l-4 border-l-primary"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all bg-card/50 backdrop-blur border-l-4 border-l-accent"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
