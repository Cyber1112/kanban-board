import React from "react";
import AllTasks from "./AllTasks";
import AddTask from "./AddTask";

const Column = React.memo(({ tasks, column, isEditing }) => {
  return (
    <div className="column is-marginless">
      <div className="card card-radius ">
        <div className="card-content">
          <p className="title-board_name">{column.title}</p>
          <div
            className="list"
            style={{
              overflow: "scroll",
            }}
          >
            <AllTasks tasks={tasks} />
          </div>
        </div>
        <AddTask column={column} isEditing={isEditing} tasks={tasks} />
      </div>
    </div>
  );
});

export default Column;
