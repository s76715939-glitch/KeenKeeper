import FriendsSection from "@/components/FriendsSection/FriendsSection";
import Header from "@/components/Header/Header";
import { Suspense } from "react";
export default function Home() {
  return (
    <div>
      <Header />
        <FriendsSection/>
    </div>
  );
}
