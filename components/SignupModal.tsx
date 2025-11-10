"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSignupModal } from "@/context/SignupModalContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SignupModal() {
  const { isOpen, close, showSuccess, setShowSuccess } = useSignupModal();
  const [formValues, setFormValues] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resetForm = () => {
    setFormValues({
      name: "",
      company: "",
      phone: "",
      email: "",
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Failed to submit your details.");
      }

      setShowSuccess(true);
      resetForm();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    close();
    setTimeout(() => setShowSuccess(false), 300);
    setErrorMessage(null);
  };

  const updateField =
    (key: "name" | "company" | "phone" | "email") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/80 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={cn(
              "relative w-full max-w-lg rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 shadow-[0_40px_120px_rgba(59,130,246,0.35)] overflow-hidden",
            )}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
          >
            <div className="absolute -top-40 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/40 via-blue-500/60 to-cyan-500/40 blur-3xl" />
            <div className="absolute -bottom-48 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/40 via-sky-500/50 to-purple-500/40 blur-3xl" />
            <div className="relative px-10 pb-10 pt-12">
              <div className="flex items-center justify-between">
                <motion.h2
                  className="text-3xl font-semibold text-white tracking-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Let’s Get You Onboard
                </motion.h2>
                <motion.button
                  onClick={handleClose}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close sign-up modal"
                >
                  Close
                </motion.button>
              </div>

              <motion.p
                className="mt-3 text-base text-slate-200/80"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Share your details and our team will reach out to activate Cylinx
                for your business.
              </motion.p>

              <AnimatePresence mode="wait">
                {!showSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <div className="grid gap-4">
                      <LabelledInput
                        id="signup-name"
                        label="Full Name"
                        placeholder="James Kamau"
                        value={formValues.name}
                        onChange={updateField("name")}
                      />
                      <LabelledInput
                        id="signup-company"
                        label="Company"
                        placeholder="Nairobi Gas Services"
                        value={formValues.company}
                        onChange={updateField("company")}
                      />
                      <LabelledInput
                        id="signup-phone"
                        label="Mobile Number"
                        placeholder="+254 712 345 678"
                        value={formValues.phone}
                        onChange={updateField("phone")}
                        inputMode="tel"
                      />
                      <LabelledInput
                        id="signup-email"
                        label="Work Email"
                        placeholder="james@cylinx.co.ke"
                        value={formValues.email}
                        onChange={updateField("email")}
                        type="email"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full justify-center rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-lg font-semibold tracking-wide text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
                      disabled={
                        isSubmitting ||
                        !formValues.name ||
                        !formValues.company ||
                        !formValues.phone ||
                        !formValues.email
                      }
                    >
                      {isSubmitting ? "Submitting..." : "Submit & Continue"}
                    </Button>
                    {errorMessage && (
                      <p className="text-sm text-red-400">
                        {errorMessage}
                      </p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="mt-10 space-y-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <motion.div
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-green-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      ✓
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white">
                      Details Received!
                    </h3>
                    <p className="text-slate-200/80">
                      Thanks for reaching out. Our onboarding team will contact you
                      shortly to finalize your Cylinx setup.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                      <Button
                        onClick={handleClose}
                        variant="outline"
                        className="rounded-full border-white/40 text-white hover:bg-white/10"
                      >
                        Close
                      </Button>
                      <Button
                        onClick={() => setShowSuccess(false)}
                        className="rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        Submit Another
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type LabelledInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function LabelledInput({ label, className, id, ...props }: LabelledInputProps) {
  return (
    <label className="space-y-2 text-left">
      <span className="text-sm font-medium text-slate-200/90">{label}</span>
      <input
        id={id}
        className={cn(
          "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple-400/80 focus:bg-white/10 placeholder:text-slate-400/70",
          className,
        )}
        {...props}
      />
    </label>
  );
}

