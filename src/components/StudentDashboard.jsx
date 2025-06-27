import { useState } from "react";

function StudentDashboard() {
  const [activeIndex, setActiveIndex] = useState(null);

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
      <div className="container mx-auto font-mono">
        {/* Head Section */}
        <div className="flex-row justify-between items-center px-3 py-3 shadow-sm rounded-md hidden md:flex">
          <div className="flex flex-row items-center gap-3">
            <img
              className="h-10 w-10"
              src="/assets/logos/profile.svg"
              alt="Profile"
            />
            <p className="font-thin">Student Name</p>
          </div>

          <div>
            <p className="font-thin text-shadow-sm">Student Dashboard</p>
          </div>
        </div>

        {/* Head Section */}

        {/* <div className="flex flex-row items-center shadow-sm py-3 pl-5">
          <p className="text-2xl font-thin text-shadow-sm">Student Dashboard</p>
        </div> */}

        {/* Side Bar */}
        <div className="flex flex-col mt-3 shadow-sm md:shadow-none md:max-w-50">
          <ul className="container mx-auto flex flex-row justify-between w-screen md:flex-col">
            {/* <div className="flex flex-row items-center justify-centet gap-2 md:hidden">
              <img
                className="h-10 w-10"
                src="/assets/logos/profile.svg"
                alt="Profile"
              />
              <p className="font-thin text-sm">Student Name</p>
            </div> */}
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`mb-2 text-start font-thin text-md flex flex-row justify-items-start items-center gap-3 p-2 rounded-md cursor-pointer w-10 overflow-hidden transition-all duration-200 whitespace-nowrap hover:shadow-sm hover:w-40 ${
                  activeIndex === index
                    ? "bg-gray-300"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <img className="w-6 h-6" src={item.icon} alt={item.label} />
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
