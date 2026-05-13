"use client";
import { useEffect, useState } from "react";
import FriendCard from "../FriendCard/FriendCard";
import Loading from "../Loading/Loading";
const FriendsSection = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("/FriendsData.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="container mx-auto p-10">
      <h3 className="text-[#1F2937] text-2xl font-semibold py-2.5">
        Your Friends
      </h3>
      {friends.length === 0 && <Loading />}
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {friends.map((f) => (
          <FriendCard key={f.id} f={f} />
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;
