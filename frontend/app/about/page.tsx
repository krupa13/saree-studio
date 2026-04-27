import Image from "next/image";
import { Gem, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/utils";

const values = [
  {
    title: "Curated Craft",
    text: "Every piece is selected for fabric quality, detail, and the feeling it brings to a celebration.",
    icon: Gem
  },
  {
    title: "Feminine Ease",
    text: "Regal styling meets wearable comfort, so beauty never asks you to compromise.",
    icon: Heart
  },
  {
    title: "Cultural Richness",
    text: "We honor Indian textile traditions while styling them for contemporary women.",
    icon: Sparkles
  }
];

export default function AboutPage() {
  return (
    <section className="section-shell py-14 sm:py-20">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1fr_.92fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-roseRoyal">Our Story</p>
            <h1 className="mt-3 font-heading text-5xl font-bold leading-tight text-maroon sm:text-6xl">
              A boutique born from a love of Indian elegance.
            </h1>
            <div className="mt-7 space-y-5 text-base leading-8 text-charcoal/78">
              <p>
                {siteConfig.name} was created for women who see clothing as memory: a saree for a sister&apos;s
                wedding, a silk dress for a festive dinner, a handwoven drape that becomes part of the family story.
              </p>
              <p>
                The owner&apos;s passion began with the textures of home: rose-toned silks, gold zari borders, ivory
                cottons, and the quiet confidence of women dressing for meaningful moments. Today, the boutique brings
                that eye to carefully sourced sarees and dresses for every occasion.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-gold/25 shadow-goldGlow">
            <Image
              src="/gallery/banarasi-brocade-02.jpg"
              alt="Indian bridal saree styling"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <Reveal key={value.title}>
              <Card className="h-full">
                <CardContent>
                  <Icon className="h-8 w-8 text-gold" />
                  <h2 className="mt-5 font-heading text-3xl font-bold text-maroon">{value.title}</h2>
                  <p className="mt-3 leading-7 text-charcoal/72">{value.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
