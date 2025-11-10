"use client";

import Image from "next/image";
import { Plug, Smartphone, TruckIcon, RotateCw } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      icon: Plug,
      number: "01",
      title: "Install Smart Sensors",
      description:
        "Easy-to-install sensors attach to each cylinder in minutes. No technical expertise required.",
    },
    {
      icon: Smartphone,
      number: "02",
      title: "Monitor in Real-Time",
      description:
        "Live gas-level updates automatically sent to your dashboard, accessible from any device.",
    },
    {
      icon: TruckIcon,
      number: "03",
      title: "Deliver Proactively",
      description:
        "Get alerts when customers are running low and schedule refills before they switch vendors.",
    },
    {
      icon: RotateCw,
      number: "04",
      title: "Build Loyalty",
      description:
        "Keep customers happy with timely service and watch your retention rates soar.",
    },
  ];

  const benefits = [
    "Scalable from 10 to 10,000+ cylinders",
    "Cloud-based platform accessible anywhere",
    "Automated alerts and notifications",
    "Detailed usage analytics and reporting",
    "24/7 customer support",
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.08),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-white">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Four simple steps to transform your gas delivery business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-slate-950/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 transition-all group"
                whileHover={{ y: -8 }}
              >
                <div className="text-6xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <motion.div
                  className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <step.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-xl text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            className="relative max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.25, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/20 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1595166986545-bf6dacb22b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxscGclMjBjb29raW5nJTIwZ2FzfGVufDF8fHx8MTc2MjYwMDAzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="LPG cooking gas cylinders"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl text-white">
              Whether you manage ten cylinders or a thousand
            </h3>
            <p className="text-xl text-gray-300">
              Our system helps you plan deliveries, build loyalty, and grow your
              sales — all from one simple platform.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-gradient-to-br from-green-400 to-emerald-500"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

