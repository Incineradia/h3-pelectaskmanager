import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../features/taskSlice";

export default function Card({ num, task, id }) {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const styles = {
    default:
      "border text-lg font-bold border-gray-300 rounded-lg p-4 mb-4 mx-15 my-5 shadow-md bg-sky-50 w-[90%] hover:bg-orange-300 transition-colors",
    confirm:
      "border text-lg border-gray-300 rounded-lg p-4 mb-4 mx-15 my-5 shadow-md bg-red-300 w-[90%] hover:bg-red-400 transition-colors",
  };

  const handleClick = () => {
    if (!state) {
      setState(true);
      console.log(task);
    } else {
      dispatch(removeTask(task.id));
    }
  };

  return (
    <button
      className={state ? styles.confirm : styles.default}
      onClick={handleClick}
    >
      {state
        ? `Delete this task? ( dev was too lazy to add the option to decline )`
        : `${num}. ${task.text}`}
      
    </button>
  );
}
