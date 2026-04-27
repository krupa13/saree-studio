"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Toast = {
  id: number;
  title: string;
  description?: string;
};

type ToastContextValue = {
  toast: (toast: Omit<Toast, "id">) => void;
};

type ToastProviderValue = ToastContextValue & {
  toasts: Toast[];
  removeToast: (id: number) => void;
};

const ToastContext = createContext<ToastProviderValue | null>(null);

export function Toaster() {
  const context = useContext(ToastContext);
  const toasts = context?.toasts || [];
  const removeToast = context?.removeToast;

  return (
    <div className="fixed right-5 top-24 z-[70] flex w-[min(92vw,380px)] flex-col gap-3">
      {toasts.map((item) => (
        <div
          key={item.id}
          className={cn("relative overflow-hidden rounded-xl border border-gold/30 bg-maroon p-4 text-white shadow-2xl", "animate-floatIn")}
        >
          <div className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-gold" />
            <div className="min-w-0 flex-1">
              <p className="font-bold text-ivory">{item.title}</p>
              {item.description ? <p className="mt-1 text-sm text-ivory/80">{item.description}</p> : null}
            </div>
            <button
              type="button"
              className="rounded-full p-1 text-ivory/60 transition hover:bg-white/10 hover:text-ivory"
              onClick={() => removeToast?.(item.id)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Dismiss</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((nextToast: Omit<Toast, "id">) => {
    const id = Date.now();
    setToasts((current) => [...current, { ...nextToast, id }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 4200);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((current) => current.filter((toastItem) => toastItem.id !== id));
  }, []);

  const value = useMemo(() => ({ toast, toasts, removeToast }), [removeToast, toast, toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
