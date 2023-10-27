import { v4 as uuidv4 } from "uuid";
const initialState = {
  tasks: [
    {
      id: "9444sds",
      title: "task 1",
      isDone: false,
      showEdit: false,
    },
    {
      id: "445646ddza",
      title: "task 2",
      isDone: false,
      showEdit: false,
    },
  ],
  show: false,
  notDoneTasks: [],
  doneTasks: [],
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "DONE") {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        return task.id === action.payload ? { ...task, isDone: true } : task;
      }),
    };
  } else if (action.type === "NOT_DONE") {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        return task.id === action.payload ? { ...task, isDone: false } : task;
      }),
    };
  } else if (action.type === "DELETE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => {
        return task.id !== action.payload;
      }),
    };
  } else if (action.type === "SHOW_EDIT") {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        return task.id === action.payload
          ? { ...task, showEdit: !task.showEdit }
          : task;
      }),
    };
  } else if (action.type === "EDIT_TASK") {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        return task.id === action.payload.id
          ? { ...task, title: action.payload.data }
          : task;
      }),
    };
  } else if (action.type === "SET_TASK") {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: uuidv4(),
          title: action.payload,
          isDone: false,
          showEdit: false,
        },
      ],
    };
  } else if (action.type === "FILTER_DONE") {
    return {
      ...state,
      doneTasks: state.tasks.filter((task) => {
        return task.isDone === true;
      }),
    };
  } else if (action.type === "FILTER_NOT_DONE") {
    return {
      ...state,
      notDoneTasks: state.tasks.filter((task) => {
        return !task.isDone;
      }),
    };
  } else if (action.type === "RESET_LIST") {
    return {
      ...state,
      tasks: state.tasks,
    };
  }
  return state;
};

export default todoReducer;
