import { motion } from "framer-motion";

const FEATURED = [
  {
    tag: "Best Seller",
    name: "Mezbaan Special Biryani",
    desc: "Signature Kolkata-style dum biryani layered with aromatic rice, rich spices, and slow-cooked chicken.",
    price: 160,
    chips: ["680 kcal", "32g Protein"],
  },
  {
    tag: "Most Ordered",
    name: "Double Chicken Double Egg Roll",
    desc: "Loaded Kolkata-style roll packed with double chicken, double egg, smoky fillings, and rich sauces.",
    price: 160,
    chips: ["560 kcal", "32g Protein"],
  },
  {
    tag: "Chef Special",
    name: "Mezbaan Special Jumbo Roll",
    desc: "Oversized indulgent roll crafted with layered fillings, smoky flavors, rich sauces, and signature spices.",
    price: 280,
    chips: ["750 kcal", "36g Protein"],
  },
];

export function Featured() {
  return (
    <section className="relative bg-secondary/40 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-heading text-xs tracking-[0.3em] text-primary">SIGNATURE PICKS</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">Best Sellers</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURED.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary-foreground">
                {item.tag}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground md:text-2xl">{item.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.chips.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
              <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Price</span>
                <span className="font-display text-2xl font-bold text-primary">₹{item.price}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
