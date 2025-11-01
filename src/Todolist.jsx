import React, { useState } from "react";

export default function Todolist() {
  const [todolist, setTodolist] = useState([]);

  const ListData = (e) => {
    e.preventDefault();
    const nameData = e.target.List.value.trim();
    if (!nameData) return alert("Please enter a task.");

    if (!todolist.includes(nameData)) {
      setTodolist([...todolist, nameData]);
      e.target.reset();
    } else {
      alert("Item already in the list");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-6 md:p-10">
      {/* Main Glass Card */}
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] xl:w-[30%] bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-6 sm:p-8 transition-transform hover:scale-[1.02] duration-300">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-6 drop-shadow-md">
          ✨ My To-Do List
        </h1>

        {/* Input Form */}
        <form
          onSubmit={ListData}
          className="flex flex-col sm:flex-row gap-3 mb-6 bg-white/20 p-2 rounded-2xl backdrop-blur-md border border-white/40"
        >
          <input
            name="List"
            type="text"
            placeholder="Add a new task..."
            className="flex-1 bg-transparent text-white placeholder-white/80 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 text-base sm:text-lg"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-xl font-semibold text-white shadow-md transition-all duration-200 active:scale-95"
          >
            Add
          </button>
        </form>

        {/* Task List */}
        <div className="max-h-80 overflow-y-auto space-y-3 custom-scrollbar pr-1">
          {todolist.length === 0 ? (
            <p className="text-center text-white/80 italic text-sm sm:text-base">
              No tasks yet. Add one above 👆
            </p>
          ) : (
            <ul className="space-y-3">
              {todolist.map((value, index) => (
                <Todolistitems
                  key={index}
                  value={value}
                  indexno={index}
                  todolist={todolist}
                  setTodolist={setTodolist}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {/*  */}
      </div>
    </div>
  );
}

function Todolistitems({ value, indexno, todolist, setTodolist }) {
  const [task, setTask] = useState(false);

  const DeleteTask = (e) => {
    e.stopPropagation();
    const finalList = todolist.filter((_, i) => i !== indexno);
    setTodolist(finalList);
  };

  const markstask = () => {
    setTask(!task);
  };

  return (
    <li
      onClick={markstask}
      className={`flex justify-between items-center px-4 py-3 rounded-xl cursor-pointer shadow-md transition-all duration-200 ${
        task
          ? "bg-green-400/30 line-through text-gray-200"
          : "bg-white/30 text-white hover:bg-white/40"
      }`}
    >
      <span className="font-medium text-sm sm:text-base">{value}</span>
      <span
        onClick={DeleteTask}
        className="text-red-300 hover:text-red-500 font-bold text-xl sm:text-2xl transition-colors"
      >
        &times;
      </span>
    </li>
  );
}
