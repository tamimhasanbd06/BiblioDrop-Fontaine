"use client";

import Image from "next/image";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=600",
  },
];

export default function ReadingListPage() {
  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            My Reading List
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Books you successfully received and completed.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="group bg-[#0a1941]/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800/80 hover:border-slate-700 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Box */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-900/40">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={book.id <= 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1941]/50 via-transparent to-transparent" />
              </div>

              {/* Text & Status Box */}
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <h2 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">
                    {book.title}
                  </h2>
                  <p className="text-sm text-slate-400">
                    {book.author}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}