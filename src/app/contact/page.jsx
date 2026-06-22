"use client";

import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend placeholder logic for ticket submission
  };

  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-12 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <section className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Get In Touch
          </span>
          <h1 className="text-4xl font-black tracking-tight text-white">
            Connect with Support
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Have questions about your book deliveries, platform roles, or Stripe verification ledger updates? Drop us a line.
          </p>
        </div>

        {/* Contact Body Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Informational Cards (2/5 Column space) */}
          <div className="lg:col-span-2 space-y-4">
            
            <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 shadow-xl flex gap-4 items-center">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
                <p className="text-sm font-semibold text-white truncate">support@bibliodrop.com</p>
              </div>
            </div>

            <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 shadow-xl flex gap-4 items-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Clock size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Response Matrix</p>
                <p className="text-sm font-semibold text-white">24/7 Monitored Queue (Avg. 2h response)</p>
              </div>
            </div>

            <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 shadow-xl flex gap-4 items-center">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Network HQ</p>
                <p className="text-sm font-semibold text-white">Dhaka Division, Bangladesh</p>
              </div>
            </div>

          </div>

          {/* Contact Support Form (3/5 Column space) */}
          <div className="lg:col-span-3 bg-[#0a1941]/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800/80 shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-6">Submit Platform Support Ticket</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    required
                    className="w-full bg-[#0f2256]/60 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="johndoe@example.com" 
                    required
                    className="w-full bg-[#0f2256]/60 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Account Role Scope</label>
                <select className="w-full bg-[#0f2256]/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer">
                  <option value="user" className="bg-[#0f172a]">Reader / End User</option>
                  <option value="librarian" className="bg-[#0f172a]">Librarian / Book Owner</option>
                  <option value="general" className="bg-[#0f172a]">General Visitor Query</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Inquiry Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Describe your delivery tracking issue or book status verification query..."
                  required
                  className="w-full bg-[#0f2256]/60 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-blue-950/50 group"
              >
                <span>Dispatch Ticket</span>
                <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>

            </form>
          </div>

        </div>

      </section>
    </div>
  );
}