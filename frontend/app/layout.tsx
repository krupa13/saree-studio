import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ToastProvider, Toaster } from "@/components/ui/toast";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"]
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Indian Ladies Boutique`,
  description: "Luxury Indian sarees and dresses curated with bridal editorial elegance."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${nunito.variable} font-body antialiased`}>
        <ToastProvider>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}
