"use client"
import { AppContext } from "@/api/ContextAPI";
import HistoryStats from "@/components/HistoryStats/HistoryStats";
import { useContext } from "react";
const Stats = () => {
    const { userHistory } = useContext(AppContext);
    return <HistoryStats data={userHistory}/>
};

export default Stats;