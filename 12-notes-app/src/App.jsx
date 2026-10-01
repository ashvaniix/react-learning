import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, detail });

    setTask(copyTask);
    console.log(task);

    setTitle("");
    setDetail("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen overflow-hidden lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-5 p-10 items-start lg:w-1/2"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Task Heading"
          className="border-2 rounded px-10 py-5 w-full font-medium outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter Task details"
          className="border-2 rounded px-5 py-2 w-full font-medium items-start top-left h-32 flex-row outline-none"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button className="bg-white active:scale-99 text-black px-5 py-3 w-full rounded text-lg">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 py-10 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="bg-cover relative bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqZ01uoXPI3y9NC067TqbFNULUd5zLipWUY5bO5y-BQ&s')] px-5 py-8 text-black h-52 w-46 rounded flex justify-between flex-col"
              >
                <div>
                  <h3 className="leading-tight text-2xl  font-bold">
                    {elem.title}
                  </h3>
                  <p className="text-gray-800 leading-tight ">{elem.detail}</p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="bg-amber-800 px-6 py-1 rounded text-white w-full mt-5"
                >
                  Delte
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
