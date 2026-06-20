"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FiArrowLeft,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiEdit,
  FiGlobe,
  FiHash,
  FiLayers,
  FiMessageCircle,
  FiStar,
  FiTrash2,
  FiTruck,
  FiUser,
  FiXCircle,
} from "react-icons/fi";

export default function BookDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
    Later when Better Auth/JWT is added, replace this with real logged-in user.
    Example:
    const currentUser = session?.user;
  */
  const currentUser = null;

  const isLoggedIn = Boolean(currentUser);
  const isOwner = currentUser?.email && currentUser.email === book?.ownerEmail;

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${API_URL}/books/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch book details");
        }

        const data = await res.json();

        /*
          Supports both backend response types:
          1. { success: true, book: {...} }
          2. direct book object {...}
        */
        const safeBook = data?.book || data;

        setBook(safeBook);
      } catch (err) {
        setError("Failed to load book details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [API_URL, id]);

  const formatDate = (dateValue) => {
    if (!dateValue) return "Not available";

    return new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getBookImage = () => {
    return (
      book?.image ||
      book?.coverImage ||
      book?.imageUrl ||
      book?.cover ||
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=900&auto=format&fit=crop"
    );
  };

  const availabilityStatus =
    book?.availabilityStatus || book?.status || book?.availability || "Available";

  const isUnavailable =
    availabilityStatus === "Checked Out" ||
    availabilityStatus === "Unavailable" ||
    availabilityStatus === "Not Available";

  const isApproved = book?.approvalStatus === "Approved";

  const requestButtonDisabled = isUnavailable || isOwner;

  const handleRequestDelivery = () => {
    if (!isLoggedIn) {
      router.push("/signin");
      return;
    }

    if (requestButtonDisabled) return;

    /*
      Later Stripe checkout route will be connected here.
      Example:
      router.push(`/checkout/${book._id}`);
    */
    alert("Stripe checkout will be connected here.");
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      rating: 5,
      comment:
        "The book arrived in great condition and the delivery process was smooth.",
    },
    {
      id: 2,
      name: "Tanvir Hasan",
      rating: 4,
      comment:
        "A good reading experience. The platform made it easy to request delivery.",
    },
  ];

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-10">
        <section className="mx-auto max-w-[1440px]">
          <div className="mb-8 h-11 w-36 animate-pulse rounded-full bg-slate-800" />

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
              <div className="aspect-[2/3] animate-pulse rounded-[1.5rem] bg-slate-800" />
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="mb-5 h-8 w-40 animate-pulse rounded-full bg-slate-800" />
              <div className="mb-4 h-14 w-4/5 animate-pulse rounded-full bg-slate-800" />
              <div className="mb-8 h-6 w-2/5 animate-pulse rounded-full bg-slate-800" />

              <div className="space-y-4">
                <div className="h-4 w-full animate-pulse rounded-full bg-slate-800" />
                <div className="h-4 w-11/12 animate-pulse rounded-full bg-slate-800" />
                <div className="h-4 w-4/5 animate-pulse rounded-full bg-slate-800" />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-24 animate-pulse rounded-2xl bg-slate-800"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error || !book) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-10">
        <section className="mx-auto max-w-2xl rounded-[2rem] border border-red-400/20 bg-red-500/10 p-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-3xl text-red-300">
            <FiXCircle />
          </div>

          <h1 className="text-2xl font-black text-white">
            Book Details Not Found
          </h1>

          <p className="mt-3 text-sm leading-7 text-red-200/80">
            {error || "The requested book could not be found."}
          </p>

          <Link
            href="/books"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            <FiArrowLeft />
            Back to Browse Books
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none fixed -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="pointer-events-none fixed -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-[130px]" />

      <section className="relative z-10 mx-auto max-w-[1440px]">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300"
        >
          <FiArrowLeft />
          Back
        </button>

        {/* Main Details */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Book Cover */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-blue-950/20 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-slate-900 shadow-2xl">
              <img
                src={getBookImage()}
                alt={book.title || "Book cover"}
                className="aspect-[2/3] w-full object-cover"
              />

              {/* Book spine */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-black/50 to-transparent" />

              {/* Top badges */}
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-600/90 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-white shadow-lg">
                  {book.category || "Book"}
                </span>

                <span
                  className={`rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wide shadow-lg ${
                    isUnavailable
                      ? "bg-red-500 text-white"
                      : "bg-emerald-500 text-white"
                  }`}
                >
                  {isUnavailable ? "Unavailable" : "Available"}
                </span>
              </div>

              {/* Fee */}
              <div className="absolute bottom-4 right-4 rounded-full bg-white px-4 py-2 text-sm font-black text-blue-700 shadow-xl">
                ৳ {book.deliveryFee || 0}
              </div>
            </div>

            {/* Owner Card */}
            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                Listed By
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={
                    book.ownerPhoto ||
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
                  }
                  alt={book.ownerName || "Owner"}
                  className="h-14 w-14 rounded-2xl object-cover"
                />

                <div className="min-w-0">
                  <h3 className="line-clamp-1 text-base font-black text-white">
                    {book.ownerName || "Unknown Librarian"}
                  </h3>

                  <p className="line-clamp-1 text-sm text-slate-400">
                    {book.ownerEmail || "Email not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                <FiBookOpen />
                {book.bookId || "Book Details"}
              </span>

              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${
                  isApproved
                    ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20"
                    : "bg-yellow-500/10 text-yellow-300 ring-1 ring-yellow-400/20"
                }`}
              >
                <FiCheckCircle />
                {book.approvalStatus || "Pending Approval"}
              </span>
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              {book.title || "Untitled Book"}
            </h1>

            <p className="mt-3 text-lg font-semibold text-blue-300">
              by {book.author || "Unknown Author"}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-bold text-yellow-300 ring-1 ring-yellow-400/20">
                <FiStar />
                {book.rating || 0} Rating
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300 ring-1 ring-blue-400/20">
                <FiMessageCircle />
                {book.totalReviews || 0} Reviews
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-300 ring-1 ring-emerald-400/20">
                <FiTruck />
                {book.totalDeliveries || 0} Deliveries
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mb-3 text-xl font-black text-white">
                Description
              </h2>

              <p className="text-sm leading-8 text-slate-300 sm:text-base">
                {book.description || "No description available for this book."}
              </p>
            </div>

            {/* Info Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <InfoCard
                icon={<FiLayers />}
                label="Category"
                value={book.category || "Not available"}
              />

              <InfoCard
                icon={<FiBookOpen />}
                label="Publisher"
                value={book.publisher || "Not available"}
              />

              <InfoCard
                icon={<FiGlobe />}
                label="Language"
                value={book.language || "Not available"}
              />

              <InfoCard
                icon={<FiHash />}
                label="ISBN"
                value={book.isbn || "Not available"}
              />

              <InfoCard
                icon={<FiBookOpen />}
                label="Pages"
                value={book.pages ? `${book.pages} pages` : "Not available"}
              />

              <InfoCard
                icon={<FiDollarSign />}
                label="Delivery Fee"
                value={`৳ ${book.deliveryFee || 0}`}
              />

              <InfoCard
                icon={<FiCheckCircle />}
                label="Availability"
                value={availabilityStatus}
              />

              <InfoCard
                icon={<FiCalendar />}
                label="Date Added"
                value={formatDate(book.createdAt)}
              />

              <InfoCard
                icon={<FiClock />}
                label="Last Updated"
                value={formatDate(book.updatedAt)}
              />
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={handleRequestDelivery}
                disabled={requestButtonDisabled}
                className={`inline-flex flex-1 items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-black transition-all duration-300 ${
                  requestButtonDisabled
                    ? "cursor-not-allowed bg-slate-700 text-slate-400"
                    : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-700/25 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-700/30"
                }`}
              >
                <FiTruck />
                {isUnavailable
                  ? "Currently Unavailable"
                  : isOwner
                  ? "You Own This Book"
                  : "Request Delivery"}
              </button>

              <Link
                href="/books"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-black text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300"
              >
                Browse More
                <FiArrowLeft />
              </Link>
            </div>

            {!isLoggedIn && !isUnavailable && (
              <p className="mt-4 text-sm text-slate-400">
                You need to login before requesting delivery or leaving a review.
              </p>
            )}

            {/* Librarian Controls */}
            {isOwner && (
              <div className="mt-8 rounded-[1.5rem] border border-blue-400/20 bg-blue-500/10 p-5">
                <h3 className="mb-4 text-lg font-black text-white">
                  Librarian Controls
                </h3>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500">
                    <FiEdit />
                    Edit
                  </button>

                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-yellow-400">
                    <FiXCircle />
                    Unpublish
                  </button>

                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-500">
                    <FiTrash2 />
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">
                Reader Reviews
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Only readers with delivered status can leave verified reviews.
              </p>
            </div>

            <button
              disabled={!isLoggedIn}
              className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                isLoggedIn
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "cursor-not-allowed bg-slate-800 text-slate-500"
              }`}
            >
              Write a Review
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                      <FiUser />
                    </div>

                    <div>
                      <h3 className="font-black text-white">{review.name}</h3>
                      <p className="text-xs text-emerald-300">
                        Verified reader
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-yellow-300">
                    <FiStar />
                    <span className="text-sm font-bold">{review.rating}</span>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
        {icon}
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-bold text-white">{value}</p>
    </div>
  );
}