"use client";

import { Trash2 } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Clark Kent",
    email: "clark@example.com",
    role: "user",
  },
  {
    id: 2,
    name: "Bruce Wayne",
    email: "bruce@example.com",
    role: "librarian",
  },
  {
    id: 3,
    name: "Diana Prince",
    email: "diana@example.com",
    role: "admin",
  },
];

export default function ManageUsersPage() {
  const getRoleBadgeStyle = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
      case "librarian":
        return "bg-purple-500/10 text-purple-400 border border-purple-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border border-slate-700/60";
    }
  };

  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Manage Users
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Manage roles and platform users.
          </p>
        </div>

        {/* Glassmorphic Users Container Table */}
        <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#0f2256] border-b border-slate-800 text-slate-300 text-sm font-semibold tracking-wider uppercase">
                <tr>
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Email</th>
                  <th className="py-4 px-6">Current Role</th>
                  <th className="py-4 px-6">Change Role</th>
                  <th className="py-4 px-6 text-center">Delete</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {users.map((user) => (
                  <tr 
                    key={user.id}
                    className="hover:bg-slate-800/20 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 font-semibold text-white">{user.name}</td>
                    <td className="py-4 px-6 text-slate-300">{user.email}</td>

                    {/* Styled Dynamic Role Tag */}
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold capitalize tracking-wide ${getRoleBadgeStyle(user.role)}`}>
                        {user.role}
                      </span>
                    </td>

                    {/* Integrated Action Selector */}
                    <td className="py-4 px-6">
                      <select
                        defaultValue={user.role}
                        className="bg-[#0f2256]/80 border border-slate-700 text-slate-200 rounded-xl px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                      >
                        <option value="user" className="bg-[#0f172a] text-slate-200">User</option>
                        <option value="librarian" className="bg-[#0f172a] text-slate-200">Librarian</option>
                        <option value="admin" className="bg-[#0f172a] text-slate-200">Admin</option>
                      </select>
                    </td>

                    {/* Inline Drop Trigger Action */}
                    <td className="py-4 px-6 text-center">
                      <button className="inline-flex items-center justify-center p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-200 shadow-md">
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>
    </div>
  );
}