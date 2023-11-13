import React, { useState, useEffect } from "react";
import "./step.css";
import phonedark from "./svg/phonedark.svg";
import msglight from "./svg/msglight.svg";
import followerlight from "./svg/followerlight.svg";
import customerlight from "./svg/customerlight.svg";
import viewlight from "./svg/viewlight.svg";
import trafficlight from "./svg/trafficlight.svg";
import productdark from "./svg/productdark.svg";
import follower from "./svg/follower.svg";
import customerdark from "./svg/customer.svg";
import viewdark from "./svg/view.svg";
import msgdark from "./svg/msgdark.svg";
import phone from "./svg/phonelight.svg";
import store from "./svg/store.svg";
import trafficdark from "./svg/trafficdark.svg";
import storedark from "./svg/storedark.svg";
import appinstalldark from "./svg/appinstalldark.svg";
import salesdark from "./svg/salesdark.svg";
import appinstall from "./svg/appinstall.svg";
import sales from "./svg/sales.svg";
import one from "./Images/1.png";
import two from "./Images/2.png";
import three from "./Images/3.png";
import four from "./Images/4.png";
import five from "./Images/5.png";
import six from "./Images/6.png";
import seven from "./Images/7.png";
import eight from "./Images/8.png";
import nine from "./Images/9.png";
import four_on from "./Images/four_on.svg";
import four_one from "./Images/four_one.png";
import four_two from "./Images/four_two.png";
import four_three from "./Images/four_three.png";
import four_four from "./Images/four_four.png";

import tick from "./svg/tick.svg";
import calendar from "./svg/calendar.svg";
import flag from "./svg/flag.svg";
import dropmenu from "./svg/dropmenu.svg";
import mine from "./svg/mineee.jpg";
import thumb from "./svg/thumb.svg";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import bulblight from "./svg/blublight.svg";
import productlight from "./svg/productlight.svg";
import product from "./svg/product.svg";
import readylight from "./svg/readylight.svg";
import ready from "./svg/ready.svg";
import campaignlight from "./svg/campaignlight.svg";
import campaign from "./svg/campaign.svg";

