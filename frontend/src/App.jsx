import { useState } from "react";
import CustomerForm from "./components/CustomerForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-300 flex flex-col ${
        darkMode
          ? "dark bg-gray-950 text-white"
          : "bg-gray-50 text-black"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onLogoClick={() => setShowForm(false)} />
      
      {!showForm ? (
        <LandingPage onGetStarted={() => setShowForm(true)} darkMode={darkMode} />
      ) : (
        <div className="flex-grow max-w-7xl mx-auto p-4 sm:p-8 w-full animate-in fade-in slide-in-from-bottom-8 duration-500">
          <button 
            onClick={() => setShowForm(false)}
            className="mb-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </button>
          <CustomerForm darkMode={darkMode} />
        </div>
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;