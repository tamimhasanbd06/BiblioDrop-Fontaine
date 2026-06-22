"use client";

import Sidebar from "./sidebar";
import { useSession } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 1. If not loading and no active session exists, kick to signin
    if (!isPending && !session?.user) {
      router.push("/signin");
      return;
    }

    // 2. Conditional Role-Based Redirection Routing
    if (!isPending && session?.user) {
      const role = session.user.role?.toLowerCase() || "user";

      if (role === "admin" && !pathname.startsWith("/dashboard/admin")) {
        router.push("/dashboard/admin");
      } else if (role === "librarian" && !pathname.startsWith("/dashboard/librarian")) {
        router.push("/dashboard/librarian");
      } else if (role === "user" && pathname === "/dashboard") {
        // Default standard user landing route
        router.push("/dashboard/user");
      }
    }
  }, [isPending, session, router, pathname]);

  // Premium loading screen placeholder designed for your dark theme
  if (isPending) {
    return (
      <div className="min-h-screen bg-[#041032] flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
        <span className="text-slate-400 text-sm font-medium tracking-wide">
          Verifying credentials...
        </span>
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-[#041032] flex transition-colors duration-300">
      {/* Sidebar gets injected with the authenticated system user object */}
      <Sidebar role={session.user.role || "user"} user={session.user} />

      <main className="flex-1 p-6 md:p-10 overflow-x-hidden text-slate-100">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}