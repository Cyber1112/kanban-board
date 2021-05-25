import React, { useContext, useState } from "react";
import DrpContext from "./information/DrpContext";
const SelectOption = ({ column }) => {
  const { state, prevDate, endEditing } = useContext(DrpContext);
  const [data, setData] = useState("");
  const handleAddClick = () => {
    endEditing(column.id);
    if (data === "") {
      alert("Task cannot be empty!");
    } else {
      prevDate(column.id, data);
    }
  };
  let prevTasks;
  if (column.id === "column-2") {
    prevTasks = state.columns["column-1"];
  } else if (column.id === "column-3") {
    prevTasks = state.columns["column-2"];
  } else if (column.id === "column-4") {
    prevTasks = state.columns["column-3"];
  }
  return (
    <>
      <div className="selectOption">
        <select
          onChange={e => {
            setData(e.target.value);
          }}
        >
          <option></option>
          {prevTasks.tasksOrder.map((taskElem, index) => {
            const tasks = state.tasks[taskElem];
            return (
              <option key={index} onClick={() => console.log("pressed")}>
                {tasks.content}
              </option>
            );
          })}
        </select>
      </div>
      <button type="button" className="button-submit" onClick={handleAddClick}>
        Submit
      </button>
    </>
  );
};
export default SelectOption;
