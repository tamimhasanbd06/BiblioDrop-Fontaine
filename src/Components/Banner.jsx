"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiBookOpen, FiTruck, FiStar } from "react-icons/fi";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1920&auto=format&fit=crop",
    badge: "Online Book Delivery Platform",
    title: "Your Local Library, Delivered",
    description:
      "Browse books from local libraries and independent book owners, then request doorstep delivery with a smooth digital experience.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1920&auto=format&fit=crop",
    badge: "Read More, Travel Less",
    title: "Request Books at Your Doorstep",
    description:
      "Find your favorite books, pay the delivery fee securely, and track every request from your personal dashboard.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1920&auto=format&fit=crop",
    badge: "Verified Reading Experience",
    title: "Read, Review, and Build Your List",
    description:
      "After successful delivery, leave verified reviews and manage your reading history in one beautiful platform.",
  },
];

const stats = [
  {
    id: 1,
    icon: <FiBookOpen />,
    value: "1K+",
    label: "Books Listed",
  },
  {
    id: 2,
    icon: <FiTruck />,
    value: "Fast",
    label: "Doorstep Delivery",
  },
  {
    id: 3,
    icon: <FiStar />,
    value: "4.8",
    label: "Reader Rating",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative min-h-[720px] w-full overflow-hidden bg-slate-950 pt-20 sm:min-h-[760px] lg:min-h-screen">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide.id}
            src={activeSlide.image}
            alt={activeSlide.title}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* PREMIUM OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-blue-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/25 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1440px] items-center px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:p-8 lg:p-10"
              >
                {/* BADGE */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-100"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-300" />
                  {activeSlide.badge}
                </motion.div>

                {/* TITLE */}
                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                  className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  {activeSlide.title}
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.25 }}
                  className="mt-6 max-w-2xl text-base leading-8 text-blue-50/85 sm:text-lg"
                >
                  {activeSlide.description}
                </motion.p>

                {/* CTA BUTTONS */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.35 }}
                  className="mt-8 flex flex-col gap-4 sm:flex-row"
                >
                  <Link
                    href="/books"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-700/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-700/40"
                  >
                    Browse Books
                    <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-700"
                  >
                    List Your Books
                  </Link>
                </motion.div>

                {/* STATS */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.45 }}
                  className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
                >
                  {stats.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-xl text-blue-200">
                        {item.icon}
                      </div>

                      <h3 className="text-2xl font-black text-white">
                        {item.value}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-blue-100/70">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-[470px]">
              <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-blue-500/25 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=900&auto=format&fit=crop"
                  alt="Books delivery preview"
                  className="h-[430px] w-full rounded-[1.5rem] object-cover"
                />

                <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-700">
                      <FiTruck />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-slate-900">
                        Delivery Request Ready
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Readers can request books and track delivery status from
                        Pending to Delivered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING REVIEW CARD */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-10 bottom-20 rounded-2xl border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-950/15"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <FiStar />
                  </div>

                  <div>
                    <p className="text-sm font-black text-slate-900">
                      Verified Reviews
                    </p>
                    <p className="text-xs text-slate-500">
                      Only delivered readers
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 lg:left-auto lg:right-10 lg:translate-x-0">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-9 bg-blue-400"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;