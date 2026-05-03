import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h3></h3>
        <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* <!-- Card 1 --> */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center min-h-40">
            <span className="text-3xl font-bold text-[#064e3b] mb-2">10</span>
            <span className="text-sm font-medium text-slate-500">
              Total Friends
            </span>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center min-h-40">
            <span className="text-3xl font-bold text-[#064e3b] mb-2">3</span>
            <span className="text-sm font-medium text-slate-500">On Track</span>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center min-h-40">
            <span className="text-3xl font-bold text-[#064e3b] mb-2">6</span>
            <span className="text-sm font-medium text-slate-500">
              Need Attention
            </span>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center min-h-40">
            <span className="text-3xl font-bold text-[#064e3b] mb-2">12</span>
            <span className="text-sm font-medium text-slate-500 text-center">
              Interactions This Month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
