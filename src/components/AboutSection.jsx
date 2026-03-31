import { Briefcase, Code, Globe, Monitor, User } from "lucide-react";

export const AboutSection = () => {
  const handleDownloadCV = () => {
    // Open CV in new tab
    window.open('/projects/Francis_Kojo_Haizel_CV.pdf', '_blank');
    
    // Also trigger download
    const link = document.createElement('a');
    link.href = '/projects/Francis_Kojo_Haizel_CV.pdf';
    link.download = 'Francis_Kojo_Haizel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Fullstack Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I'm a fullstack developer specializing in building responsive, accessible, and high-performance web applications 
              using modern technologies, with a strong focus on frontend and WordPress development.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to real-world problems, and I continuously improve my skills 
              by learning new technologies and building practical projects to stay current in the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <button
                onClick={handleDownloadCV}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
              >
                Download Resume
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, interactive, and user-friendly interfaces using modern technologies like HTML, CSS, JavaScript, and React.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">WordPress Development</h4>
                  <p className="text-muted-foreground">
                    Creating dynamic and scalable websites using WordPress, including custom themes, plugins, and eCommerce solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};