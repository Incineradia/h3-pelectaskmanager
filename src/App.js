import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "./features/taskSlice";
import Card from "./components/Card";

function App() {
  const [items, setItems] = useState("");
  const taskvalues = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();


  return (
    <div className="container mx-auto p-4 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold text-center mt-10">(barely) a task manager or whatever the hell</h1>
      <input
        type="text"
        value={items}
        onChange={(e) => setItems(e.target.value)}
        className="border-2 border-gray-300 bg-sky-50 rounded-full mx-0.5 px-4 my-5"
        placeholder="Enter a new task..."
      />
      <button className="px-4 py-2 mx-0.5 bg-green-600 text-white rounded-full hover:bg-amber-500 shadow-md" onClick={() => dispatch(addTask(items))}>
        Add Task
      </button>
      {taskvalues.map((currentItem, index) => (
        <Card key={currentItem.id} num={index + 1} task={currentItem} id={currentItem.id} />
      ))}
    </div>
  );
}
  
export default App;
