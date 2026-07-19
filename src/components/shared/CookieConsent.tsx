"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("pmrg_cookie");
    if (!dismissed) {
      const t = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("pmrg_cookie", "1");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-3xl"
        >
          <div className="flex flex-col items-start gap-4 rounded-xl border border-line-strong bg-surface-2 p-5 shadow-card-hover sm:flex-row sm:items-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-3 text-accent">
              <Cookie className="h-5 w-5" />
            </span>
            <p className="flex-1 text-sm leading-relaxed text-fg-muted">
              We use cookies to enhance your browsing experience and analyze site traffic.
              By continuing, you agree to our use of cookies.
            </p>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <button
                onClick={dismiss}
                className="flex-1 rounded-lg border border-line px-4 py-2 text-sm text-fg-muted transition-colors hover:bg-surface-3 hover:text-fg sm:flex-none"
              >
                Customize
              </button>
              <button
                onClick={dismiss}
                className="flex-1 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.02] sm:flex-none"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
