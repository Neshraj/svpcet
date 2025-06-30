import { useState } from "react";
import TodayClasses from "./TodayClasses";

function StudentDashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { icon: "/assets/logos/dashboard.svg", label: "Dashboard" },
    { icon: "/assets/logos/accademics.svg", label: "Accademics" },
    { icon: "/assets/logos/timetable.svg", label: "Time Table" },
    { icon: "/assets/logos/attandense.svg", label: "Attandance" },
    { icon: "/assets/logos/profile2.svg", label: "Profile" },
    { icon: "/assets/logos/logout.svg", label: "Logout" },
  ];

  return (
    <>
      <div className="font-mono">
        {/* Head */}
        <div className="container mx-auto p-3 flex flex-row justify-between items-center shadow-sm">
          <img
            className={`w-6 h-6 transition-transform duration-300 cursor-pointer ${
              !isOpen ? "rotate-360" : ""
            }`}
            src="/assets/logos/menu.svg"
            alt="Menu"
            onClick={() => setIsOpen(!isOpen)}
          />
          <p className="font-thin text-sm">Student Dashboard</p>
        </div>

        {/* Main Body */}

        <div className="container mx-auto flex flex-row mt-2">
          {/* Side Bar */}
          <div>
            <ul
              className={`list-none overflow-hidden transition-all duration-400 ease-in-out 
    ${isOpen ? "w-0 opacity-0" : "w-33 opacity-100"} md:pl-0`}
            >
              {items.map((item, index) => (
                <li
                  className={`flex flex-row justify-star items-center rounded-md ml-2 py-2 mb-5 mr-3 overflow-hidden transition-all duration-100 ease-in-out hover:underline hover:bg-gray-100 hover:cursor-pointer ${
                    activeIndex === index ? "bg-gray-200" : ""
                  }`}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  <img className="w-5 h-5" src={item.icon} alt={item.label} />
                  <p className="text-sm font-thin whitespace-nowrap pl-1">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard Body */}
          <div className="container mx-auto">
            <TodayClasses />
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
