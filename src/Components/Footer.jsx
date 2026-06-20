"use client";

import React from "react";
import Link from "next/link";
import {
  FiBookOpen,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Books", path: "/books" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
    { name: "Privacy Policy", path: "#privacy" },
  ];

  const platformLinks = [
    { name: "Reader Dashboard", path: "/dashboard/user" },
    { name: "Librarian Dashboard", path: "/dashboard/librarian" },
    { name: "Admin Dashboard", path: "/dashboard/admin" },
    { name: "Terms of Service", path: "#terms" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-blue-500/10 bg-slate-950 text-slate-300">
      {/* Premium background glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_38%)]" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1.15fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-600/25">
                <FiBookOpen size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-white">
                  Biblio<span className="text-blue-400">Drop</span>
                </h2>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Book Delivery
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Your Local Library, Delivered. Browse books from local libraries
              and independent book owners, request doorstep delivery, and manage
              your reading journey from one platform.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/10">
                  <FiMail />
                </span>
                <span className="text-slate-400">support@bibliodrop.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/10">
                  <FiPhone />
                </span>
                <span className="text-slate-400">+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/10">
                  <FiMapPin />
                </span>
                <span className="text-slate-400">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-black text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-blue-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500/40 transition-colors duration-300 group-hover:bg-blue-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-5 text-base font-black text-white">
              Platform
            </h3>

            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-blue-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500/40 transition-colors duration-300 group-hover:bg-blue-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl">
              <h3 className="text-lg font-black text-white">
                Join Our Newsletter
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Get updates about new books, delivery features, and reading
                recommendations.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  disabled
                  className="min-h-12 flex-1 rounded-full border border-white/10 bg-slate-900/80 px-5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 disabled:cursor-not-allowed"
                />

                <button
                  disabled
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-700/25 transition disabled:cursor-not-allowed disabled:opacity-90"
                >
                  Join
                  <FiArrowRight />
                </button>
              </form>

              <p className="mt-3 text-xs text-slate-500">
                Newsletter signup is frontend placeholder only.
              </p>
            </div>

            {/* Social */}
            <div className="mt-6">
              <h3 className="mb-4 text-base font-black text-white">
                Connect With Us
              </h3>

              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-700/25"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.25 22 17.08 22 12.06z" />
                  </svg>
                </a>

                {/* New X Logo */}
                <a
                  href="#"
                  aria-label="X"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white hover:text-slate-950 hover:shadow-lg hover:shadow-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-700/25"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-700/25"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-500 md:flex-row md:text-left">
          <p>
            &copy; {currentYear}{" "}
            <span className="font-bold text-white">BiblioDrop</span>. All
            rights reserved.
          </p>

          <p className="text-xs sm:text-sm">
            Built for readers, librarians, and book delivery management.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;