"use client";

import { Pencil, Trash2, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    book: "Atomic Habits",
    rating: 5,
    comment: "Excellent book. Very practical and easy to follow.",
    date: "2025-06-12",
  },
  {
    id: 2,
    book: "Deep Work",
    rating: 4,
    comment: "Helpful for improving focus and productivity.",
    date: "2025-06-08",
  },
];

export default function MyReviewsPage() {
  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            My Reviews
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Manage your ratings and comments.
          </p>
        </div>

        {/* Reviews Stack */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group bg-[#0a1941]/60 backdrop-blur-md border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-6 shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {review.book}
                  </h2>

                  {/* Stars Container */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        className={`${
                          index < review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-slate-300 leading-relaxed max-w-3xl">
                    {review.comment}
                  </p>
                  <p className="text-xs font-medium text-slate-500 tracking-wider">
                    {review.date}
                  </p>
                </div>

                {/* Actions Wrapper */}
                <div className="flex items-center gap-3 sm:self-start">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200 shadow-md">
                    <Pencil size={14} />
                    Edit
                  </button>

                  <button className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-200 shadow-md">
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}