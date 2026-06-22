"use client";

const deliveries = [
  {
    id: 1,
    book: "Atomic Habits",
    fee: "$5",
    date: "2025-06-10",
    status: "Pending",
  },
  {
    id: 2,
    book: "Deep Work",
    fee: "$7",
    date: "2025-06-08",
    status: "Dispatched",
  },
  {
    id: 3,
    book: "The Psychology of Money",
    fee: "$6",
    date: "2025-06-05",
    status: "Delivered",
  },
];

export default function DeliveryHistoryPage() {
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
            Delivery History
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            View all your delivery requests and track their status.
          </p>
        </div>

        {/* Glassmorphic Table Container */}
        <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#0f2256] border-b border-slate-800 text-slate-300 text-sm font-semibold tracking-wider uppercase">
                <tr>
                  <th className="py-4 px-6">Book Title</th>
                  <th className="py-4 px-6">Delivery Fee</th>
                  <th className="py-4 px-6">Request Date</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {deliveries.map((delivery) => (
                  <tr 
                    key={delivery.id}
                    className="hover:bg-slate-800/30 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 font-medium text-white max-w-xs md:max-w-md truncate">
                      {delivery.book}
                    </td>

                    <td className="py-4 px-6 text-slate-300 font-semibold">
                      {delivery.fee}
                    </td>

                    <td className="py-4 px-6 text-slate-400 text-sm">
                      {delivery.date}
                    </td>

                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${getStatusColor(
                          delivery.status
                        )}`}
                      >
                        {delivery.status}
                      </span>
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