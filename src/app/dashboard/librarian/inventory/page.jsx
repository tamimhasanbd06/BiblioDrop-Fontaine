"use client";

import { Pencil, Trash2 } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Sense and Sensibility",
    author: "Jane Austen",
    category: "Romance",
    deliveryFee: 50,
    availabilityStatus: "Available",
    approvalStatus: "Approved",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    deliveryFee: 60,
    availabilityStatus: "Available",
    approvalStatus: "Pending Approval",
  },
];

export default function ManageInventoryPage() {
  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Manage Inventory
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Manage your added books and approval status.
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
                  <th className="py-4 px-6">Fee</th>
                  <th className="py-4 px-6">Availability</th>
                  <th className="py-4 px-6">Approval</th>
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
                    
                    <td className="py-4 px-6 font-semibold text-slate-300">৳{book.deliveryFee}</td>

                    {/* Availability Tag */}
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {book.availabilityStatus}
                      </span>
                    </td>

                    {/* Approval Tag */}
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                          book.approvalStatus === "Approved"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {book.approvalStatus}
                      </span>
                    </td>

                    {/* Row Item Actions */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2.5">
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200">
                          <Pencil size={13} />
                          Edit
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