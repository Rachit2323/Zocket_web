import React from "react";
import "./Navbar.css";
import gold from "./svg/gold.svg";
import gift from "./svg/gift.svg";
import reddot from "./svg/reddot.svg";
import notify from "./svg/notify.svg";
import choco from "./svg/choco.svg";
import dropdown from "../Step1/svg/dropmenu.svg";
import lang from "./svg/lang.svg";
import Hamburger from "./svg/Hamburger.svg";
const Navbar = ({setHamShow,camp}) => {

  const OpenMenu=()=>{

    setHamShow(true);
  }

  return (
    <>
      <div className="navbar_outer_00">
       {camp===false&&( <img id="hamburg" src={Hamburger} onClick={OpenMenu}/>)}
        <p>Free trial ends in 2 days</p>
        <button>
          <img src={gold} />
          <p>Buy Plan</p>
        </button>

        <span>
          <img src={gift} />
          <img id="redot" src={reddot} />
        </span>
        <span>
          <img src={notify} />
          <img id="redot" src={reddot} />
        </span>
        <img src={choco} />
        <span >
          <p>Mukund cake shop</p>
          <img src={dropdown} />
        </span>
        <img src={lang} style={{paddingRight:'30px'}} />
      </div>
    </>
  );
};

export default Navbar;
