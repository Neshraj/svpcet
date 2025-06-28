import React from "react";
import { TimeTable } from "../datas/timetable";

const getToday = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[new Date().getDay()];
};

const parseTime = (timeStr) => {
  const [time, meridian] = timeStr.split(/(AM|PM)/);
  const [hours, minutes] = time.trim().split(":").map(Number);
  let hr = hours % 12;
  if (meridian === "PM") hr += 12;
  const date = new Date();
  date.setHours(hr, minutes, 0, 0);
  return date;
};

const getPeriodStatus = (start, end) => {
  const now = new Date();
  const startTime = parseTime(start);
  const endTime = parseTime(end);

  if (now < startTime) return "Not Started";
  if (now >= startTime && now <= endTime) return "Ongoing";
  return "Completed";
};

function TodayClasses() {
  const today = getToday();

  const todayData = TimeTable.timetable[today];

  if (!todayData) {
    return <p className="p-4 text-lg">No classes today 🎉</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Today's Classes – {today}</h2>
      <table className="w-full border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Subject</th>
          </tr>
        </thead>
        <tbody>
          {TimeTable.periods.map((period, index) => {
            const [start, end] = period.split(" to ");
            const item = todayData[index];
            const subject = item.subject;
            const isCancelled = item.cancelled === true;

            let bgColor = "";
            let status = "";

            if (isCancelled) {
              bgColor = "bg-red-400 text-white";
              status = "Cancelled";
            } else {
              status = getPeriodStatus(start, end);
              if (status === "Completed") bgColor = "bg-green-100";
              else if (status === "Ongoing") bgColor = "bg-yellow-100";
              else if (status === "Not Started") bgColor = "bg-red-100";
            }

            return (
              <tr key={index} className={`${bgColor}`} title={status}>
                <td className="border px-4 py-2">{period}</td>
                <td className="border px-4 py-2">{subject}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TodayClasses;
