import React, { useContext } from "react";
import Form from "./Form";
import { IoIosAdd } from "react-icons/io";
import DrpContext from "./information/DrpContext";

const AddTask = ({ column, isEditing }) => {
  const { handleEditing } = useContext(DrpContext);
  if (isEditing) {
    return <Form column={column} />;
  } else {
    return (
      <div className="add-card_button">
        <IoIosAdd
          onClick={() => handleEditing(column.id)}
          className="add-card_button-icon"
        />
        <p className="add-card_text">Add Card</p>
      </div>
    );
  }
};

export default AddTask;