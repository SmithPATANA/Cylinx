"use client";

import { Bell, Gauge, TrendingUp, Clock, Users, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Features() {
  const features = [
    {
      icon: Gauge,
      title: "Which customer's gas is running low",
      description:
        "Real-time monitoring of every cylinder with instant low-level alerts",
    },
    {
      icon: Bell,
      title: "How much gas remains in each cylinder",
      description:
        "Precise measurements down to the percentage level for accurate planning",
    },
    {
      icon: Clock,
      title: "When to send a refill before anyone else does",
      description:
        "Predictive analytics that help you stay ahead of the competition",
    },
  ];

  const additionalFeatures = [
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Track usage patterns and predict refill schedules",
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Manage all your customers from one central dashboard",
    },
    {
      icon: MapPin,
      title: "Route Optimization",
      description: "Plan efficient delivery routes based on gas levels",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="features"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.08),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-white">You will instantly see:</h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 group"
            >
              <motion.div
                className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <feature.icon className="h-6 w-6 text-purple-400" />
              </motion.div>
              <h3 className="text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative rounded-3xl p-12 text-white text-center space-y-6 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-cyan-600"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          <p className="text-3xl relative z-10">
            No more guessing. No more lost clients. Just smooth, reliable,
            repeat refills.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center space-y-4 group"
            >
              <motion.div
                className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.15, rotate: 180 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <feature.icon className="h-8 w-8 text-cyan-400" />
              </motion.div>
              <h3 className="text-xl text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

