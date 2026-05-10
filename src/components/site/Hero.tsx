import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-background flex flex-col items-center justify-center">
      
      {/* Elegant Heritage Framing (Outer) */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-primary/10 pointer-events-none z-0" />
      <div className="absolute inset-[1.25rem] sm:inset-[1.75rem] md:inset-[2.25rem] border border-primary/10 pointer-events-none z-0" />
      
      {/* Corner Ornaments (Bengali Heritage Inspired) */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 w-8 h-8 border-t border-l border-primary/30 pointer-events-none z-0" />
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-8 h-8 border-t border-r border-primary/30 pointer-events-none z-0" />
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-8 h-8 border-b border-l border-primary/30 pointer-events-none z-0" />
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-8 h-8 border-b border-r border-primary/30 pointer-events-none z-0" />
      
      {/* Inner corner accents */}
      <div className="absolute top-5 left-5 sm:top-7 sm:left-7 md:top-9 md:left-9 w-1.5 h-1.5 rounded-full bg-primary/20 pointer-events-none z-0" />
      <div className="absolute top-5 right-5 sm:top-7 sm:right-7 md:top-9 md:right-9 w-1.5 h-1.5 rounded-full bg-primary/20 pointer-events-none z-0" />
      <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 md:bottom-9 md:left-9 w-1.5 h-1.5 rounded-full bg-primary/20 pointer-events-none z-0" />
      <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 md:bottom-9 md:right-9 w-1.5 h-1.5 rounded-full bg-primary/20 pointer-events-none z-0" />

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 border-b ${
          scrolled 
            ? "bg-background/95 backdrop-blur-xl shadow-sm border-border" 
            : "bg-background/40 backdrop-blur-md border-border/50"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo - Always visible inside a luxury capsule */}
          <div className="flex flex-1 items-center">
            <div className="flex items-center gap-3 bg-background/80 backdrop-blur-md pr-4 p-1 rounded-full border border-accent/20 shadow-sm transition-all duration-500">
              <img
                src="/logo.png"
                alt="Mezbaan"
                className="h-8 w-8 rounded-full object-cover border border-accent/30 mix-blend-multiply saturate-[0.8]"
              />
              <span className="font-display text-[11px] sm:text-xs font-semibold tracking-wide text-[#2d1b15]">MEZBAAN</span>
            </div>
          </div>

          <div className="flex items-center gap-8 justify-end">
            <a href="https://www.lazlle.studio" target="_blank" rel="noopener" className="hidden md:block font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
              By Lazlle &amp; Co
            </a>
            <a href="#menu" className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.1em] text-[#2d1b15] hover:text-primary transition-colors font-medium">
              Menu
            </a>
          </div>
        </div>
      </header>

      {/* Abstract Luxury Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7] via-background to-[#efeadd]" />
        
        {/* Soft Golden & Sandstone Beige Ambient Lighting */}
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_60%)] blur-3xl rounded-full" />
        <div className="absolute left-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(210,180,140,0.15)_0%,_transparent_70%)] blur-3xl rounded-full" />
        <div className="absolute right-[-10%] top-[30%] w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(139,69,19,0.08)_0%,_transparent_70%)] blur-3xl rounded-full" />

        {/* Soft Grain Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 text-center md:px-10 w-full max-w-5xl">
        
        {/* Centered Logo as Embossed Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 sm:mb-8 flex flex-col items-center justify-center"
        >
          {/* Subtle gold foil glow */}
          <div className="absolute inset-0 scale-[1.3] bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-20 blur-2xl rounded-full pointer-events-none" />
          
          {/* Refined Embossed Logo */}
          <div className="relative p-1 rounded-full bg-gradient-to-br from-background via-background to-[#efeadd] shadow-[inset_0_2px_10px_rgba(0,0,0,0.03),0_4px_15px_rgba(0,0,0,0.04)] border border-primary/10">
            <img 
              src="/logo.png" 
              alt="Mezbaan Emblem" 
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full object-cover mix-blend-multiply saturate-[0.6] sepia-[0.1] contrast-[1.1]"
            />
          </div>
        </motion.div>

        {/* Branding Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full"
        >
          {/* Primary Name (Grounded, Powerful Serif) */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold tracking-tight text-[#2d1b15] mb-4">
            MEZBAAN
          </h1>
          
          {/* Secondary Subtitle */}
          <h2 className="font-heading text-sm sm:text-base md:text-lg tracking-[0.25em] text-primary uppercase font-medium">
            Biryani &amp; Rolls
          </h2>
          
          {/* Luxury Divider */}
          <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="h-1.5 w-1.5 rotate-45 bg-primary/50" />
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </motion.div>

        {/* Heritage / Supporting Copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 sm:mt-8 max-w-lg font-sans text-[10px] sm:text-xs tracking-[0.15em] leading-relaxed text-muted-foreground uppercase"
        >
          Authentic Kolkata Heritage <br className="sm:hidden" /> <span className="hidden sm:inline">•</span> Crafted with Passion Since 2018
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 sm:mt-14"
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border border-primary/20 bg-background px-10 py-3.5 sm:px-12 sm:py-4 transition-all hover:bg-primary/5 hover:border-primary/40 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
          >
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1b15] group-hover:text-primary transition-colors">
              Explore Menu
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
