"use client";

const deliveries = [
  {
    id: 1,
    clientName: "Bruce Wayne",
    bookTitle: "Sense and Sensibility",
    date: "2026-06-15",
    status: "Pending",
  },
  {
    id: 2,
    clientName: "Diana Prince",
    bookTitle: "Atomic Habits",
    date: "2026-06-16",
    status: "Dispatched",
  },
  {
    id: 3,
    clientName: "Barry Allen",
    bookTitle: "Deep Work",
    date: "2026-06-18",
    status: "Delivered",
  },
];

export default function ManageDeliveriesPage() {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
      case "Dispatched":
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
      case "Delivered":
        return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border border-slate-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Manage Deliveries
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Update delivery status from pending to delivered.
          </p>
        </div>

        {/* Glassmorphic Table Container */}
        <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#0f2256] border-b border-slate-800 text-slate-300 text-sm font-semibold tracking-wider uppercase">
                <tr>
                  <th className="py-4 px-6">Client Name</th>
                  <th className="py-4 px-6">Book Title</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Current Status</th>
                  <th className="py-4 px-6">Update Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {deliveries.map((item) => (
                  <tr 
                    key={item.id}
                    className="hover:bg-slate-800/20 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 font-semibold text-white">{item.clientName}</td>
                    <td className="py-4 px-6 text-slate-300 max-w-xs truncate">{item.bookTitle}</td>
                    <td className="py-4 px-6 text-slate-400 text-sm">{item.date}</td>

                    {/* Current Status Badge Row */}
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>

                    {/* Styled Interactive Selection Dropdown */}
                    <td className="py-4 px-6">
                      <select
                        defaultValue={item.status}
                        className="bg-[#0f2256]/80 border border-slate-700 text-slate-200 rounded-xl px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                      >
                        <option value="Pending" className="bg-[#0f172a] text-slate-200">Pending</option>
                        <option value="Dispatched" className="bg-[#0f172a] text-slate-200">Dispatched</option>
                        <option value="Delivered" className="bg-[#0f172a] text-slate-200">Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>
    </div>
  );
}