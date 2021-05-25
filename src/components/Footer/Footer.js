import React from 'react'


const Footer = ({state}) => {
  return(
    <div className="footer-container_content">
      <div className="footer-container_info">
        <h3>Acive Tasks: {state.columns['column-1'].tasksOrder.length} </h3>
        <h3>Finished Tasks: {state.columns['column-4'].tasksOrder.length}</h3>
      </div>
      <div className="footer-container_author">
        <h3>Kanban board by Khakim Zhumagaliyev</h3>
      </div>
    </div>
  )
}
export default Footer;