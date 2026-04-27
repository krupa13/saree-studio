"use client";

import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/utils";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateDevice = () => setIsDesktop(window.innerWidth > 1024);
    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  const message = `Hi Saree Studio | Saree booking Service! I need more info about Saree Studio | Saree booking Service ${siteConfig.siteUrl}`;
  const encodedMessage = encodeURIComponent(message);
  const href = isDesktop
    ? `https://web.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodedMessage}`
    : `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open ? (
          <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="mb-3 block rounded-lg border border-gold/30 bg-white px-4 py-3 text-sm font-bold text-maroon shadow-goldGlow"
          >
            Click to chat
          </motion.a>
        ) : null}
      </AnimatePresence>
      <div className="relative">
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/35"
          animate={{ scale: [1, 1.55], opacity: [0.45, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.button
          type="button"
          onClick={() => setOpen((value) => !value)}
          animate={{ y: [0, -4, 0], rotate: [0, -2, 2, 0] }}
          whileHover={{ scale: 1.12, boxShadow: "0 18px 42px rgba(37, 211, 102, 0.38)" }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl"
          aria-label="Open WhatsApp chat"
        >
          <motion.span
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <MessageCircle className="h-7 w-7" />
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}
