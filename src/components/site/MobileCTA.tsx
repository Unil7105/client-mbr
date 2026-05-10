import { MessageCircle, MapPin } from "lucide-react";
import { WHATSAPP_URL, MAPS_URL } from "@/lib/menu-data";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:hidden">
      <div className="flex gap-2 rounded-2xl border border-border bg-background/95 p-2 shadow-lg backdrop-blur">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary flex-1">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a href={MAPS_URL} target="_blank" rel="noopener" className="btn-outline flex-1">
          <MapPin className="h-4 w-4" /> Directions
        </a>
      </div>
    </div>
  );
}
