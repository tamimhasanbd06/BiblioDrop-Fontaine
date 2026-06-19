"use client";

import { useEffect, useState } from "react";

export default function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "http://localhost:8000/featured-books"
        );

        const data = await res.json();

        // 🔥 SAFE ARRAY CHECK (fix map error)
        const safeBooks = Array.isArray(data)
          ? data
          : data?.data || [];

        setBooks(safeBooks);
      } catch (err) {
        setError("Failed to load featured books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 px-6">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-200">
          ✨ Featured Books
        </h2>
        <p className="text-blue-300 mt-3">
          Discover latest approved books from our library
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="text-center text-red-400 mb-6">
          {error}
        </div>
      )}

      {/* LOADING */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-72 bg-blue-800/30 animate-pulse rounded-2xl"
              />
            ))}
        </div>
      ) : (
        /* BOOK GRID */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div
              key={book._id}
              className="group relative bg-blue-900/40 border border-blue-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-3"
              style={{
                animation: `floatUp 0.6s ease forwards`,
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {/* IMAGE */}
              <div className="h-44 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3 text-white">
                <h3 className="text-sm font-semibold text-blue-100 truncate">
                  {book.title}
                </h3>

                <p className="text-xs text-blue-300">
                  {book.author}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs bg-blue-700 px-2 py-1 rounded-full">
                    {book.category}
                  </span>

                  <span className="text-xs text-blue-200">
                    ৳ {book.deliveryFee}
                  </span>
                </div>

                <button className="mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white text-xs py-2 rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FOUNTAIN ANIMATION */}
      <style jsx>{`
        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}