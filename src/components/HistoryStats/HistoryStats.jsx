"use client";
import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const COLORS = {
  text: "#8b46ff",
  call: "#2b5242",
  video: "#3ca860",
};

const formatType = (t) => (typeof t === "string" ? t.trim().toLowerCase() : "");

const HistoryStats = ({ data = [], title = "Friendship Analytics" }) => {
  const chartData = useMemo(() => {
    const counts = { text: 0, call: 0, video: 0 };
    
    data.forEach((item) => {
      const t = formatType(item.type);
      if (t === "text") counts.text += 1;
      else if (t === "call") counts.call += 1;
      else if (t === "video") counts.video += 1;
    });

    return [
      { name: "Text", value: counts.text, key: "text", color: COLORS.text },
      { name: "Call", value: counts.call, key: "call", color: COLORS.call },
      { name: "Video", value: counts.video, key: "video", color: COLORS.video },
    ].filter(item => item.value > 0); 
  }, [data]);

  return (
    <div className="container mx-auto p-4">
      
      <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50/50 p-6 md:p-8">
        <h1 className="text-[26px] font-bold text-[#1f2937] mb-3 tracking-tight">
          {title}
        </h1>
        
        <h2 className="text-[15px] font-semibold text-[#2b5242] mb-8">
          By Interaction Type
        </h2>

        {chartData.length > 0 ? (
          <div className="flex flex-col items-center">
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="70%" 
                    outerRadius="90%"
                    paddingAngle={8}  
                    cornerRadius={40} 
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                    isAnimationActive={true}
                  >
                    {chartData.map((entry) => (
                      <Cell key={entry.key} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [value, name]}
                    contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
              {chartData.map((d) => (
                <div key={d.key} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: d.color }}
                  />
                  <span className="text-sm text-slate-500 font-medium">
                    {d.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 text-gray-400">
            No interaction data available
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryStats;