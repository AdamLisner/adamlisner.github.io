import { useRef, useEffect, useState } from "react";
import "./HeroSection.css"; 
import CV from "../../assets/AdamLisnerCV.pdf"; // Adjust the path to your CV file

export const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null); // Ref for the section element
  const mouse = useRef({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // State to control the animation

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: Dot[] = [];

    // All your existing dot logic remains the same
    const dotSpacing = 40;
    const baseDotRadius = 1;
    const maxRadius = 4;
    const influenceRadius = 150;
    const influenceRadiusSquared = influenceRadius * influenceRadius;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createGrid();
    };

    class Dot {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      pulseAngle: number;
      pulseSpeed: number;
      pulseSize: number;
      moveAngle: number;
      moveSpeed: number;
      moveRadius: number;

      constructor(x: number, y: number) {
        this.originalX = x;
        this.originalY = y;
        this.x = x;
        this.y = y;

        this.pulseAngle = Math.random() * Math.PI * 2;
        this.pulseSpeed = (Math.random() - 0.5) * 0.02;
        this.pulseSize = Math.random() * 0.4;

        this.moveAngle = Math.random() * Math.PI * 2;
        this.moveSpeed = (Math.random() - 0.5) * 0.01;
        this.moveRadius = Math.random() * 1.5;
      }

      update() {
        this.pulseAngle += this.pulseSpeed;
        this.moveAngle += this.moveSpeed;
        this.x = this.originalX + Math.cos(this.moveAngle) * this.moveRadius;
        this.y = this.originalY + Math.sin(this.moveAngle) * this.moveRadius;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();

        const dx = this.x - mouse.current.x;
        const dy = this.y - mouse.current.y;
        const distanceSquared = dx * dx + dy * dy;

        const opacity = Math.max(
          0.1,
          1 - Math.sqrt(distanceSquared) / influenceRadius
        );

        const pulseEffect = (Math.sin(this.pulseAngle) + 1) / 2;
        let currentRadius = baseDotRadius + pulseEffect * this.pulseSize;

        if (distanceSquared < influenceRadiusSquared) {
          const proximityScale =
            1 - Math.sqrt(distanceSquared) / influenceRadius;
          currentRadius =
            currentRadius + (maxRadius - currentRadius) * proximityScale;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createGrid = () => {
      dots = [];
      for (let i = 0; i < canvas.width + dotSpacing; i += dotSpacing) {
        for (let j = 0; j < canvas.height + dotSpacing; j += dotSpacing) {
          dots.push(new Dot(i, j));
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach((dot) => {
          dot.update();
          dot.draw();
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    if (isAnimating) {
      animate();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on whether the component is intersecting (visible)
        setIsAnimating(entry.isIntersecting);
      },
      { threshold: 0.5 } // Start animation when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isAnimating]);

  return (
    <section
      id="hero"
      ref={sectionRef} // Attach the ref to the section
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <div className="animated-gradient-bg absolute inset-0"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 15 }}
      />
      <div className="z-20 text-center text-white px-12 py-16 rounded-3xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
          Adam Lisner
        </h1>
        <p className="text-2xl font-light mb-8 drop-shadow">
          Software Engineering Student
        </p>
        <a
          href={CV}
          download={true}
          className="inline-block bg-white/30 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-white/50  transition-all duration-300 backdrop-blur-lg border border-white/40"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};
