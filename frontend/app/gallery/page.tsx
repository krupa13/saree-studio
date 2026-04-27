"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { sarees } from "@/data/sarees";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState(sarees[0].id);
  const [activeImage, setActiveImage] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const rowRef = useRef<HTMLDivElement | null>(null);

  const selectedSaree = useMemo(
    () => sarees.find((saree) => saree.id === selectedId) || sarees[0],
    [selectedId]
  );

  useEffect(() => {
    setActiveImage(0);
  }, [selectedId]);

  useEffect(() => {
    if (selectedSaree.images.length < 2) return;
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % selectedSaree.images.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, [selectedSaree.images.length]);

  const updateScrollButtons = () => {
    const node = rowRef.current;
    if (!node) return;
    setCanScrollLeft(node.scrollLeft > 6);
    setCanScrollRight(node.scrollLeft + node.clientWidth < node.scrollWidth - 6);
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  const scrollCards = (direction: "left" | "right") => {
    const node = rowRef.current;
    if (!node) return;
    node.scrollBy({ left: direction === "right" ? 330 : -330, behavior: "smooth" });
  };

  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-roseRoyal">
            <Sparkles className="h-4 w-4" />
            Gallery
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-5xl font-bold leading-tight text-maroon sm:text-6xl">
            Explore Our Saree Collections
          </h1>
        </div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/75 lg:justify-self-end">
          A curated view of festive silks, brocades, ikats, prints, and occasion-ready drapes selected for rich color,
          memorable texture, and graceful fall.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-stretch">
        <motion.div
          key={selectedSaree.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="overflow-hidden rounded-lg border border-gold/25 bg-maroon shadow-goldGlow"
        >
          <div className="relative aspect-[4/3] min-h-[320px] overflow-hidden sm:aspect-[16/10] lg:min-h-[560px]">
            {selectedSaree.images.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={`${selectedSaree.name} ${index + 1}`}
                fill
                className={cn(
                  "object-cover transition-opacity duration-700",
                  index === activeImage ? "opacity-100" : "opacity-0"
                )}
                sizes="(min-width: 1024px) 760px, 100vw"
                priority={index === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Featured drape</p>
              <h2 className="mt-2 font-heading text-4xl font-bold sm:text-5xl">{selectedSaree.name}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-ivory/88 sm:text-base">
                {selectedSaree.description}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {selectedSaree.images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              className={cn(
                "group overflow-hidden rounded-lg border bg-white text-left transition",
                activeImage === index ? "border-gold shadow-goldGlow" : "border-gold/20 hover:border-gold/60"
              )}
            >
              <div className="relative aspect-[16/10]">
                <Image src={image} alt={`${selectedSaree.name} thumbnail ${index + 1}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-maroon/0 transition group-hover:bg-maroon/10" />
              </div>
            </button>
          ))}
          <Card className="bg-white">
            <CardContent className="text-sm leading-6 text-charcoal/72">
              Select a collection below to preview the boutique mood, then use the contact form to ask about colors,
              fabric, availability, and styling options.
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative mt-9">
        {canScrollLeft ? (
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 bg-white"
            onClick={() => scrollCards("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        ) : null}
        <div
          ref={rowRef}
          onScroll={updateScrollButtons}
          className="flex gap-5 overflow-x-auto scroll-smooth px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sarees.map((saree) => (
            <motion.button
              key={saree.id}
              type="button"
              onClick={() => setSelectedId(saree.id)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[270px] max-w-[270px] text-left"
            >
              <Card
                className={cn(
                  "h-full overflow-hidden transition",
                  selectedId === saree.id && "border-gold shadow-goldGlow"
                )}
              >
                <div className="relative h-44">
                  <Image src={saree.images[0]} alt={saree.name} fill className="object-cover" sizes="270px" />
                </div>
                <CardContent>
                  <h3 className="font-heading text-2xl font-bold text-maroon">{saree.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/70">{saree.description}</p>
                </CardContent>
              </Card>
            </motion.button>
          ))}
        </div>
        {canScrollRight ? (
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 bg-white"
            onClick={() => scrollCards("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        ) : null}
      </div>
    </section>
  );
}
