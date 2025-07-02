import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

<Helmet>
  <title>SVPCET College Management System</title>
  <meta name="description" content="Manage academics, attendance, and student-teacher communication with SVPCET SRI VENKATESA PERUMAL COLLEGE OF ENGINEERING AND TECHNOLOGY CMS." />
  <meta name="keywords" content="college management system, student portal, SVPCET, attendance, dashboard, education" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://svpcet.onrender.com" />
</Helmet>


function Home() {
    const navigate = useNavigate();

  return (
    <div className="container mx-auto font-mono box-border shadow-sm bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Logo */}
      <div className="container mx-auto shadow-sm flex flex-row justify-center py-2">
          <img className="" src="/assets/tag.png" alt="Tag" />
        </div>

      {/* Hero Section */}
      <section className="bg-blue-400 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sans text-blue-950 text-4xl sm:text-5xl font-bold mb-4">
            SRI VENKATESA PERUMAL COLLEGE OF ENGINEERING AND TECHNOLOGY
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-2xl mx-auto">
            Empowering Students and Faculty with a Centralized Academic Portal
            for Seamless Daily Operations.
          </p>
          <div className="mt-8">
            <button className="bg-white text-blue-600 cursor-pointer font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition" onClick={()=>navigate('/login')}>
              Proceed to Login
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-10">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              Unified Login System
            </h3>
            <p>
              Single login for Students, Faculty, and Admin with role-based
              redirection and access control.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-green-500">
              Student Tools
            </h3>
            <p>
              View schedules, track attendance, and access learning resources in
              real-time.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-500">
              Faculty Portal
            </h3>
            <p>
              Manage classes, enter grades, and communicate with students
              efficiently.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-red-500">
              Admin Dashboard
            </h3>
            <p>
              Control branch and course data, manage users, and oversee the
              system centrally.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">
              Branch-wise Control
            </h3>
            <p>
              Support for multiple branches and courses, with secure data
              segregation.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-500">
              Responsive Design
            </h3>
            <p>
              Access the platform smoothly across mobile, tablet, and desktop
              devices.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-400 text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-bold mb-3">SVPCET</h4>
            <p className="text-sm">
              SRI VENKATESA PERUMAL COLLEGE OF ENGINEERING AND TECHNOLOGY is
              committed to academic excellence and digital innovation.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:underline hover:cursor-pointer" onClick={()=>navigate('/login')}>
                  Login
                </a>
              </li>
              <li>
                <a href="https://svpcet.org" className="hover:underline hover:cursor-pointer">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">Contact</h4>
            <p className="text-sm">
              📍 SVPCET College RVS NAGAR,K.N Road,Puttur. Chittoor District
            </p>
            <p className="text-sm">📞 +91-9390505457</p>
            <p className="text-sm">✉️ principle@svpcet.org</p>
          </div>
        </div>
        <div className="text-center py-4 bg-blue-500 text-xs">
          © 2025 SVPCET - All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
