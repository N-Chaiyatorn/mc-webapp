import React from "react";

function AlarmItem({ alarm }) {
  const { date, id, name, message, criticality, status } = alarm;

  return (
    <div className="flex justify-between py-6">
      <div className="basis-1/6">{date}</div>
      <div className="basis-1/6">{id}</div>
      <div className="basis-1/6">{name}</div>
      <div className="basis-1/6">{message}</div>
      <div className="basis-1/6">{criticality}</div>
      <div className="basis-1/6">{status}</div>
    </div>
  );
}

export default AlarmItem;
