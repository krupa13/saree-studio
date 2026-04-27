import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="saree-texture relative -mt-20 flex min-h-[calc(100vh-1rem)] items-center overflow-hidden pt-20 text-white">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.48)_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="section-shell relative grid gap-10 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/45 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-4 w-4" />
              Bridal editorial boutique
            </p>
            <h1 className="font-heading text-5xl font-bold leading-[0.94] tracking-normal sm:text-7xl lg:text-8xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/88 sm:text-xl">
              Handpicked sarees and occasion dresses for women who love tradition with a luminous, modern finish.
            </p>
            <Button asChild className="mt-9 bg-gold text-maroon hover:bg-[#f0cf65]">
              <Link href="/gallery">
                Explore Collection <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative min-h-[340px] lg:min-h-[520px]">
            <div className="absolute inset-0 rotate-2 rounded-[2rem] border border-gold/30 bg-white/10" />
            <div className="absolute inset-6 -rotate-2 rounded-[2rem] bg-[url('/gallery/kanjivaram-silk/kanjivaram-silk-01.jpg')] bg-cover bg-center shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-roseRoyal">Welcome</p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-maroon sm:text-5xl">
                Drapes selected like heirlooms, styled for today.
              </h2>
            </div>
            <Card>
              <CardContent className="text-base leading-8 text-charcoal/78">
                Our boutique celebrates the tactile poetry of Indian fashion: silks that catch candlelight, zari that
                remembers ceremonies, cottons that breathe through long festive days, and dresses made for effortless
                grace. Every collection is chosen with an eye for richness, comfort, and cultural soul.
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </section>
    </>
  );
}
