import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-maroon text-ivory">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-heading text-3xl font-bold text-gold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-ivory/78">
            Drapes, dresses, and heirloom-ready pieces curated for celebrations, rituals, and luminous everyday
            elegance.
          </p>
        </div>
        <div className="space-y-3 text-sm text-ivory/82">
          <p className="flex gap-2">
            <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" />
            <span>{siteConfig.address}</span>
          </p>
          <p className="flex gap-2">
            <Phone className="mt-0.5 h-4 w-4 flex-none text-gold" />
            <span>{siteConfig.phone}</span>
          </p>
          <p className="flex gap-2">
            <Mail className="mt-0.5 h-4 w-4 flex-none text-gold" />
            <span>{siteConfig.email}</span>
          </p>
        </div>
        <div className="flex items-start gap-3 md:justify-end">
          <Link
            href={siteConfig.instagram}
            target="_blank"
            className="rounded-full border border-gold/45 p-3 text-gold transition hover:bg-gold hover:text-maroon"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href={siteConfig.youtube}
            target="_blank"
            className="rounded-full border border-gold/45 p-3 text-gold transition hover:bg-gold hover:text-maroon"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="border-t border-gold/15 py-4 text-center text-xs text-ivory/65">
        &copy; 2025 {siteConfig.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
