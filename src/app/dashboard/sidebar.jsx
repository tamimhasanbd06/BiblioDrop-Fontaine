"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  History,
  Star,
  PlusCircle,
  Library,
  Truck,
  Users,
  CreditCard,
  CheckCircle,
  Home,
} from "lucide-react";

export default function Sidebar({ role, user }) {
  const pathname = usePathname();

  const userLinks = [
    { name: "Overview", href: "/dashboard/user", icon: LayoutDashboard },
    { name: "Delivery History", href: "/dashboard/user/delivery-history", icon: History },
    { name: "Reading List", href: "/dashboard/user/reading-list", icon: BookOpen },
    { name: "My Reviews", href: "/dashboard/user/reviews", icon: Star },
  ];

  const librarianLinks = [
    { name: "Overview", href: "/dashboard/librarian", icon: LayoutDashboard },
    { name: "Add Book", href: "/dashboard/librarian/add-book", icon: PlusCircle },
    { name: "Manage Inventory", href: "/dashboard/librarian/inventory", icon: Library },
    { name: "Manage Deliveries", href: "/dashboard/librarian/deliveries", icon: Truck },
  ];

  const adminLinks = [
    { name: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
    { name: "Book Approval", href: "/dashboard/admin/book-approval", icon: CheckCircle },
    { name: "Manage Users", href: "/dashboard/admin/users", icon: Users },
    { name: "Manage Books", href: "/dashboard/admin/books", icon: Library },
    { name: "Transactions", href: "/dashboard/admin/transactions", icon: CreditCard },
  ];

  // Pick operational links based on evaluated login context role string
  const normalizedRole = role?.toLowerCase() || "user";
  const links =
    normalizedRole === "admin"
      ? adminLinks
      : normalizedRole === "librarian"
      ? librarianLinks
      : userLinks;

  return (
    <aside className="hidden md:flex w-72 min-h-screen bg-[#06143c] border-r border-slate-800/80 p-6 flex-col justify-between">
      <div className="space-y-8">
        
        {/* Brand App Header Title */}
        <Link href="/" className="flex items-center gap-3 px-2 group">
          <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <Home size={20} />
          </div>
          <span className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors duration-200">
            BiblioDrop
          </span>
        </Link>

        {/* Dynamic User Profile Card Widget */}
        <div className="p-4 rounded-2xl bg-[#0a1941]/60 border border-slate-800/60 backdrop-blur-md shadow-inner flex flex-col space-y-1">
          <p className="font-bold text-white tracking-wide truncate">
            {user?.name || "App User"}
          </p>
          <span className="inline-self-start text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/10 w-fit">
            {normalizedRole}
          </span>
        </div>

        {/* Dynamic Nav Stack */}
        <nav className="space-y-1.5">
          {links.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 tracking-wide ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-950/50 border border-blue-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                <Icon size={18} className={active ? "text-white" : "text-slate-400 group-hover:text-slate-200"} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Optional Footnote branding metadata indicator */}
      <div className="pt-4 border-t border-slate-800/40 text-center">
        <p className="text-[10px] font-medium tracking-widest uppercase text-slate-600">
          v2026 Core Platform
        </p>
      </div>
    </aside>
  );
}