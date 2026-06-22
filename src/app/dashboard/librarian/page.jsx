"use client";

import {
  BookOpen,
  DollarSign,
  Clock3,
  Package,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const stats = [
  {
    title: "Total Books Listed",
    value: 56,
    icon: BookOpen,
    iconBg: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Total Earnings",
    value: "$1,250",
    icon: DollarSign,
    iconBg: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Pending Requests",
    value: 18,
    icon: Clock3,
    iconBg: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Delivered Books",
    value: 146,
    icon: Package,
    iconBg: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
];

const monthlyData = [
  { month: "Jan", deliveries: 15 },
  { month: "Feb", deliveries: 22 },
  { month: "Mar", deliveries: 30 },
  { month: "Apr", deliveries: 25 },
  { month: "May", deliveries: 42 },
];

const popularBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    requests: 45,
  },
  {
    id: 2,
    title: "Deep Work",
    requests: 39,
  },
  {
    id: 3,
    title: "The Psychology of Money",
    requests: 31,
  },
];

export default function LibrarianDashboard() {
  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Librarian Dashboard
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Manage your inventory, deliveries, and earnings.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700/80 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">
                      {item.title}
                    </p>
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                      {item.value}
                    </h2>
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={item.iconColor} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart Container */}
        <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800/80 shadow-xl">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">
              Monthly Deliveries
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Performance snapshot of current year fulfillments
            </p>
          </div>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="librarianChartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  stroke="#64748b" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#64748b" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                />
                <Bar
                  dataKey="deliveries"
                  fill="url(#librarianChartGradient)"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Popular Books Section */}
        <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800/80 shadow-xl">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">
              Most Requested Books
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Top titles missing from shelves right now
            </p>
          </div>

          <div className="space-y-1">
            {popularBooks.map((book) => (
              <div
                key={book.id}
                className="flex justify-between items-center py-4 border-b border-slate-800/60 last:border-0 hover:bg-slate-800/20 px-2 rounded-xl transition-colors duration-200"
              >
                <h3 className="font-medium text-slate-200">
                  {book.title}
                </h3>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm">
                  {book.requests} Requests
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}