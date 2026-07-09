"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICE_INTERESTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (vals: Fields): Errors => {
    const e: Errors = {};
    if (!vals.name.trim()) e.name = "Please enter your name";
    if (!vals.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email))
      e.email = "Please enter a valid email";
    if (!vals.message.trim()) e.message = "Please enter a message";
    else if (vals.message.trim().length < 10)
      e.message = "Message should be at least 10 characters";
    return e;
  };

  const update = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    // Simulate async submission (no backend in this static build).
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return <SuccessState onReset={() => {
      setValues(EMPTY);
      setSuccess(false);
    }} />;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field
        label="Full Name"
        name="name"
        value={values.name}
        onChange={(v) => update("name", v)}
        error={errors.name}
        placeholder="Jane Doe"
        required
      />
      <Field
        label="Work Email"
        name="email"
        type="email"
        value={values.email}
        onChange={(v) => update("email", v)}
        error={errors.email}
        placeholder="jane@company.com"
        required
      />
      <Field
        label="Company"
        name="company"
        value={values.company}
        onChange={(v) => update("company", v)}
        placeholder="Acme Telecom"
      />
      <Field
        label="Phone"
        name="phone"
        type="tel"
        value={values.phone}
        onChange={(v) => update("phone", v)}
        placeholder="+1 (555) 000-0000"
      />

      {/* service interest */}
      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-medium text-fg">Service Interest</label>
        <select
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          className="w-full rounded-xl border border-line-strong bg-white/[0.02] px-4 py-3 text-sm text-fg transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          <option value="" className="bg-ink">Select a service…</option>
          {SERVICE_INTERESTS.map((s) => (
            <option key={s} value={s} className="bg-ink">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <Field
          label="Message"
          name="message"
          as="textarea"
          value={values.message}
          onChange={(v) => update("message", v)}
          error={errors.message}
          placeholder="Tell us about your project, goals, or how we can help…"
          required
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
          {submitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy/30 border-t-navy" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  as = "input",
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
}) {
  const base = cn(
    "w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-fg placeholder:text-fg-subtle transition-all focus:outline-none focus:ring-2",
    error
      ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/20"
      : "border-line-strong focus:border-accent/50 focus:ring-accent/20"
  );

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-fg">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={cn(base, "resize-none")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={base}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center py-8 text-center"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-light text-ink shadow-glow"
      >
        <Check className="h-8 w-8" strokeWidth={3} />
      </motion.span>
      <h3 className="mt-6 text-2xl font-bold text-fg">Message sent!</h3>
      <p className="mt-2 max-w-sm text-sm text-fg-muted">
        Thanks for reaching out. A member of our team will get back to you within one
        business day.
      </p>
      <button
        onClick={onReset}
        className="mt-6 text-sm font-medium text-accent hover:underline"
      >
        Send another message
      </button>
    </motion.div>
  );
}
