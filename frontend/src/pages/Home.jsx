import { useState } from "react";
import Navbar from "../components/Navbar";
import CustomerForm from "../components/CustomerForm";
import Footer from "../components/Footer";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer"
            >
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>

        <CustomerForm darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default Home;