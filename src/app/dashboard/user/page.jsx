"use client";

import {
  BookOpen,
  Clock,
  DollarSign,
  PackageCheck,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    title: "Total Books Read",
    value: 12,
    icon: BookOpen,
    iconBg: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Pending Deliveries",
    value: 3,
    icon: Clock,
    iconBg: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Total Spent",
    value: "$84",
    icon: DollarSign,
    iconBg: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Delivered Books",
    value: 9,
    icon: PackageCheck,
    iconBg: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
];

const chartData = [
  { month: "Jan", books: 2 },
  { month: "Feb", books: 4 },
  { month: "Mar", books: 3 },
  { month: "Apr", books: 6 },
  { month: "May", books: 5 },
];

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white bg-clip-text">
            User Dashboard
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Track your books, deliveries, reading list, and reviews.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">
                      {stat.title}
                    </p>
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                      {stat.value}
                    </h2>
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.iconBg} flex items-center justify-center border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={stat.iconColor} size={22} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart Section */}
        <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">
              Monthly Reading Progress
            </h2>
            <p className="text-xs text-slate-400 mt-1">Visual breakdown of your reading consistency</p>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBooks" x1="0" y1="0" x2="0" y2="1">
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
                  dataKey="books" 
                  fill="url(#colorBooks)" 
                  radius={[6, 6, 0, 0]} 
                  maxBarSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}