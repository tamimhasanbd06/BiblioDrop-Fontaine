"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiGrid,
  FiHome,
  FiBookOpen,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const links = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Browse Books", path: "/books", icon: <FiBookOpen /> },
    { name: "Dashboard", path: "/dashboard/user", icon: <FiGrid /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 12);

      if (current > lastScrollY.current && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed left-0 top-0 z-50 w-full border-b transition-all duration-300
          ${
            scrolled
              ? "h-16 border-blue-100 bg-white/90 shadow-lg shadow-blue-950/5 backdrop-blur-xl"
              : "h-20 border-transparent bg-white/75 backdrop-blur-md"
          }
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 transition duration-300 hover:scale-[1.02]"
            aria-label="BiblioDrop Home"
          >
            <Image
              src="/Images/Long logo.png"
              alt="BiblioDrop logo"
              width={155}
              height={52}
              priority
              className="h-auto w-[135px] object-contain sm:w-[155px]"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`
                  group relative flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-300
                  ${
                    isActive(link.path)
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-blue-700"
                  }
                `}
              >
                <span
                  className={`
                    text-base transition-colors duration-300
                    ${
                      isActive(link.path)
                        ? "text-blue-700"
                        : "text-slate-500 group-hover:text-blue-700"
                    }
                  `}
                >
                  {link.icon}
                </span>

                <span>{link.name}</span>

                {/* Premium small underline only for active/hover */}
                <span
                  className={`
                    absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300
                    ${
                      isActive(link.path)
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            ))}
          </div>

          {/* DESKTOP AUTH BUTTONS */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/signin"
              className={`
                rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300
                ${
                  isActive("/signin")
                    ? "border-blue-700 bg-blue-700 text-white shadow-md shadow-blue-700/20"
                    : "border-blue-200 bg-white text-blue-700 hover:border-blue-600 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-950/5"
                }
              `}
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className={`
                rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all duration-300
                ${
                  isActive("/signup")
                    ? "bg-blue-900 shadow-md shadow-blue-900/20"
                    : "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 shadow-lg shadow-blue-700/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-700/30"
                }
              `}
            >
              Sign Up
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              inline-flex h-11 w-11 items-center justify-center rounded-full
              border border-blue-100 bg-white text-blue-700 shadow-sm
              transition hover:bg-blue-50 hover:text-blue-800 lg:hidden
            "
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-[70] bg-slate-950/45 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${isOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />

      {/* MOBILE RIGHT DRAWER */}
      <aside
        className={`
          fixed right-0 top-0 z-[80] h-full w-[84%] max-w-[370px]
          border-l border-blue-100 bg-white shadow-2xl shadow-slate-950/20
          transition-transform duration-300 ease-out lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col">
          {/* DRAWER HEADER */}
          <div className="flex items-center justify-between border-b border-blue-100 px-5 py-5">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/Images/Long logo.png"
                alt="BiblioDrop logo"
                width={138}
                height={45}
                className="object-contain"
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="
                inline-flex h-10 w-10 items-center justify-center rounded-full
                bg-blue-50 text-blue-700 transition
                hover:bg-blue-700 hover:text-white
              "
              aria-label="Close menu"
            >
              <FiX size={22} />
            </button>
          </div>

          {/* DRAWER BODY */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <div className="mb-6 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                BiblioDrop
              </p>

              <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                Your Local Library, Delivered
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Browse books, request delivery, and manage your reading journey.
              </p>
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
              Navigation
            </p>

            <div className="space-y-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`
                    flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-bold transition-all duration-300
                    ${
                      isActive(link.path)
                        ? "bg-blue-700 text-white shadow-lg shadow-blue-700/20"
                        : "bg-slate-50 text-slate-700 ring-1 ring-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:ring-blue-100"
                    }
                  `}
                >
                  <span
                    className={`
                      flex h-9 w-9 items-center justify-center rounded-xl text-lg transition
                      ${
                        isActive(link.path)
                          ? "bg-white/15 text-white"
                          : "bg-white text-blue-700 shadow-sm"
                      }
                    `}
                  >
                    {link.icon}
                  </span>

                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="my-6 h-px bg-blue-100" />

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
              Account
            </p>

            <div className="space-y-3">
              <Link
                href="/signin"
                className={`
                  flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-bold transition-all duration-300
                  ${
                    isActive("/signin")
                      ? "bg-blue-700 text-white shadow-lg shadow-blue-700/20"
                      : "border border-blue-100 bg-white text-blue-700 hover:bg-blue-50"
                  }
                `}
              >
                <FiLogIn />
                Sign In
              </Link>

              <Link
                href="/signup"
                className={`
                  flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-bold text-white transition-all duration-300
                  ${
                    isActive("/signup")
                      ? "bg-blue-900"
                      : "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 shadow-lg shadow-blue-700/25"
                  }
                `}
              >
                <FiUserPlus />
                Sign Up
              </Link>
            </div>
          </div>

          {/* DRAWER FOOTER */}
          <div className="border-t border-blue-100 px-5 py-5">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <FiBookOpen size={22} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Read smarter
                </p>
                <p className="text-xs text-slate-500">
                  Discover books near you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;