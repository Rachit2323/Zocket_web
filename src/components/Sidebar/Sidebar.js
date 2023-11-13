import React from "react";
import "./Sidebar.css";
import rocket from "../svg/rocket.svg";
import home from "../svg/home.svg";
import customer from "../svg/customer.svg";
import campaign from "../svg/campaign.svg";
import product from "../svg/product.svg";
import close from "../svg/close.svg";
const Sidebar = ({setHamShow,camp}) => {

  const handleClose= ()=>{

    const sidebar = document.querySelector(".outer_side_00");
    setHamShow(false);

    if (sidebar) {
      sidebar.style.display = "none";
    }

  }
  return (
    <>
      <div className="outer_side_00">
     {camp===false&&(   <img  id="close" src={close}  onClick={handleClose} style={{width:'20px',cursor:'pointer'}} />)}
        <img src={rocket} />
        <section>
          <span style={{cursor:'pointer'}}>
            {" "}
            <img src={home} />
            <p>Home</p>
          </span>
          <span id="selected_tag" style={{cursor:'pointer'}}>
            <img src={campaign} />
            <p>campaign</p>
          </span>
          <span style={{cursor:'pointer'}}>
            <img src={product} />
            <p>product</p>
          </span>
          <span style={{cursor:'pointer'}}>
            <img src={customer} />
            <p>customer</p>
          </span>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
