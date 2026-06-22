"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function AddBookPage() {
  const [loading, setLoading] = useState(false);

  const handleAddBook = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const bookData = {
      title: form.title.value,
      author: form.author.value,
      category: form.category.value,
      publisher: form.publisher.value,
      language: form.language.value,
      isbn: form.isbn.value,
      pages: Number(form.pages.value),
      image: form.image.value,
      description: form.description.value,
      deliveryFee: Number(form.deliveryFee.value),

      availabilityStatus: "Available",
      approvalStatus: "Pending Approval",

      rating: 0,
      totalReviews: 0,
      totalDeliveries: 0,

      ownerName: form.ownerName.value,
      ownerEmail: form.ownerEmail.value,
      ownerPhoto: form.ownerPhoto.value,

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    console.log(bookData);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    form.reset();
  };

  // Shared responsive input class for premium dark themes
  const inputStyle = "w-full bg-[#0f2256]/60 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200";

  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Add Book
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Add a new book. It will stay pending until admin approval.
          </p>
        </div>

        {/* Glassmorphic Form Wrapper */}
        <form
          onSubmit={handleAddBook}
          className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800/80 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Book Title</label>
            <input name="title" placeholder="e.g. Atomic Habits" required className={inputStyle} />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Author</label>
            <input name="author" placeholder="e.g. James Clear" required className={inputStyle} />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Category</label>
            <input name="category" placeholder="e.g. Self-Help" required className={inputStyle} />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Publisher</label>
            <input name="publisher" placeholder="e.g. Penguin Books" required className={inputStyle} />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Language</label>
            <input name="language" placeholder="e.g. English" required className={inputStyle} />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">ISBN</label>
            <input name="isbn" placeholder="e.g. 9780735211292" required className={inputStyle} />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Pages</label>
            <input name="pages" type="number" placeholder="320" required className={inputStyle} />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Delivery Fee ($)</label>
            <input name="deliveryFee" type="number" placeholder="5" required className={inputStyle} />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Book Image URL</label>
            <input name="image" placeholder="https://images.unsplash.com/..." required className={inputStyle} />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Description</label>
            <textarea
              name="description"
              placeholder="Provide a brief summary or notes about the book's condition..."
              required
              rows="4"
              className={`${inputStyle} resize-none`}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Owner Name</label>
            <input name="ownerName" placeholder="Your Name" required className={inputStyle} />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Owner Email</label>
            <input name="ownerEmail" type="email" placeholder="you@example.com" required className={inputStyle} />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">Owner Photo URL</label>
            <input name="ownerPhoto" placeholder="https://images.unsplash.com/avatar..." className={inputStyle} />
          </div>

          {/* Action Submission Button */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 mt-4 inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed border border-blue-500/20 hover:border-blue-400/30 transition-all duration-200 shadow-lg shadow-blue-950/40"
          >
            <UploadCloud size={18} className={loading ? "animate-bounce" : ""} />
            {loading ? "Submitting Request..." : "Submit Book for Approval"}
          </button>
        </form>

      </section>
    </div>
  );
}