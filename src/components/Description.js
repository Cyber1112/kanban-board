import { NavLink } from "react-router-dom";

const Description = ({ state, match }) => {
  let cardId = match.params.cardId;

  const task = Object.keys(state.tasks).find((card) => card === cardId);
  
  return (
    <div className="body-task_content">
      <div className="container-box">
        <div className="container-box_content">
          <h3 className="task-title">{state.tasks[task].content}</h3>
          <p className="task-info">{state.tasks[task].information}</p>
        </div>
        <NavLink to="/">
          <div
            style={{
              fontSize:40,              
              color:"black",
              cursor: "pointer",
              marginRight:20
            }}
          ></div>
        </NavLink>
      </div>
    </div>
  );
};
export default Description;
