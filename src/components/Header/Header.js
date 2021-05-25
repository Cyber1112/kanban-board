import React, { useState } from "react";
import user from "./images/user.svg";
const Header = () => {
  const [clicked, setClicked] = useState(false);

  const menuHandler = () => {
    if (clicked) setClicked(false);
    else setClicked(true);
  };
  return (
    <div className="header-container_content">
      <h1>Awesome Kanban Board</h1>
      <div className="header-container_information">
        <div className="header-container_user">
          <img
            onClick={menuHandler}
            className="header-container_user-image"
            src={user}
            alt="Not found"
          />
          <button
            onClick={menuHandler}
            className={`${clicked ? "up" : "down"}`}
          />
        </div>
        <div
          className="header-container_menu"
          style={{ display: clicked ? "block" : "none" }}
        >
          <ul className="header-container_menu-content">
            <li>Profile</li>
            <li>Log out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
