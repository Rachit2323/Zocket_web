import React, { useState, useEffect } from "react";
import "./MainCampa.css";
import plus from "../svg/plus.svg";
import dropmenu from "../svg/dropmenu.svg";
import icecream from "../svg/unsplash_S2jw81lfrG0.png";
import main2 from "../svg/main_2.png";
import main3 from "../svg/main_3.png";
import main4 from "../svg/main_4.png";
import main5 from "../svg/main_5.png";
import edit from "../svg/edit.svg";
import deletebtn from "../svg/delete.svg";
import fb from "./svg/fb.svg";
import utube from "./svg/utube.svg";
import google from "./svg/google.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
const MainCamp = () => {
  const navigate = useNavigate();
  const handleStep = () => {
    navigate("/step");
  };

  const [hamshow, setHamShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const [isCheckedArray, setIsCheckedArray] = useState({});

  const handleToggle = (id) => {
    const updatedArray = { ...isCheckedArray };
    updatedArray[id] = !updatedArray[id];
    setIsCheckedArray(updatedArray);
  };

  const data = [
    {
      id: 1,
    
      imageSrc: icecream,
      campaignTitle: "Bluberry cake Campaign",
      createdDate: "14 july",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      views: 300,
      amount: "INR.3,400",
      location: "Chennai",
      platform: fb,
      status: "Live Now",
    },
    {
      id: 2,

      imageSrc: main2,
      campaignTitle: "Chocolate cake campaign",
      createdDate: "20 Jan",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      views: 210,
      amount: "INR.3,400",
      location: "Coimbatore",
      platform: fb,
      status: "Paused",
    },
    {
      id: 3,
    
      imageSrc: main3,
      campaignTitle: "Browine cake campaign",
      createdDate: "12 june",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      views: 123,
      amount: "INR.3,400",
      location: "Erode",
      platform: fb,
      status: "Exhausted",
    },
    {
      id: 4,

      imageSrc: main4,
      campaignTitle: "Pumpkin cake camapign",
      createdDate: "28 feb",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      views: 435,
      amount: "INR.3,400",
      location: "Coimbatore",
      platform: utube,
      status: "Live now",
    },
    {
      id: 5,
    
      imageSrc: main5,
      campaignTitle: "Cup cakes campaign",
      createdDate: "10 july",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      views: 123,
      amount: "INR.3,400",
      location: "Coimbatore",
      platform: google,
      status: "Live Now",
    },
  
  ];

  useEffect(() => {
    if (window.innerWidth >= 720) setHamShow(false);
  }, [window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 720);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <>
      <Navbar setHamShow={setHamShow} camp={true} />
      {(showSidebar || hamshow) && (
        <Sidebar setHamShow={setHamShow} camp={true} />
      )}
      <div className="MainCamp_outer">
        <section>
          <span>
            <h1>Your Campaigns</h1>
            <p>Check the list of campigns you created </p>
          </span>
          <button onClick={handleStep}>
            <img src={plus} />
            Create new campaign
          </button>
        </section>
        <div className="main_inside_table">
          <div className="table_toolbar">
            <input type="text" placeholder="Search for the campaign" />
            <section>
              <span>
                <p>Platform :</p>

                <section>
                  <input type="text2" placeholder="All Platform" readOnly/>
                  <img src={dropmenu} />
                </section>
              </span>
              <span>
                <p>Status :</p>

                <section>
                  <input type="text2" placeholder="All Status" readOnly/>
                  <img src={dropmenu} />
                </section>
              </span>
              <span>
                <section>
                  <input
                  readOnly
                    type="text2"
                    placeholder="Last 30 days"
                    style={{ width: "90px" }}
                  />
                  <img src={dropmenu} />
                </section>
              </span>
            </section>
          </div>
          <div className="table_header_data">
            <div className="table_header">
              <span
                style={{
                  display: "block",
                  width: "14px",
                  marginRight: "30px",
                  height: "14px",
                  borderRadius: "3px",
                  border: "1px solid #B3B3B3",
                }}
              >
                {" "}
              </span>
              <span style={{ width: "9%" }}>On/Off</span>
              <span style={{ width: "26%" }}>Campaign</span>
              <span style={{ width: "21%" }}>Date Range</span>
              <span style={{ width: "10%" }}>Clicks</span>
              <span style={{ width: "12%" }}>Budget</span>
              <span style={{ width: "12%" }}>Location</span>
              <span style={{ width: "10%" }}>Platform</span>
              <span style={{ width: "11%" }}>Status</span>
              <span style={{ width: "7%" }}>Actions</span>
            </div>
            {data.map((item, index) => (
              <section key={index}>
                <span
                  style={{
                    display: "block",
                    cursor: "pointer",
                    width: "14px",
                    marginRight: "13px",
                    height: "14px",
                    borderRadius: "3px",
                    border: "1px solid #B3B3B3",
                  }}
                >
                  {" "}
                </span>
                <span style={{ width: "7%" }}>
                  <>
                    <input
                      type="checkbox"
                      id={`switch${index}`}
                      checked={isCheckedArray[item.id] || false}
                      onChange={() => handleToggle(item.id)}
                    />
                    <label htmlFor={`switch${index}`}>Toggle</label>
                  </>
                </span>
                <span style={{ width: "24%" }}>
                  <section>
                    <img src={item.imageSrc} alt={`Campaign ${index}`} />
                    <span>
                      <h6>{item.campaignTitle}</h6>
                      <p>Created on {item.createdDate}</p>
                    </span>
                  </section>
                </span>
                <span style={{ width: "18%" }}>{item.dateRange}</span>
                <span style={{ width: "9%" }}>{item.views}</span>
                <span style={{ width: "11%" }}>{item.amount}</span>
                <span style={{ width: "11%" }}>{item.location}</span>
                <span style={{ width: "10%" }}>
              <img src= {item.platform}/>
                </span>
                <span style={{ width: "11%" }}>
                  <p
                    id="status"
                    style={{
                      background:
                        item.status === "Paused" ? "#FFF8E0" : item.status === "Exhausted"?"#FFDEDE":"#e1ffe0",
                      color: item.status === "Paused" ? "#D1A307" :item.status === "Exhausted"?"#FC3F3F": "#317C2E",
                    }}
                  >
                    {item.status}
                  </p>
                </span>
                <span style={{ width: "9%" }}>
                  <section style={{ marginLeft: "10px" }}>
                    <img
                      src={edit}
                      style={{ width: "20px", height: "20px",cursor:'pointer' }}
                      alt="Edit"
                    />
                    <img
                      src={deletebtn}
                      style={{ width: "20px", height: "20px",cursor:'pointer' }}
                      alt="Delete"
                    />
                  </section>
                </span>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCamp;
