export const checkDone = (payload) => {
  return {
    type: "DONE",
    payload,
  };
};
export const checkNotDone = (payload) => {
  return {
    type: "NOT_DONE",
    payload,
  };
};
export const deleteTask = (payload) => {
  return {
    type: "DELETE_TASK",
    payload,
  };
};
export const showEdit = (payload) => {
  return {
    type: "SHOW_EDIT",
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: "EDIT_TASK",
    payload,
  };
};
export const setTask = (payload) => {
  return {
    type: "SET_TASK",
    payload,
  };
};
export const filterDone = () => {
  return {
    type: "FILTER_DONE",
  };
};
export const filterNotDone = () => {
  return {
    type: "FILTER_NOT_DONE",
  };
};
export const resetList = () => {
  return {
    type: "RESET_LIST",
  };
};
