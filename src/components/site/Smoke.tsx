import { motion } from "framer-motion";

export function Smoke({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 280 + i * 60,
            height: 280 + i * 60,
            left: `${15 + i * 22}%`,
            top: `${40 + (i % 2) * 20}%`,
            background:
              "radial-gradient(circle, oklch(0.95 0.02 80 / 0.12), transparent 65%)",
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, -10, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
        />
      ))}
    </div>
  );
}
