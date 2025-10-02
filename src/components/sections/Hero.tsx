import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Hero3D } from "../Hero3D";
import { TypingAnimation } from "../TypingAnimation";

export const Hero = () => {
  const roles = [
    ".NET Developer",
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <Hero3D />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Your Name
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="h-12 sm:h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              <TypingAnimation texts={roles} />
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable web applications with .NET, C#, and modern
            technologies. Specialized in creating robust backend solutions and elegant user
            interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto shadow-elegant hover:shadow-glow transition-all hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 hover:bg-accent/10 transition-all hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 mx-auto border-2 border-primary rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
