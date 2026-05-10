import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Featured } from "@/components/site/Featured";
import { Menu } from "@/components/site/Menu";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { MobileCTA } from "@/components/site/MobileCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mezbaan Biryani & Rolls | Authentic Kolkata Dum Biryani" },
      {
        name: "description",
        content:
          "Relish the delicacy of Kolkata biryani at Mezbaan — authentic dum biryani, smoky rolls, Mughlai paratha & more. Order on WhatsApp.",
      },
      { property: "og:title", content: "Mezbaan Biryani & Rolls" },
      { property: "og:description", content: "Authentic Kolkata-style dum biryani and smoky rolls." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Hero />
      <Featured />
      <Menu />
      <About />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
