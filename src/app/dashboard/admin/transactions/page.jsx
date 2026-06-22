"use client";

const transactions = [
  {
    id: "TXN-1001",
    userEmail: "reader@example.com",
    librarianEmail: "librarian@example.com",
    amount: 50,
    date: "2026-06-12",
  },
  {
    id: "TXN-1002",
    userEmail: "john@example.com",
    librarianEmail: "clark@example.com",
    amount: 75,
    date: "2026-06-15",
  },
];

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-[#041032] text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="relative pb-2 border-b border-slate-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Transactions
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            View all payment transactions across the platform.
          </p>
        </div>

        {/* Glassmorphic Transactions Table Container */}
        <div className="bg-[#0a1941]/60 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#0f2256] border-b border-slate-800 text-slate-300 text-sm font-semibold tracking-wider uppercase">
                <tr>
                  <th className="py-4 px-6">Transaction ID</th>
                  <th className="py-4 px-6">User Email</th>
                  <th className="py-4 px-6">Librarian Email</th>
                  <th className="py-4 px-6">Amount</th>
                  <th className="py-4 px-6">Date</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {transactions.map((item) => (
                  <tr 
                    key={item.id}
                    className="hover:bg-slate-800/20 transition-colors duration-200"
                  >
                    {/* Transaction ID */}
                    <td className="py-4 px-6 font-mono font-bold text-white tracking-wide">
                      {item.id}
                    </td>

                    <td className="py-4 px-6 text-slate-300">{item.userEmail}</td>
                    
                    <td className="py-4 px-6 text-slate-300">{item.librarianEmail}</td>

                    {/* Amount highlighted in emerald tint */}
                    <td className="py-4 px-6 font-semibold text-emerald-400">
                      ৳{item.amount}
                    </td>

                    <td className="py-4 px-6 text-slate-400 text-sm">{item.date}</td>
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