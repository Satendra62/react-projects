import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const addValue = () => setCount(count + 1);

  const removeValue = () => {
    if (count === 0) {
      alert(`You can't decrease the number more than ${count}`);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div
      className={`flex flex-col min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <section
          className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl text-center transition-all duration-300 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-600">
            {count}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={addValue}
              className={`w-full sm:w-auto py-2 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ${
                darkMode
                  ? "bg-blue-700 hover:bg-blue-600 text-white"
                  : "bg-blue-500 hover:bg-blue-700 text-white"
              }`}
            >
              Increase
            </button>
            <button
              onClick={removeValue}
              className={`w-full sm:w-auto py-2 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ${
                darkMode
                  ? "bg-red-700 hover:bg-red-600 text-white"
                  : "bg-red-500 hover:bg-red-700 text-white"
              }`}
            >
              Decrease
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
