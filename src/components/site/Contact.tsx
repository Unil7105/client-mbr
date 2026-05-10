import { motion } from "framer-motion";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { PHONE, WHATSAPP_URL, MAPS_URL } from "@/lib/menu-data";

export function Contact() {
  return (
    <section className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="font-heading text-xs tracking-[0.3em] text-primary">VISIT US</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl text-foreground">Find Mezbaan</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-secondary p-3 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                <a href={`tel:+91${PHONE.replace(/\s/g, "")}`} className="font-display text-xl font-semibold text-foreground">
                  +91 {PHONE}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-secondary p-3 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Open Everyday</div>
                <div className="font-display text-xl font-semibold text-foreground">11:30 AM – 11:30 PM</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-secondary p-3 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                <div className="font-display text-lg text-foreground">Mezbaan Biryani &amp; Rolls, Vadodara</div>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary flex-1">
                <MessageCircle className="h-4 w-4" /> WhatsApp Order
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="btn-outline flex-1">
                <MapPin className="h-4 w-4" /> Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <iframe
              title="Mezbaan Location"
              src="https://www.google.com/maps?q=22.3222673,73.1884731&amp;output=embed"
              loading="lazy"
              className="h-[360px] w-full md:h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