const Step = () => {
  const [step, setStep] = useState(1);
  const [selectedOption1, setSelectedOption1] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState([]);
  const [selectedOption4, setSelectedOption4] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };
  const toggleButton2 = () => {
    setIsActive2(!isActive2);
  };
  const handleStep4Edit = (id) => {
    if (selectedOption4.includes(id)) {
      setSelectedOption4(
        selectedOption4.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedOption4([...selectedOption4, id]);
    }
  };
  const handleContinue = () => {
    setStep(step + 1);
  };
  const [hamshow, setHamShow] = useState(false);
  const [value, setValue] = useState(100);
  const [value2, setValue2] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);

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

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleStep2Select = (id) => {
    if (selectedOption2.includes(id)) {
      setSelectedOption2(
        selectedOption2.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedOption2([...selectedOption2, id]);
    }
  };
  const handleStep1Select = (id) => {
    if (selectedOption1.includes(id)) {
      setSelectedOption1(
        selectedOption1.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedOption1([...selectedOption1, id]);
    }
  };

  const handleFinal=()=>{
    alert("Submission Completed , Congratulation !")
  }

  const step1data = [
    {
      id: 1,
      image: phone,
      image2: phonedark,
      title: "Get Leads as calls",
      description: "Reach broad audience and get leads through calls",
    },
    {
      id: 2,
      image: msglight,
      image2: msgdark,
      title: "Get Leads as Facebook messages",
      description: "Get more FB messages from Leads",
    },
    {
      id: 3,
      image: followerlight,
      image2: follower,
      title: "Increase page followers",
      description: "Encourage customers to follow your page",
    },
    {
      id: 4,
      image: customerlight,
      image2: customerdark,
      title: "Get Customer Leads",
      description: "Encourage customers to take action",
    },
    {
      id: 5,
      image: viewlight,
      image2: viewdark,
      title: "Get more youtube views",
      description: "Increase organic views by obtaining user attention",
    },
    {
      id: 6,
      image: trafficlight,
      image2: trafficdark,
      title: "Get more website traffic",
      description: "Get the right people to visit your website",
    },
    {
      id: 7,
      image: store,
      image2: storedark,
      title: "Increase Live store traffic",
      description: "Drive visits to local stores, restaurants & Dealerships",
    },
    {
      id: 8,
      image: appinstall,
      image2: appinstalldark,
      title: "Increase your App installs",
      description: "Get more installs, interactions for your app",
    },
    {
      id: 9,
      image: sales,
      image2: salesdark,
      title: "Increase the catalogue sales",
      description: "Drive the sales of your catalogue and get more leads",
    },
  ];

  const step2data = [
    {
      id: 1,
      image: one,
      title: "Bluberry cake with raw toppings",
      description: "Rs: 2,290",
    },
    {
      id: 2,
      image: two,
      title: "Chocolate truffle cake",
      description: "Rs: 2,190",
    },
    {
      id: 3,
      image: three,
      title: "Browine cake with fluffy cream",
      description: "Rs: 1,222",
    },
    {
      id: 4,
      image: four,
      title: "Ferro rocher cake",
      description: "Rs: 1,234",
    },
    {
      id: 5,
      image: five,
      title: "Custurd mixed with fruit cake",
      description: "Rs: 2,456",
    },
    {
      id: 6,
      image: six,
      title: "Best raw topping choco cake",
      description: "Rs: 2,345",
    },
    {
      id: 7,
      image: seven,
      title: "Green cup cakes",
      description: "Rs: 1,234",
    },
    {
      id: 8,
      image: eight,
      title: "Blueberry topping cakes",
      description: "Rs: 2.456",
    },
    {
      id: 9,
      image: nine,
      title: "Strawberry cakes with blueberry",
      description: "Rs: 2,345",
    },
  ];

  const dummyData = [
    {
      id: 1,
      image: four_one,
      name: "Mukund Cake Shop",
      sponsored: true,
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
    },
    {
      id: 2,
      image: four_two,
      name: "Mukund Cake Shop",
      sponsored: true,
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
    },
    {
      id: 3,
      image: four_three,
      name: "Mukund Cake Shop",
      sponsored: true,
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
    },
    {
      id: 4,
      image: four_four,
      name: "Mukund Cake Shop",
      sponsored: true,
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
    },
  ];

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <Navbar setHamShow={setHamShow} camp={false} />
      {(showSidebar || hamshow) && (
        <Sidebar setHamShow={setHamShow} camp={false} />
      )}
      <div className="step_outer">
        <div className="step_outer_00">
          <section>
            <h1>Your Campaigns</h1>
            <p>Check the list of campigns you created </p>
          </section>

          <div className="stepper_00">
            <section>
              <span>
                <img src={bulblight} />
              </span>
              <p>What you want to do</p>
            </section>
            <p
              style={
                step >= 2
                  ? { backgroundColor: "#f29a2e" }
                  : { backgroundColor: "#E4EAF2" }
              }
            ></p>
            <section>
              <span
                style={
                  step >= 2
                    ? { backgroundColor: "#f29a2e" }
                    : { backgroundColor: "#E4EAF2" }
                }
              >
                {step >= 2 ? (
                  <img src={productlight} alt="Product Light" />
                ) : (
                  <img src={product} alt="Product" />
                )}
              </span>

              <p>Choose product</p>
            </section>
            <p
              style={
                step >= 3
                  ? { backgroundColor: "#f29a2e" }
                  : { backgroundColor: "#E4EAF2" }
              }
            ></p>

            <section>
              <span
                style={
                  step >= 3
                    ? { backgroundColor: "#f29a2e" }
                    : { backgroundColor: "#E4EAF2" }
                }
              >
                {step >= 3 ? (
                  <img src={campaignlight} />
                ) : (
                  <img src={campaign} />
                )}
              </span>
              <p>Campaign settings</p>
            </section>
            <p
              style={
                step >= 4
                  ? { backgroundColor: "#f29a2e" }
                  : { backgroundColor: "#E4EAF2" }
              }
            ></p>
            <section>
              <span
                style={
                  step >= 4
                    ? { backgroundColor: "#f29a2e" }
                    : { backgroundColor: "#E4EAF2" }
                }
              >
                {step >= 4 ? <img src={readylight} /> : <img src={ready} />}
              </span>
              <p>Ready to go</p>
            </section>
          </div>

          {step <= 2 && (
            <>
              <div className="step_1">
                <span>
                  <h6>
                    {step === 1
                      ? "What you want to do"
                      : step === 2
                      ? "Choose the Product"
                      : "Ready to go"}
                  </h6>
                  <p>(Step {step} of 4)</p>
                </span>

                <p></p>

                <div className="step_1_grid">
                  {step === 1
                    ? step1data.map((stepData, index) => (
                        <div className="step_1_grid_inside" key={stepData.id}>
                          <section
                            onClick={() => handleStep1Select(stepData.id)}
                            style={{
                              background: selectedOption1.includes(stepData.id)
                                ? "rgba(231, 240, 255, 0.3)"
                                : "transparent",
                            }}
                          >
                            {selectedOption1.includes(stepData.id) ? (
                              <img
                                src={stepData.image2}
                                alt={`Step ${index + 1}`}
                              />
                            ) : (
                              <img
                                src={stepData.image}
                                alt={`Step ${index + 1}`}
                              />
                            )}

                            <span>
                              <h6>{stepData.title}</h6>
                              <p>{stepData.description}</p>
                            </span>
                          </section>
                          {selectedOption1.includes(stepData.id) && (
                            <img src={tick} alt="Tick" />
                          )}
                        </div>
                      ))
                    : step2data.map((stepData, index) => (
                        <div className="step_1_grid_inside" key={stepData.id}>
                          <section
                            onClick={() => handleStep2Select(stepData.id)}
                            style={{
                              background: selectedOption2.includes(stepData.id)
                                ? "rgba(231, 240, 255, 0.3)"
                                : "transparent",
                            }}
                          >
                            <img
                              src={stepData.image}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "2px",
                              }}
                              alt="Mine"
                            />
                            <span>
                              <h6>{stepData.title}</h6>
                              <p>{stepData.description}</p>
                            </span>
                          </section>
                          {selectedOption2.includes(stepData.id) && (
                            <img id="step2_image" src={tick} alt="Tick" />
                          )}
                        </div>
                      ))}
                </div>
              </div>
              <button onClick={handleContinue}>Continue</button>
            </>
          )}

          {step === 4 && (
            <>
              <div className="step_4_grid">
                <span>
                  <h6>Ready to go</h6>
                  <p>(Step {step} of 4)</p>
                </span>

                <p></p>

                <div className="step4_outside_grid">
                  {dummyData.map((item, index) => (
                    <div
                      key={index}
                      className="step_4_grid_inside"
                      onClick={() => handleStep4Edit(item.id)}
                    >
                      <div
                        className="step_4_grid_inside_00"
                        style={{
                          background: selectedOption4.includes(item.id)
                            ? "rgba(231, 240, 255, 0.3)"
                            : "inherit",
                        }}
                      >
                        <section>
                          <img src={four_on} alt={`Image ${index}`} />
                          <span>
                            <h6>{item.name}</h6>
                            <p>{item.sponsored ? "Sponsored" : ""}</p>
                          </span>
                        </section>
                        <p>{item.description}</p>
                        <div className="step_4_grid_image">
                          <img src={item.image} alt={`Image ${index}`} />
                          <span>
                            <p>{item.name}</p>
                            <button>
                              <img src={thumb} alt="Thumb" />
                              <p>Like</p>
                            </button>
                          </span>
                        </div>
                        {selectedOption4.includes(item.id) && (
                          <>
                            {" "}
                            <div className="step_4_edit">
                              <button>Change image</button>
                              <button>Edit Text</button>
                            </div>
                          </>
                        )}
                      </div>
                      {selectedOption4.includes(item.id) && (
                        <img src={tick} alt="Tick" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={step === 4 ? handleFinal : handleContinue}>
                {step === 4 ? "Start campaign" : "Continue"}
              </button>
            </>
          )}

          {step === 3 && (
            <div className="step_3_outside">
              <div className="step_3">
                <span>
                  <h6>Campaign Settings</h6>
                  <p>(Step 3 of 4)</p>
                </span>
                <p></p>

                <div className="step_3_table">
                  <div className="step_3_00">
                    <span>1</span>
                    <p></p>
                    <span>2</span>
                  </div>
                  <div className="step_3_001">
                    <div className="step_3_01">
                      <p>Budget and dates info</p>
                      <span>
                        <p>Budget Timeline</p>

                        <button
                          style={{
                            background: isActive
                              ? "linear-gradient(to right, #0F6EFF 50%, #ddd 50%)"
                              : "linear-gradient(to right, #ddd 50%, #0F6EFF 50%)",
                            justifyContent: isActive
                              ? "flex-start"
                              : "flex-end",
                          }}
                          onClick={toggleButton}
                        >
                          <section>
                            <span
                              style={
                                isActive
                                  ? { color: "#fff" }
                                  : { color: "#999999" }
                              }
                            >
                              Lifetime
                            </span>
                            <span
                              style={
                                !isActive
                                  ? { color: "#fff" }
                                  : { color: "#999999" }
                              }
                            >
                              Daily
                            </span>
                          </section>
                        </button>
                      </span>
                      <section>
                        <span>
                          <p>Start date</p>
                          <input />
                          <img src={calendar} />
                        </span>

                        <span>
                          <p>End date</p>
                          <input />
                          <img src={calendar} />
                        </span>
                      </section>

                      <div className="budget_money">
                        <section>
                          <p>Enter campaign budget</p>
                          <span>
                            <img src={flag} />
                            <p>INR</p>
                            <img src={dropmenu} />
                          </span>
                        </section>
                        <div className="slider-container">
                          <input
                            type="range"
                            min="100"
                            max="100000"
                            step="100"
                            value={value}
                            onChange={handleChange}
                            className="range-slider"
                          />
                          <div
                            className="slider-tooltip"
                            style={{ left: `calc(${value / 1110}%)` }}
                          >
                            <span className="amount"> Rs</span>{" "}
                            {formatNumberWithCommas(value)}
                            <div className="arrow-up"></div>
                          </div>
                          <section>
                            <span>100</span>
                            <span>1,00,000</span>
                          </section>
                        </div>
                      </div>
                    </div>
                    <div className="step_3_01">
                      <p>Location info</p>
                      <span>
                        <p>Location type</p>
                        <button
                          style={{
                            background: isActive2
                              ? "linear-gradient(to right, #0F6EFF 50%, #ddd 50%)"
                              : "linear-gradient(to right, #ddd 50%, #0F6EFF 50%)",
                            justifyContent: isActive2
                              ? "flex-start"
                              : "flex-end",
                          }}
                          onClick={toggleButton2}
                        >
                          <section>
                            <span
                              style={
                                isActive2
                                  ? { color: "#fff" }
                                  : { color: "#999999" }
                              }
                            >
                              Location
                            </span>
                            <span
                              style={
                                !isActive2
                                  ? { color: "#fff" }
                                  : { color: "#999999" }
                              }
                            >
                              Radius
                            </span>
                          </section>
                        </button>
                      </span>
                      <section style={{ gap: "0px" }}>
                        <span>
                          <p>Select Location</p>
                          <input placeholder="Select a place name, address or coordinates" />
                        </span>
                      </section>

                      <div className="budget_money">
                        <section>
                          <p>Select target radius</p>
                        </section>
                        <div className="slider-container">
                          <input
                            type="range"
                            min="1"
                            max="30"
                            step="1"
                            value={value2}
                            onChange={handleChange2}
                            className="range-slider"
                          />
                          <div
                            className="slider-tooltip"
                            style={{ left: `calc(${(value2 / 33) * 100}%)` }}
                          >
                            {value2}
                            <span className="amount"> Km </span>{" "}
                            <div className="arrow-up"></div>
                          </div>
                          <section>
                            <span>1</span>
                            <span>30</span>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={handleContinue}>Continue</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Step;
