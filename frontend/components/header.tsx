"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn, siteConfig } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-ivory/90 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <Link href="/" className="group flex items-center gap-3">
            <motion.span
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: [0, -8, 7, -3, 0], scale: 1.08 }}
              transition={{ type: "spring", stiffness: 360, damping: 18 }}
              className="relative grid h-11 w-11 place-items-center rounded-full border border-gold/60 bg-maroon text-lg font-bold text-gold shadow-sm"
            >
              <motion.span
                className="absolute inset-0 rounded-full border border-gold/45"
                animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0, 0.35] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative z-10">SS</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ delay: 0.12, duration: 0.42, ease: "easeOut" }}
              className="font-heading text-2xl font-bold tracking-normal text-maroon sm:text-3xl"
            >
              {siteConfig.name}
            </motion.span>
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ delay: index * 0.06, type: "spring", stiffness: 420, damping: 28 }}
                className="relative"
              >
                <Link
                  href={link.href}
                  className={cn(
                    "gold-shimmer-link relative block px-1 py-2 text-sm font-bold uppercase tracking-[0.16em] text-charcoal/78 transition-colors hover:text-roseRoyal",
                    isActive && "text-roseRoyal"
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="active-header-link"
                      className="absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-roseRoyal"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  ) : null}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-10">
              <p className="font-heading text-3xl font-bold text-maroon">{siteConfig.name}</p>
              <nav className="mt-8 grid gap-3">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ delay: index * 0.05, type: "spring", stiffness: 360, damping: 26 }}
                  >
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-lg px-3 py-3 text-base font-bold text-charcoal transition-colors hover:bg-roseRoyal/10",
                          pathname === link.href && "bg-roseRoyal/10 text-roseRoyal"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  </motion.div>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
