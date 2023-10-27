import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  checkDone,
  checkNotDone,
  deleteTask,
  showEdit,
  editTask,
} from "../redux/actions";
function ToDoItem(props) {
  const dispatch = useDispatch();
  const { show } = useSelector((store) => store);
  return (
    <div
      className="task-item"
      style={
        props.isDone
          ? { backgroundColor: "#bdff77", textDecoration: "line-through" }
          : {}
      }
    >
      <h2> {props.title} </h2>
      {props.showEdit && (
        <input
          type="text"
          value={props.title}
          onChange={(e) => {
            dispatch(editTask({ data: e.target.value, id: props.id }));
          }}
        />
      )}
      <div className="icons-box">
        <LuPencilLine
          className="icon"
          size={30}
          onClick={() => {
            dispatch(showEdit(props.id));
          }}
        />
        <BsFillTrashFill
          className="icon"
          size={30}
          onClick={() => {
            dispatch(deleteTask(props.id));
          }}
        />
        {props.isDone ? (
          // check not done
          <AiFillCloseCircle
            className="icon"
            size={30}
            onClick={() => {
              dispatch(checkNotDone(props.id));
            }}
          />
        ) : (
          // check done
          <AiFillCheckCircle
            className="icon"
            size={30}
            onClick={() => {
              dispatch(checkDone(props.id));
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ToDoItem;
