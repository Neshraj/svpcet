import { useState } from "react";

function Sidebar() {
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
      <div>
        <ul
          className={`list-none overflow-hidden transition-all duration-400 ease-in-out 
    ${isOpen ? "w-0 opacity-0" : "w-30 opacity-100"}`}
        >
          {items.map((item, index) => (
            <li
              className={`flex flex-row justify-star items-center rounded-md pr-7 py-2 mb-5 mr-3 overflow-hidden transition-all duration-100 ease-in-out hover:underline hover:bg-gray-100 hover:cursor-pointer ${
                activeIndex === index ? "bg-gray-300" : ""
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
    </>
  );
}

export default Sidebar;
