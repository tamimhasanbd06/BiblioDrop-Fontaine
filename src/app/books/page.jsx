"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FiSearch,
  FiFilter,
  FiBookOpen,
  FiArrowRight,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
  FiSliders,
  FiX,
} from "react-icons/fi";

export default function BrowseBooksPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const categoryFromUrl = searchParams.get("category") || "All";

  const [books, setBooks] = useState([]);
  const [pagination, setPagination] = useState({
    totalBooks: 0,
    currentPage: 1,
    perPage: 8,
    totalPages: 1,
  });

  const [categories, setCategories] = useState(["All"]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromUrl);
  const [availability, setAvailability] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [minFee, setMinFee] = useState("");
  const [maxFee, setMaxFee] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    params.set("page", currentPage);
    params.set("limit", booksPerPage);
    params.set("sort", sortBy);

    if (search.trim()) {
      params.set("search", search.trim());
    }

    if (category !== "All") {
      params.set("category", category);
    }

    if (availability !== "All") {
      params.set("availability", availability);
    }

    if (minFee !== "") {
      params.set("minFee", minFee);
    }

    if (maxFee !== "") {
      params.set("maxFee", maxFee);
    }

    return params.toString();
  }, [
    currentPage,
    booksPerPage,
    sortBy,
    search,
    category,
    availability,
    minFee,
    maxFee,
  ]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${API_URL}/books?${queryString}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await res.json();

        setBooks(data?.books || []);
        setPagination(
          data?.pagination || {
            totalBooks: 0,
            currentPage: 1,
            perPage: booksPerPage,
            totalPages: 1,
          }
        );
      } catch (err) {
        setError("Failed to load books. Please try again later.");
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [API_URL, queryString, booksPerPage]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_URL}/books?page=1&limit=12`, {
          cache: "no-store",
        });

        const data = await res.json();
        const bookList = data?.books || [];

        const uniqueCategories = [
          "All",
          ...new Set(bookList.map((book) => book.category).filter(Boolean)),
        ];

        setCategories(uniqueCategories);
      } catch (err) {
        setCategories(["All"]);
      }
    };

    fetchCategories();
  }, [API_URL]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, availability, minFee, maxFee, sortBy]);

  const goDetails = (id) => {
    if (!id) return;
    router.push(`/books/${id}`);
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setAvailability("All");
    setSortBy("latest");
    setMinFee("");
    setMaxFee("");
    setCurrentPage(1);
  };

  const totalPages = pagination?.totalPages || 1;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-10">
      <section className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
            <FiBookOpen />
            Public Book Collection
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Browse <span className="text-blue-400">Books</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore books from local libraries and independent book owners.
            Search, filter, sort, and open details to request delivery.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-blue-950/20 backdrop-blur-xl">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-blue-300">
              <FiSliders />
              Search & Filters
            </div>

            <button
              onClick={resetFilters}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300"
            >
              <FiX />
              Reset Filters
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by book name or author..."
                className="min-h-12 w-full rounded-full border border-white/10 bg-slate-900/80 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
              />
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="min-h-12 rounded-full border border-white/10 bg-slate-900/80 px-4 text-sm text-white outline-none transition focus:border-blue-400"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>

            {/* Availability */}
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="min-h-12 rounded-full border border-white/10 bg-slate-900/80 px-4 text-sm text-white outline-none transition focus:border-blue-400"
            >
              <option value="All">All Status</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="min-h-12 rounded-full border border-white/10 bg-slate-900/80 px-4 text-sm text-white outline-none transition focus:border-blue-400"
            >
              <option value="latest">Latest</option>
              <option value="name">Name A-Z</option>
              <option value="fee-low">Fee Low to High</option>
              <option value="fee-high">Fee High to Low</option>
            </select>

            {/* Count */}
            <div className="flex min-h-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 text-sm font-bold text-blue-300">
              <FiFilter className="mr-2" />
              {pagination.totalBooks || 0} Books
            </div>
          </div>

          {/* Fee Range */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="number"
              value={minFee}
              onChange={(e) => setMinFee(e.target.value)}
              placeholder="Minimum delivery fee"
              className="min-h-12 rounded-full border border-white/10 bg-slate-900/80 px-5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />

            <input
              type="number"
              value={maxFee}
              onChange={(e) => setMaxFee(e.target.value)}
              placeholder="Maximum delivery fee"
              className="min-h-12 rounded-full border border-white/10 bg-slate-900/80 px-5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>
        </div>

        {/* Error */}
        {!loading && error && (
          <div className="mx-auto mb-10 max-w-xl rounded-3xl border border-red-400/20 bg-red-500/10 p-6 text-center">
            <p className="font-semibold text-red-300">{error}</p>
          </div>
        )}

        {/* Loading Skeleton */}
        {loading ? (
          <div>
            <div className="mb-8 flex items-center justify-center gap-3 text-blue-300">
              <FiRefreshCw className="animate-spin text-xl" />
              <span className="text-sm font-semibold tracking-wide">
                Loading books...
              </span>
            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-blue-950/20"
                >
                  <div className="relative aspect-[2/3] overflow-hidden rounded-[1.25rem] bg-slate-800">
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800" />
                    <div className="absolute left-0 top-0 h-full w-2 bg-white/10" />
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="h-4 w-4/5 animate-pulse rounded-full bg-slate-800" />
                    <div className="h-3 w-3/5 animate-pulse rounded-full bg-slate-800" />
                    <div className="flex items-center justify-between pt-2">
                      <div className="h-6 w-20 animate-pulse rounded-full bg-slate-800" />
                      <div className="h-6 w-14 animate-pulse rounded-full bg-slate-800" />
                    </div>
                    <div className="h-10 w-full animate-pulse rounded-full bg-slate-800" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : books.length === 0 && !error ? (
          /* Empty State */
          <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl shadow-blue-950/20">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-300">
              <FiBookOpen />
            </div>

            <h3 className="text-2xl font-black text-white">No Books Found</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              No books match your search or filter. Try changing the filters.
            </p>

            <button
              onClick={resetFilters}
              className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* Book Grid */}
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {books.map((book) => {
                const bookImage =
                  book.image ||
                  book.coverImage ||
                  book.imageUrl ||
                  book.cover ||
                  book.photo ||
                  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=700&auto=format&fit=crop";

                const status =
                  book.availabilityStatus ||
                  book.status ||
                  book.availability ||
                  "Available";

                const isUnavailable =
                  status === "Checked Out" ||
                  status === "Unavailable" ||
                  status === "Not Available";

                return (
                  <article
                    key={book._id}
                    className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-blue-950/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-400/40 hover:bg-white/[0.07] hover:shadow-blue-700/20"
                  >
                    {/* Image */}
                    <div
                      onClick={() => goDetails(book._id)}
                      className="relative aspect-[2/3] cursor-pointer overflow-hidden rounded-[1.25rem] bg-slate-900 shadow-xl"
                    >
                      <img
                        src={bookImage}
                        alt={book.title || "Book cover"}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Book spine */}
                      <div className="pointer-events-none absolute left-0 top-0 h-full w-[10px] bg-gradient-to-r from-black/45 to-transparent" />

                      {/* Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                      {/* Category */}
                      <div className="absolute left-3 top-3 max-w-[85%] rounded-full bg-blue-600/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg">
                        {book.category || "Book"}
                      </div>

                      {/* Unavailable Badge */}
                      {isUnavailable && (
                        <div className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg">
                          Unavailable
                        </div>
                      )}

                      {/* Delivery Fee */}
                      <div className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-blue-700 shadow-lg">
                        ৳ {book.deliveryFee || 0}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-4">
                      <h3 className="line-clamp-1 text-base font-black text-white transition group-hover:text-blue-300">
                        {book.title || "Untitled Book"}
                      </h3>

                      <p className="mt-1 line-clamp-1 text-xs font-medium text-slate-400">
                        by {book.author || "Unknown Author"}
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
                            isUnavailable
                              ? "bg-red-500/10 text-red-300 ring-1 ring-red-400/20"
                              : "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20"
                          }`}
                        >
                          {isUnavailable ? "Unavailable" : "Available"}
                        </span>

                        <span className="text-xs font-semibold text-blue-300">
                          Details
                        </span>
                      </div>

                      <button
                        onClick={() => goDetails(book._id)}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-700/30"
                      >
                        View Details
                        <FiArrowRight />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-5 text-sm font-bold text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FiChevronLeft />
                  Prev
                </button>

                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-11 w-11 rounded-full text-sm font-bold transition ${
                        currentPage === page
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-700/25"
                          : "border border-white/10 text-slate-300 hover:border-blue-400/40 hover:text-blue-300"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-5 text-sm font-bold text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <FiChevronRight />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}