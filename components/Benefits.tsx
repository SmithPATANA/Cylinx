"use client";

import {
  TrendingUp,
  Heart,
  Calendar,
  DollarSign,
  BarChart3,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";

export function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: "Increase Customer Loyalty",
      description:
        "Never let a customer run out again. Proactive service builds trust and long-term relationships.",
      stat: "95% retention rate",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Revenue",
      description:
        "More refills, fewer lost customers, and better route planning means higher profits.",
      stat: "+40% revenue growth",
    },
    {
      icon: Calendar,
      title: "Optimize Delivery Routes",
      description:
        "Plan efficient routes based on real-time gas levels and customer locations.",
      stat: "30% time saved",
    },
    {
      icon: DollarSign,
      title: "Reduce Operational Costs",
      description:
        "Eliminate wasted trips and optimize your fleet utilization with smart scheduling.",
      stat: "25% cost reduction",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description:
        "Understand usage patterns, forecast demand, and make informed business decisions.",
      stat: "Real-time analytics",
    },
    {
      icon: Shield,
      title: "Competitive Advantage",
      description:
        "Stay ahead of competitors by refilling before customers even think about switching.",
      stat: "Industry leading",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="benefits"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-white">Why Choose Cylinx</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your gas delivery business with smart monitoring
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 group"
            >
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <benefit.icon className="h-6 w-6 text-purple-400" />
                </motion.div>
                <motion.div
                  className="text-sm text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  {benefit.stat}
                </motion.div>
              </div>

              <h3 className="text-xl text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

