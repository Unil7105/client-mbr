import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU, type MenuItem } from "@/lib/menu-data";

function ItemRow({ item }: { item: MenuItem }) {
  const isExtra = item.calories === 0;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="group flex items-start justify-between gap-4 border-b border-border py-4 last:border-b-0"
    >
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <h4 className="font-display text-base font-semibold text-foreground md:text-lg">
            {item.name}
          </h4>
          {item.tag && (
            <span className="text-[0.65rem] font-medium uppercase tracking-wider text-primary">
              · {item.tag}
            </span>
          )}
        </div>
        {item.desc && (
          <p className="mt-1 text-xs text-muted-foreground md:text-sm">{item.desc}</p>
        )}
        {!isExtra && (
          <p className="mt-1.5 text-[0.7rem] text-muted-foreground/80">
            {item.calories} kcal · {item.protein}g P · {item.carbs}g C · {item.fat}g F
          </p>
        )}
      </div>
      <div className="shrink-0 font-display text-lg font-semibold text-primary md:text-xl">
        ₹{item.price}
      </div>
    </motion.div>
  );
}

export function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="font-heading text-xs tracking-[0.3em] text-primary">MENU</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            <span className="text-foreground">The Full Spread</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </div>

        <div className="sticky top-2 z-20 mt-10">
          <div className="flex gap-1 overflow-x-auto rounded-full border border-border bg-background/90 p-1 backdrop-blur scrollbar-hide">
            {MENU.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition md:text-sm ${
                  active === c.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-8"
          >
            {cat.items.map((item) => (
              <ItemRow key={item.name} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
