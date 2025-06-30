import React from "react";
import { TimeTable } from "../datas/timetable";

const getToday = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  let totalClasses = todayData.length;
  let completedClasses = 0;
  let attendedClasses = 0; // default 0

  return (
    <div className="font-mono p-1">
      <h2 className="text-xl font-bold mb-4">Today's Classes – {today}</h2>

      {/* Color Legend */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <div>
          <span className="min-w-[100px] inline-block whitespace-nowrap rounded-md px-3 py-1 bg-red-100 text-sm text-center shadow-sm">
            Not Started
          </span>
        </div>
        <div>
          <span className="min-w-[100px] inline-block whitespace-nowrap rounded-md px-3 py-1 bg-yellow-100 text-sm text-center shadow-sm">
            Ongoing
          </span>
        </div>
        <div>
          <span className="min-w-[100px] inline-block whitespace-nowrap rounded-md px-3 py-1 bg-green-200 text-sm text-center shadow-sm">
            Completed
          </span>
        </div>
        <div>
          <span className="min-w-[100px] inline-block whitespace-nowrap rounded-md px-3 py-1 bg-red-300 text-sm text-center shadow-sm">
            Cancelled
          </span>
        </div>
      </div>

      {/* Timetable Table */}
      <table className="w-full text-center mb-2 border-separate border-spacing-y-2 border-spacing-x-1">
  <thead>
    <tr className="bg-gray-200 shadow-sm">
      <th className="px-4 py-2 rounded-md">Time</th>
      <th className="px-4 py-2 rounded-md">Subject</th>
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
        bgColor = "bg-red-300";
        status = "Cancelled";
      } else {
        status = getPeriodStatus(start, end);
        if (status === "Completed") {
          bgColor = "bg-green-200";
          completedClasses++;
        } else if (status === "Ongoing") {
          bgColor = "bg-yellow-100";
        } else {
          bgColor = "bg-red-100";
        }
      }

      return (
        <tr
          key={index}
          className={`${bgColor} shadow-sm rounded-md`}
          title={status}
        >
          <td className="px-4 py-2 rounded-l-md">{period}</td>
          <td className="px-4 py-2 rounded-r-md">{subject}</td>
        </tr>
      );
    })}
  </tbody>
</table>


      {/* Dynamic Class Stats */}
      <div className="flex flex-wrap justify-start gap-4 mb-6">
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md shadow-sm">
          <span>Total Classes:</span> {totalClasses}
        </div>
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md shadow-sm">
          <span>Classes Completed:</span> {completedClasses}
        </div>
        <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md shadow-sm">
          <span>Classes Attended:</span> {attendedClasses}
        </div>
      </div>
    </div>
  );
}

export default TodayClasses;
