import React, { useContext, useRef } from "react";
import DrpContext from "./information/DrpContext";
import SelectOption from "./SelectOption";

const Form = ({ column }) => {
  const { addData, endEditing } = useContext(DrpContext);
  let newTask = useRef(null)
  const handleAddClick = () => {
    endEditing(column.id);
    if (newTask.value === "") {
      alert("Task cannot be empty!");
    } else {
      addData(column.id, newTask.value);
    }
  };

  return (
    <form className="form-submit-content">
      {column.id === "column-1" ? (
        <>
          <input
            className="input"
            type="text"
            placeholder="Write a task here"
            ref={(val) => (newTask = val)}
            defaultValue=""
          />
          <button
            type="button"
            className="button-submit"
            onClick={handleAddClick}
          >
            Submit
          </button>
        </>
      ) : (
        <SelectOption column={column} />
      )}
    </form>
  );
};

export default Form;
