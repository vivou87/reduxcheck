import React, { useState } from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import {
  setTask,
  filterDone,
  filterNotDone,
  resetList,
} from "../redux/actions";
import { useDispatch } from "react-redux";

import { LuListX, LuListChecks } from "react-icons/lu";
import { GrPowerReset } from "react-icons/gr";
function ToDoList() {
  const { tasks } = useSelector((store) => store);
  const { doneTasks } = useSelector((store) => store);
  const { notDoneTasks } = useSelector((store) => store);
  const [newTask, setNewTask] = useState("");
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="to-do-list">
      <form>
        <input
          type="text"
          placeholder="What do you want to do today"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          value={newTask}
        />
        <button
          onClick={() => {
            dispatch(setTask(newTask));
            setNewTask("");
          }}
          type="button"
        >
          Add
        </button>
      </form>
      <div className="list-icons">
        <LuListChecks
          onClick={() => {
            dispatch(filterDone());
            setDone(true);
            setNotDone(false);
          }}
          size={40}
        />
        <LuListX
          onClick={() => {
            dispatch(filterNotDone());
            setNotDone(true);
            setDone(false);
          }}
          size={40}
        />
        <GrPowerReset
          onClick={() => {
            setDone(false);
            setNotDone(false);
          }}
          size={40}
        />
      </div>
      {done && !notDone
        ? doneTasks.map((task) => (
            <ToDoItem
              title={task.title}
              isDone={task.isDone}
              showEdit={task.showEdit}
              id={task.id}
            />
          ))
        : !done && notDone
        ? notDoneTasks.map((task) => (
            <ToDoItem
              title={task.title}
              isDone={task.isDone}
              showEdit={task.showEdit}
              id={task.id}
            />
          ))
        : !done &&
          !notDone &&
          tasks.map((task) => (
            <ToDoItem
              title={task.title}
              isDone={task.isDone}
              showEdit={task.showEdit}
              id={task.id}
            />
          ))}
    </div>
  );
}

export default ToDoList;
