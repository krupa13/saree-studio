"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-charcoal/45 backdrop-blur-sm" />
      <Dialog.Content
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-80 max-w-[86vw] border-l border-gold/25 bg-ivory p-6 shadow-xl",
          className
        )}
      >
        <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-maroon hover:bg-roseRoyal/10">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
