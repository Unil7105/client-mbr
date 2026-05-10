import { motion } from "framer-motion";

export function About() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 px-6 py-20 md:px-10 md:py-28">
      <div className="relative mx-auto max-w-3xl text-center">
        <span className="font-heading text-xs tracking-[0.3em] text-primary">OUR STORY</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-3 text-3xl font-bold md:text-5xl text-foreground"
        >
          A Taste of Old Kolkata
        </motion.h2>
        <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 space-y-5 font-display text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            Born in the smoky lanes of Kolkata, our biryani carries the soul of a Mughlai legacy —
            slow-cooked on dum, layered with saffron-kissed rice, tender meat, and the famed aloo
            that only the City of Joy could perfect.
          </p>
          <p>
            From the sizzling tawas of Park Street to your plate, every roll is wrapped in tradition —
            smoky parathas, hand-tossed fillings, and sauces stirred with memory. At Mezbaan, we don't
            just serve food. We serve a feeling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
