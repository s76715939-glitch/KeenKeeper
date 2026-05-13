import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ f }) => {
  const { id, name, picture, days_since_contact, tags, status } = f;
  return (
    <Link
      href={`./friend/${id}`}
      className="bg-white rounded-lg border border-gray-100 shadow-sm py-8 flex flex-col items-center justify-center min-h-40"
    >
      <Image
        src={picture}
        width={60}
        height={60}
        alt={name}
        className="rounded-full"
      />
      <h3 className="text-[#1F2937] text-xl font-semibold">{name}</h3>
      <p className="text-[#64748B] text-sm py-1.5">{days_since_contact}d ago</p>
      <div className="flex items-center justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[#244d3f] bg-[#CBFADB] text-sm py-0.5 px-2 uppercase rounded-full font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`text-white text-sm ${status === "overdue" ? "bg-[#EF4444]" : status === "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"}  px-2 py-1 rounded-full mt-1.5 capitalize`}
      >
        {status}
      </span>
    </Link>
  );
};

export default FriendCard;
