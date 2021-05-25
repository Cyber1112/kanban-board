import React from "react";
import Column from "../Column";


const Body = ({state}) => {

  return (
    <div className="body-container_content">
        <div className="container bg-blue">
          <div className="columns is-multiline is-mobile">
            {state.columnsOrder.map((columnId, index) => {
              const column = state.columns[columnId];
              // console.log(column)
              const isEditing = column.isEditing;
              const task = column.tasksOrder.map(
                (taskId) => state.tasks[taskId]
              );
              // console.log(task)
              return (
                <Column
                  key={column.id}
                  tasks={task}
                  index={index}
                  column={column}
                  isEditing={isEditing}
                  state={state}
                />
              );
            })}
          </div>
        </div>
    </div>
  );
};
export default Body;
