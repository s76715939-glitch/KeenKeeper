"use client";
import { AppContext } from "@/api/ContextAPI";
import { useContext, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoVideocamOutline, IoCallOutline } from "react-icons/io5";

const Timeline = () => {
  // Filter state, default empty rakha hoyeche jate placeholder ta dekhay
  const [filter, setFilter] = useState("");
  const { userHistory } = useContext(AppContext);
  

  // Dynamic filter logic
  const filteredData = userHistory.filter((item) => {
    if (filter === "" || filter === "all") return true;
    return item.type.toLowerCase() === filter.toLowerCase();
  }).reverse();

  return (
    <div className="w-full p-4">
      <div className="container mx-auto bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50/50 p-6 md:p-8">
        
        {/* Header Section */}
        <h1 className="text-[26px] font-bold text-[#1f2937] mb-6 tracking-tight">
          Timeline
        </h1>

        {/* Filter Dropdown */}
        <div className="relative w-50 mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-[#eaeaea] rounded-lg py-2.5 pl-4 pr-10 text-[14px] text-[#5f6368] shadow-[0_1px_2px_rgba(0,0,0,0.01)] outline-none focus:border-[#d1d5db] cursor-pointer transition-all"
          >
            <option value="" disabled hidden>Filter timeline</option>
            <option value="all">All</option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#80868b] pointer-events-none" />
        </div>

        {/* Timeline List */}
        <div className="flex flex-col gap-3">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#eaeaea] shadow-[0_1px_4px_rgba(0,0,0,0.01)] rounded-lg p-4 flex items-center gap-4 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200"
              >
                {/* Icon Box */}
                <div className="w-10 h-10 flex items-center justify-center">
                  {
                    item.type.toLowerCase() === "text" ? <HiOutlineChatBubbleOvalLeft className="text-[#80868b] text-[22px]" /> :
                    item.type.toLowerCase() === "call" ? <IoCallOutline className="text-[#80868b] text-[22px]" /> : <IoVideocamOutline className="text-[#80868b] text-[22px]" />
                  }
                </div>

                {/* Text Info */}
                <div>
                  <p className="text-[14.5px] tracking-wide text-[#5f6368]">
                    <span className="font-bold text-[#202124]">{item.type}</span>
                    <span> with {item.person}</span>
                  </p>
                  <p className="text-[13px] text-[#80868b] mt-0.5">
                    {item.date}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-[#80868b] text-[14px]">
              No timeline events found.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Timeline;