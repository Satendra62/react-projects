import React, { Fragment, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

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
      className={`min-h-screen w-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex-grow flex flex-col items-center">
        <div className="task-box w-[70%] p-5 rounded-lg flex flex-col items-center gap-6 border border-gray-300 mt-5 bg-box">
          <div className="w-[100%] flex justify-evenly">
            <span>
              <div className="labels flex flex-col gap-7 font-bold">
                <label className="p-2" htmlFor="taskInput">
                  Task
                </label>
                <label className="p-2" htmlFor="taskDescription">
                  Task Description
                </label>
              </div>
            </span>
            <span className="w-[70%]">
              <div className="inputs flex flex-col gap-5">
                <input
                  className="border-2 border-gray-800 focus:border-green-500 focus:shadow-lg focus:shadow-green-300 outline-none transition duration-300 p-2 rounded-md text-lg bg-input"
                  type="text"
                  id="taskInput"
                  value={taskInputValue}
                  onChange={(e) => setTaskInputValue(e.target.value)}
                  placeholder="Enter task"
                />
                <input
                  className="border-2 border-gray-800 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-300 outline-none transition duration-300 p-2 rounded-md text-lg bg-input"
                  type="text"
                  id="taskDescription"
                  value={taskDescInputValue}
                  onChange={(e) => setTaskDescInputValue(e.target.value)}
                  placeholder="Enter task description"
                />
              </div>
            </span>
          </div>
          <button
            className="border-2 bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            onClick={() => {
              if (taskInputValue.trim() !== "") {
                setTasks([
                  ...tasks,
                  { task: taskInputValue, description: taskDescInputValue },
                ]);
                setTaskInputValue("");
                setTaskDescInputValue("");
              }
            }}
          >
            Add New Task
          </button>
        </div>

        <div className="w-[70%] mx-auto mt-5 flex flex-col gap-4">
          {tasks.map((element, index) => (
            <Fragment key={index}>
              <div className="flex flex-col bg-task p-4 rounded-lg shadow-md">
                <span className="font-bold">Task {index + 1}</span>
                <span>
                  <span className="font-bold">Task:</span> {element.task}
                </span>
                <span>
                  <span className="font-bold">Description:</span>{" "}
                  {element.description}
                </span>
                <button
                  className="mt-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
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
