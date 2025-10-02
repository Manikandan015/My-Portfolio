import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  const experiences = [
  {
    title: "Software Engineer – Development",
    company: "Perpetuuiti Technosoft Services Pvt Ltd, Tamil Nadu, India",
    period: "May 2022 – May 2025",
    description:
      "Worked on enterprise software projects including Continuity Patrol 4.5v & 6.0v, and MHADA Dashboard. Focused on ASP.NET MVC, Web Services, SQL Server, and front-end development with HTML, CSS, and Bootstrap.",
    achievements: [
      "Developed 30+ new features based on client requirements",
      "Built installers for Web and Windows applications",
      "Achieved 92% resolution rate for technical issues",
      "Implemented web services and database interactions with C# and SQL Server",
    ],
  },
  {
    title: "Software Engineer",
    company: "Avgira Technologies India Private Limited, Madurai, Tamil Nadu, India",
    period: "May 2025 – Present",
    description:
      "Full Stack Developer for QGira HSE Navigator platform. Built backend services using ASP.NET Core Web API and responsive front-end using ASP.NET Core MVC. Contributed to analytics dashboards and real-time safety alert systems.",
    achievements: [
      "Developed and maintained scalable Web APIs for core HSE functionalities",
      "Built dynamic, role-based MVC views with modular components",
      "Integrated dashboards, reporting tools, and real-time alerts",
      "Worked in agile sprints with regular deployments using Azure DevOps",
    ],
  },
];


  const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Nehru Memorial College, Puthanampatti - 621 007",
    period: "Jun 2019 - Apr 2021",
    description: "Specialized in Computer Science, focusing on advanced software development and application design.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Nehru Memorial College, Puthanampatti - 621 007",
    period: "Jun 2016 - Apr 2019",
    description: "Focused on computer science fundamentals, programming, and web development.",
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
