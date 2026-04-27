import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BOUTIQUE_NAME || "Saree Studio",
  whatsapp: process.env.NEXT_PUBLIC_OWNER_WHATSAPP_NUMBER || "919573174882",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/",
  address: process.env.NEXT_PUBLIC_BOUTIQUE_ADDRESS || "Boutique address, India",
  phone: process.env.NEXT_PUBLIC_BOUTIQUE_PHONE || "+91 95731 74882",
  email: process.env.NEXT_PUBLIC_BOUTIQUE_EMAIL || "hello@sareestudio.com"
};
