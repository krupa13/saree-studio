"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Loader2, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { siteConfig } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Phone number is required"),
  message: z.string().min(10, "Message is required")
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactDetails = [
  { icon: Phone, label: "Call", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: MapPin, label: "Visit", value: siteConfig.address },
  { icon: Clock, label: "Response", value: "Usually within one business day" }
];

export default function ContactPage() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" }
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Could not submit your enquiry. Please try again.");
      }

      reset();
      toast({
        title: "Enquiry sent",
        description: "Thank you. The boutique team will contact you shortly."
      });
    } catch (error) {
      toast({
        title: "Could not send enquiry",
        description: error instanceof Error ? error.message : "Please try again in a moment."
      });
    }
  };

  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="overflow-hidden rounded-lg bg-maroon text-white shadow-goldGlow"
        >
          <div className="saree-texture p-7 sm:p-9">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-4 w-4" />
              Contact Us
            </p>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-tight sm:text-6xl">
              Tell us what you are dressing for.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-ivory/86">
              Share your occasion, preferred colors, fabric mood, or styling questions. We will help you find a saree
              or dress that feels right for the moment.
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:p-7">
            {contactDetails.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 4 }}
                className="flex gap-3 rounded-lg border border-gold/20 bg-white/8 p-4"
              >
                <item.icon className="mt-0.5 h-5 w-5 flex-none text-gold" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold/85">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-ivory/86">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="rounded-lg border border-gold/25 bg-white/85 p-5 shadow-goldGlow backdrop-blur sm:p-8"
        >
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-roseRoyal">Enquiry Form</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-maroon">Start a conversation</h2>
          </div>

          <form
            className="grid gap-5"
            onSubmit={handleSubmit(onSubmit, () => {
              toast({ title: "Please check the form", description: "A few required details need attention." });
            })}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Full Name" error={errors.name?.message}>
                <input
                  suppressHydrationWarning
                  {...register("name")}
                  className="h-12 w-full rounded-md border border-charcoal/20 bg-white px-4 text-charcoal outline-none transition duration-200 focus:border-maroon focus:ring-2 focus:ring-maroon/15"
                />
              </FormField>
              <FormField label="Phone Number" error={errors.phone?.message}>
                <input
                  suppressHydrationWarning
                  {...register("phone")}
                  className="h-12 w-full rounded-md border border-charcoal/20 bg-white px-4 text-charcoal outline-none transition duration-200 focus:border-maroon focus:ring-2 focus:ring-maroon/15"
                />
              </FormField>
            </div>

            <FormField label="Email Address" error={errors.email?.message}>
              <input
                suppressHydrationWarning
                type="email"
                {...register("email")}
                className="h-12 w-full rounded-md border border-charcoal/20 bg-white px-4 text-charcoal outline-none transition duration-200 focus:border-maroon focus:ring-2 focus:ring-maroon/15"
              />
            </FormField>

            <FormField label="What are you looking for?" error={errors.message?.message}>
              <textarea
                suppressHydrationWarning
                {...register("message")}
                rows={6}
                placeholder="Occasion, color preference, fabric, budget range, or any styling question..."
                className="w-full resize-none rounded-md border border-charcoal/20 bg-white px-4 py-3 text-charcoal outline-none transition duration-200 placeholder:text-charcoal/40 focus:border-maroon focus:ring-2 focus:ring-maroon/15"
              />
            </FormField>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-charcoal/62">We use your details only to respond to this enquiry.</p>
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Submit Enquiry
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function FormField({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-charcoal">
      {label}
      {children}
      {error ? <span className="text-sm font-semibold text-roseRoyal">{error}</span> : null}
    </label>
  );
}
