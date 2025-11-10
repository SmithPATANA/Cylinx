"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type SignupModalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
  showSuccess: boolean;
  setShowSuccess: (value: boolean) => void;
};

const SignupModalContext = createContext<SignupModalContextValue | null>(null);

export function SignupModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const open = useCallback(() => {
    setShowSuccess(false);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <SignupModalContext.Provider
      value={{ open, close, isOpen, showSuccess, setShowSuccess }}
    >
      {children}
    </SignupModalContext.Provider>
  );
}

export function useSignupModal() {
  const context = useContext(SignupModalContext);
  if (!context) {
    throw new Error("useSignupModal must be used within a SignupModalProvider");
  }
  return context;
}

