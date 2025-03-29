import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [darkMode, setDarkMode] = useState(false); // Dark mode state

  const addValue = () => {
    setCount(count + 1);
  };

  const removeValue = () => {
    if (count === 0) {
      alert(`You can't decrease the number more than ${count}`);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div
        className={`flex flex-col items-center justify-center min-h-[84vh] px-4 sm:px-6 lg:px-8 transition-all ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div
          className={`p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg text-center transition-all max-w-sm sm:max-w-md md:max-w-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-600">{count}</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={addValue}
              className={`py-2 px-4 rounded-lg shadow-md transition-all text-lg sm:text-xl md:text-2xl ${
                darkMode
                  ? "bg-blue-700 hover:bg-blue-600 text-white"
                  : "bg-blue-500 hover:bg-blue-700 text-white"
              }`}
            >
              Increase
            </button>
            <button
              onClick={removeValue}
              className={`py-2 px-4 rounded-lg shadow-md transition-all text-lg sm:text-xl md:text-2xl ${
                darkMode
                  ? "bg-red-700 hover:bg-red-600 text-white"
                  : "bg-red-500 hover:bg-red-700 text-white"
              }`}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
