"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "James Kamau",
      role: "Owner, Nairobi Gas Services",
      content:
        "Since installing Cylinx, we haven't lost a single customer to competitors. The system pays for itself in retained business alone.",
      rating: 5,
      avatar: "JK",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
    {
      name: "Aisha Mwangi",
      role: "Manager, Mombasa Gas Supply",
      content:
        "We monitor over 800 cylinders now. The dashboard makes it so easy to plan our deliveries and keep every customer happy.",
      rating: 5,
      avatar: "AM",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    },
    {
      name: "Peter Ochieng",
      role: "Director, Kisumu Gas Distribution",
      content:
        "Our revenue is up 40% since we started using Cylinx. Customers love that we refill them before they run out. Game changer!",
      rating: 5,
      avatar: "PO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-white">
            Trusted by Gas Vendors Across Kenya
          </h2>
          <p className="text-xl text-gray-300">
            See what our customers are saying
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-slate-950/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.15 + i * 0.05,
                    }}
                  >
                    <Star className="h-5 w-5 fill-cyan-400 text-cyan-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="border-t border-purple-500/20 pt-4 flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-purple-500/30">
                  <AvatarImage
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-cyan-500 text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

