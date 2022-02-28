import useFetch from "@/hooks/useFetch";
import React from "react";
import AlarmItem from "./AlarmItem";

interface AlarmItem {
  date: string;
  id: number;
  name: string;
  message: string;
  criticality: string;
  status: string;
}

function AlarmsTable() {
  const { data: alarms } = useFetch<AlarmItem[]>("http://localhost:3165/alarms");
  
  return (
    <div className="flex flex-col py-8 px-20 bg-cyan-800 text-">
      <div className="flex items-center">
        <div className="basis-1/6">Date</div>
        <div className="basis-1/6">ID</div>
        <div className="basis-1/6">Name</div>
        <div className="basis-1/6">Message</div>
        <div className="basis-1/6">Criticality</div>
        <div className="basis-1/6">Status</div>
      </div>

      {alarms && alarms.map((alarm) => (
        <AlarmItem alarm={alarm} key={alarm.id} />
      ))}
    </div>
  );
}

export default AlarmsTable;
