"use client";
import { AppContext } from "@/api/ContextAPI";
import Loading from "@/components/Loading/Loading";
import Image from "next/image";
import { use, useContext, useEffect, useState } from "react";
import {
  FiBell,
  FiArchive,
  FiTrash2,
  FiPhone,
  FiMessageSquare,
  FiVideo,
} from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";

const FriendPage = ({ params }) => {
  const { userHistory, setUserHistory } = useContext(AppContext);
  const [friend, setFriend] = useState(null);
  const { id } = use(params);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/FriendsData.json");
      const data = await res.json();
      const f = data.find((item) => item.id.toString() === id);
      setFriend(f);
    };
    loadData();
  }, [id]);
  if (friend === null) {
    return <Loading />;
  }
  if (!friend) {
    return (
      <h2 className="text-2xl text-gray-500 text-center py-20">
        Not Found Friend Data
      </h2>
    );
  }
  const handleHistory = (logData) => {
    const notify = () => toast(`${logData} with ${friend.name}`);
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const logHistory = {
      type: logData,
      person: friend.name,
      date: formattedDate,
    };
    setUserHistory([...userHistory, logHistory]);
    notify();
  };
  return (
    <div className="min-h-screen bg-[#f8f9fc] p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Section: Profile & Actions */}
        <div className="md:col-span-4 flex flex-col gap-1">
          {/* Profile Card */}
          <div className="bg-white border border-[#eaeaea] shadow-[0_2px_10px_rgb(0,0,0,0.03)] rounded-lg p-6 flex flex-col items-center text-center">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={90}
              height={90}
              className="rounded-full object-cover mb-3"
            />
            <h2 className="text-xl font-bold text-[#202124]">{friend.name}</h2>

            {/* Status & Tags (Stacked as in image) */}
            <div className="mt-2 flex flex-col items-center gap-5">
              <span className="bg-[#ef4444] text-white px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase">
                {friend.status === "almost due" ? "Almost Due" : friend.status}
              </span>
              <div className="flex gap-2">
                {friend.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#e6f4ea] text-[#188038] px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[#5f6368] italic text-[14px]">
              &quot;{friend.bio}&quot;
            </p>
            <p className="mt-2 text-[13px] text-[#80868b]">Preferred: email</p>
          </div>

          {/* Action Buttons (Separated cards as in image) */}
          <button className="cursor-pointer bg-white border border-[#eaeaea] shadow-[0_2px_10px_rgb(0,0,0,0.03)] rounded-lg py-3.5 flex items-center justify-center gap-2 text-[14px] font-medium text-[#3c4043] hover:bg-gray-50 transition-colors">
            <FiBell className="text-lg" /> Snooze 2 Weeks
          </button>
          <button className="cursor-pointer bg-white border border-[#eaeaea] shadow-[0_2px_10px_rgb(0,0,0,0.03)] rounded-lg py-3.5 flex items-center justify-center gap-2 text-[14px] font-medium text-[#3c4043] hover:bg-gray-50 transition-colors">
            <FiArchive className="text-lg" /> Archive
          </button>
          <button className="cursor-pointer bg-white border border-[#eaeaea] shadow-[0_2px_10px_rgb(0,0,0,0.03)] rounded-lg py-3.5 flex items-center justify-center gap-2 text-[14px] font-medium text-[#d93025] hover:bg-red-50 transition-colors">
            <FiTrash2 className="text-lg" /> Delete
          </button>
        </div>

        {/* Right Section: Stats & Check-Ins */}
        <div className="md:col-span-8 flex flex-col gap-4">
          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-[#eaeaea] shadow rounded-lg py-7 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-[#264336]">
                {friend.days_since_contact}
              </p>
              <p className="text-[13px] text-[#80868b] mt-2">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white border border-[#eaeaea] shadow rounded-lg py-7 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-[#264336]">{friend.goal}</p>
              <p className="text-[13px] text-[#80868b] mt-2">Goal (Days)</p>
            </div>

            <div className="bg-white border border-[#eaeaea] shadow rounded-lg py-7 flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1">
              <p className="text-3xl font-bold text-[#264336]">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-[13px] text-[#80868b] mt-2">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white border border-[#eaeaea] shadow-[0_2px_10px_rgb(0,0,0,0.03)] rounded-lg p-6 flex items-center justify-between mt-2">
            <div>
              <h3 className="text-[16px] font-semibold text-[#264336]">
                Relationship Goal
              </h3>
              <p className="text-[14px] text-[#5f6368] mt-1.5">
                Connect every{" "}
                <span className="font-bold text-[#202124]">
                  {friend.goal} days
                </span>
              </p>
            </div>
            <button className="cursor-pointer border border-[#dadce0] text-[#3c4043] bg-[#f8f9fa] hover:bg-gray-100 px-4 py-1.5 rounded text-[13px] font-medium transition-colors">
              Edit
            </button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white border border-[#eaeaea] shadow-[0_2px_10px_rgb(0,0,0,0.03)] rounded-lg p-5 mt-2">
            <h3 className="text-[16px] font-semibold text-[#264336] mb-4">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleHistory("Call")}
                className="cursor-pointer border border-[#eaeaea] rounded-lg py-5 flex flex-col items-center justify-center gap-2 hover:bg-[#f8f9fc] transition-colors"
              >
                <FiPhone className="text-[22px] text-[#3c4043]" />
                <span className="text-[14px] text-[#3c4043] font-medium">
                  Call
                </span>
              </button>
              <button
                onClick={() => handleHistory("Text")}
                className="cursor-pointer border border-[#eaeaea] rounded-lg py-5 flex flex-col items-center justify-center gap-2 hover:bg-[#f8f9fc] transition-colors"
              >
                <FiMessageSquare className="text-[22px] text-[#3c4043]" />
                <span className="text-[14px] text-[#3c4043] font-medium">
                  Text
                </span>
              </button>
              <button
                onClick={() => handleHistory("Video")}
                className="cursor-pointer border border-[#eaeaea] rounded-lg py-5 flex flex-col items-center justify-center gap-2 hover:bg-[#f8f9fc] transition-colors"
              >
                <FiVideo className="text-[22px] text-[#3c4043]" />
                <span className="text-[14px] text-[#3c4043] font-medium">
                  Video
                </span>
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendPage;
