import { FaPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="container mx-auto text-center mt-20">
      <h1 className="text-[#1F2937] text-5xl font-semibold mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-[#64748b] mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium cursor-pointer bg-[#244D3F] text-white mx-auto">
        <FaPlus /> Add Friend
      </button>
      {/* Header Card Section */}
      <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full border-b">
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
    </header>
  );
};

export default Header;
