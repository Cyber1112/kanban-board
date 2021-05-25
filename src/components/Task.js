import React from "react";
import { NavLink } from "react-router-dom";
const Task = React.memo(({ task }) => {
  return (
    <div className="list-item">
      <NavLink style={{
        textDecoration:"none",
        color:"black"
      }} to={`/${task.id}`}>
        {task.content}
      </NavLink>
    </div>
  );
});

export default Task;
