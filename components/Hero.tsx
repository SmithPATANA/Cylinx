"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useSignupModal } from "@/context/SignupModalContext";

export function Hero() {
  const { open } = useSignupModal();

  return (
    <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-cyan-900/20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">
                Smart Gas Monitoring for Kenya
              </span>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl lg:text-6xl text-white tracking-tight">
                Real-time gas level tracking for faster, smarter refills.
              </h1>
              <p className="text-xl text-gray-300 max-w-xl">
                Our smart refill monitoring system tells you when each
                customer's gas is almost finished — so you can refill before
                they switch to another vendor.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                onClick={open}
              >
                Get Started For Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { value: "500+", label: "Active Vendors" },
                { value: "50K+", label: "Cylinders Monitored" },
                { value: "95%", label: "Customer Retention" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-8"
                >
                  <div>
                    <div className="text-3xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                  {index < 2 && (
                    <div className="h-12 w-px bg-gradient-to-b from-purple-500/50 to-cyan-500/50" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative max-w-lg mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl">
              <Image
                src="/cylinx-hero.png"
                alt="Cylinx platform dashboard preview"
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl border border-purple-500/20 rounded-xl shadow-xl p-6 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 border border-green-500/30 flex items-center justify-center">
                  <motion.div
                    className="h-6 w-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Low Gas Alert</div>
                  <div className="text-gray-100">
                    Customer #4523 - 15% remaining
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

