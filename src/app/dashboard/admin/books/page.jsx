"use client";

import { EyeOff, Trash2 } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Sense and Sensibility",
    author: "Jane Austen",
    category: "Romance",
    ownerName: "Clark Kent",
    approvalStatus: "Approved",
    availabilityStatus: "Available",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    ownerName: "Bruce Wayne",
    approvalStatus: "Approved",
    availabilityStatus: "Available",
  },
];

export default function ManageBooksPage() {
  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Manage All Books
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Admin can control every book on the platform.
          </p>
        </div>

        {/* Glassmorphic Table Container */}
        <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#0f2256] border-b border-slate-800 text-slate-300 text-sm font-semibold tracking-wider uppercase">
                <tr>
                  <th className="py-4 px-6">Book</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Owner</th>
                  <th className="py-4 px-6">Approval</th>
                  <th className="py-4 px-6">Availability</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {books.map((book) => (
                  <tr 
                    key={book.id}
                    className="hover:bg-slate-800/20 transition-colors duration-200"
                  >
                    {/* Title & Author Info */}
                    <td className="py-4 px-6">
                      <p className="font-semibold text-white">{book.title}</p>
                      <p className="text-sm text-slate-400 mt-0.5">{book.author}</p>
                    </td>

                    <td className="py-4 px-6 text-slate-300">{book.category}</td>
                    
                    <td className="py-4 px-6 text-slate-300">{book.ownerName}</td>

                    {/* Approval Badge */}
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {book.approvalStatus}
                      </span>
                    </td>

                    {/* Availability Badge */}
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {book.availabilityStatus}
                      </span>
                    </td>

                    {/* Row Action Items */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2.5">
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500 hover:text-white transition-all duration-200">
                          <EyeOff size={13} />
                          Unpublish
                        </button>

                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-200">
                          <Trash2 size={13} />
                          Delete
                        </button>
                      </div>
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