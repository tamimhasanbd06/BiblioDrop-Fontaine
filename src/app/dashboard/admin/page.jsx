"use client";

import {
  Users,
  BookOpen,
  Truck,
  DollarSign,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const stats = [
  {
    title: "Total Users",
    value: 1250,
    icon: Users,
    iconBg: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Total Books",
    value: 856,
    icon: BookOpen,
    iconBg: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-400",
  },
  {
    title: "Total Deliveries",
    value: 3241,
    icon: Truck,
    iconBg: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Total Revenue",
    value: "৳125,000",
    icon: DollarSign,
    iconBg: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
];

const categoryData = [
  { name: "Romance", value: 120 },
  { name: "Academic", value: 80 },
  { name: "Fiction", value: 150 },
  { name: "Sci-Fi", value: 60 },
];

// Refined theme color tokens for clear canvas presentation
const COLORS = [
  "#3b82f6", // Vibrant Blue
  "#10b981", // Emerald Green
  "#6366f1", // Indigo
  "#f59e0b", // Amber Gold
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Admin Dashboard
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Monitor platform activities and analytics.
          </p>
        </div>

        {/* Operational Stats Grid */}
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
                      {typeof item.value === "number" ? item.value.toLocaleString() : item.value}
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

        {/* Recharts Pie Layout Container */}
        <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800/80 shadow-xl">
          <div className="mb-2">
            <h2 className="text-xl font-bold text-white">
              Books By Category
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Live global inventory volume breakdown
            </p>
          </div>

          <div className="h-[400px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  innerRadius={80} // Converted to modern Donut view variant
                  paddingAngle={4}
                  dataKey="value"
                  stroke="#0a1941"
                  strokeWidth={3}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={{ stroke: '#475569', strokeWidth: 1 }}
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className="focus:outline-none transition-opacity duration-200 hover:opacity-90"
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '13px'
                  }}
                  itemStyle={{ color: '#cbd5e1' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </section>
    </div>
  );
}