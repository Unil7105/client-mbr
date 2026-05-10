import { WHATSAPP_URL } from "@/lib/menu-data";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12 pb-28 md:px-10 md:pb-12">
      <div className="mx-auto max-w-6xl text-center">
        <div className="font-heading text-lg tracking-[0.25em] text-primary">MEZBAAN</div>
        <p className="mt-2 font-display italic text-sm text-muted-foreground">
          Relish The Delicacy Of Kolkata Biryani
        </p>

        <div className="mt-8 mb-4 flex justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-outline inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <div className="mx-auto my-6 h-px w-24 bg-primary/40" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mezbaan Biryani &amp; Rolls. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Made by{" "}
          <a
            href="https://www.lazlle.studio"
            target="_blank"
            rel="noopener"
            className="hover:text-primary transition-colors hover:underline"
          >
            Lazlle &amp; Co
          </a>
        </p>
      </div>
    </footer>
  );
}
