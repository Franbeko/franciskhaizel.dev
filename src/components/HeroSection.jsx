import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
    const [displayText, setDisplayText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    
    const fullText = "I'm a passionate fullstack developer with a strong focus on frontend and WordPress development. I combine technical expertise with creative design to build modern, high-performance websites that are both functional and visually engaging. My approach emphasizes clean code, performance optimization, and responsive design.";
    
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1));
                index++;
            } else {
                setIsTypingComplete(true);
                clearInterval(timer);
            }
        }, 20); // Fast but readable speed
        
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Francis Kojo
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Haizel
                        </span>
                    </h1>

                    <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        <p className="min-h-[120px]">
                            {displayText}
                            {!isTypingComplete && (
                                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse"></span>
                            )}
                        </p>
                    </div>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};