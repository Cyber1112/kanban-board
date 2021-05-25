import React, { useState } from "react";
import dataMock from "../../data/data";

const DrpContext = React.createContext();

const DropProvider = ({ children }) => {
  let [state, setState] = useState(dataMock);

  const handleEditing = (columnId) => {
    const column = state.columns[columnId];
    column.isEditing = true;

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [column.id]: {
          ...column,
        },
      },
    };
    setState(newState);
  };

  const endEditing = (columnId) => {
    const column = state.columns[columnId];
    column.isEditing = false;

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [column.id]: {
          ...column,
        },
      },
    };

    setState(newState);
  };
  const prevDate = (columnId, data) => {
    const column = state.columns[columnId];
    const tasks = state.tasks;
    const tasksLength = Object.keys(tasks).length;
    let order = "";
    for (let i = 0; i < tasksLength; i++) {
      if (tasks[`task-${i + 1}`].content === data) {
        // console.log(`task-${i + 1}`);
        order = `task-${i + 1}`;
      }
    }
    let prevColumn;
    if (columnId === "column-2") {
      prevColumn = state.columns['column-1']
    }else if(columnId === "column-3"){
      prevColumn = state.columns['column-2']
    }else if(columnId === "column-4"){
      prevColumn = state.columns['column-3']
    }
    for (let i = 0; i < tasksLength; i++) {
      if(prevColumn.tasksOrder[i] === order){
          prevColumn.tasksOrder.splice(i, 1)
      }
    }
    const newTasksOrder = [...column.tasksOrder];
    newTasksOrder.push(order);
    const newColumn = {
      ...column,
      tasksOrder: newTasksOrder,
    };
    const newState = {
      ...state,
      tasks,
      columns: {
        ...state.columns,
        [column.id]: {
          ...newColumn,
        },
      },
    };
    setState(newState);
  };
  const addData = (columnId, newTask) => {
    const column = state.columns[columnId];

    const tasks = state.tasks;
    const tasksLength = Object.keys(tasks).length;

    const newTaskId = `task-${tasksLength + 1}`;
    const taskContent = { id: newTaskId, content: newTask };

    tasks[newTaskId] = taskContent;

    const newTasksOrder = [...column.tasksOrder];
    newTasksOrder.push(newTaskId);

    const newColumn = {
      ...column,
      tasksOrder: newTasksOrder,
    };

    const newState = {
      ...state,
      tasks,
      columns: {
        ...state.columns,
        [column.id]: {
          ...newColumn,
        },
      },
    };

    setState(newState);
  };

  return (
    <DrpContext.Provider
      value={{
        state,
        addData,
        handleEditing,
        endEditing,
        prevDate,
      }}
    >
      {children}
    </DrpContext.Provider>
  );
};

export { DropProvider };

export default DrpContext;
