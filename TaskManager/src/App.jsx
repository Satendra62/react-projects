import React, { Fragment, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInputValue, setTaskInputValue] = useState("");
  const [taskDescInputValue, setTaskDescInputValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleRemove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`min-h-screen w-screen flex flex-col transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex-grow flex flex-col items-center p-4 md:p-6 lg:p-8">
        <div className="task-box w-full max-w-2xl p-5 rounded-lg flex flex-col items-center gap-6 border border-gray-300 mt-5 bg-box shadow-lg">
          <div className="w-full flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col gap-4 font-bold w-full md:w-1/3">
              <label className="p-2" htmlFor="taskInput">Task</label>
              <input
                className="border-2 border-gray-800 focus:border-green-500 focus:shadow-lg focus:shadow-green-300 outline-none transition duration-300 p-2 rounded-md text-lg bg-input w-full"
                type="text"
                id="taskInput"
                value={taskInputValue}
                onChange={(e) => setTaskInputValue(e.target.value)}
                placeholder="Enter task"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4 font-bold">
              <label className="p-2" htmlFor="taskDescription">Task Description</label>
              <input
                className="border-2 border-gray-800 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-300 outline-none transition duration-300 p-2 rounded-md text-lg bg-input w-full"
                type="text"
                id="taskDescription"
                value={taskDescInputValue}
                onChange={(e) => setTaskDescInputValue(e.target.value)}
                placeholder="Enter task description"
              />
            </div>
          </div>
          <button
            className="border-2 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300 w-full md:w-auto"
            onClick={() => {
              if (taskInputValue.trim() !== "") {
                setTasks([...tasks, { task: taskInputValue, description: taskDescInputValue }]);
                setTaskInputValue("");
                setTaskDescInputValue("");
              }
            }}
          >
            Add New Task
          </button>
        </div>

        <div className="w-full max-w-2xl mx-auto mt-5 flex flex-col gap-4">
          {tasks.map((element, index) => (
            <Fragment key={index}>
              <div className="flex flex-col bg-task p-4 rounded-lg shadow-md border border-gray-300">
                <span className="font-bold text-lg">Task {index + 1}</span>
                <span><span className="font-bold">Task:</span> {element.task}</span>
                <span><span className="font-bold">Description:</span> {element.description}</span>
                <button
                  className="mt-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300 w-full md:w-auto"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;