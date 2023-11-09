import React from "react";
import "./Register.css";
import Cross from "../../public/cross.svg";
import Select from "react-select";
import CustomStyles from "./CustomStyle";

const Register = ({
  setIsFormOpen,
  textControls,
  regControls,
  boxControls,
}) => {
  const colleges = [
    { value: 1, label: "BITS Pilani" },
    { value: 2, label: "IIT Delhi" },
    { value: 3, label: "IIT Bombay" },
    { value: 4, label: "IIT Dholakpur" },
  ];
  const city = [
    { value: 1, label: "Pilani" },
    { value: 2, label: "Delhi" },
    { value: 3, label: "Mumbai" },
    { value: 4, label: "Dholakpur" },
  ];
  const customStyleArray = [
    {
      ...CustomStyles(),
      menu: (provided) => ({
        ...provided,
        zIndex: 10000,
      }),
    },
  ];

  const handleBack = async () => {
    setIsFormOpen(false);
    await textControls.start({
      opacity: 1,
      display: "block",
    });
    await Promise.all([ animateBox()]);
  };
  // const animateButton = async () => {
  //   await regControls.start({
  //     letterSpacing: "1px",
  //   });
  // };
  const animateBox = async () => {
    await boxControls.start({
      // height: "90%",
      // rotate: -90,
      // scale: 1.75,
      // justifyContent: "flex-start",
      // gap: ".25rem",
      opacity: 1,
    });
  };

  return (
    <div className="register">
      <div className="register-back" onClick={handleBack}>
        <img src={Cross} alt="" />
      </div>
      <div className="register-form">
        <form>
          <div className="input-block">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input type="text" autoComplete="off" name="name" id="name" />
          </div>
          <div className="input-block">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input type="text" autoComplete="off" name="email" id="email" />
          </div>
          <div className="input-block">
            <label htmlFor="college" className="input-label">
              College
            </label>
            <Select
              options={colleges}
              id="state"
              styles={customStyleArray[0]}
              placeholder="Choose your College"
              // onFocus={(e) => {
              //   // e.target.placeholder = "";
              //   e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.add(
              //     styles.labelFocus
              //   );
              // }}
              // onBlur={(e) => {
              //   // e.target.placeholder = "Choose your state";
              //   e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.remove(
              //     styles.labelFocus
              //   );
              // }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="college" className="input-label">
              College Location
            </label>
            <Select
              options={city}
              id="state"
              styles={customStyleArray[0]}
              placeholder="Choose your City"
              // onFocus={(e) => {
              //   // e.target.placeholder = "";
              //   e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.add(
              //     styles.labelFocus
              //   );
              // }}
              // onBlur={(e) => {
              //   // e.target.placeholder = "Choose your state";
              //   e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.remove(
              //     styles.labelFocus
              //   );
              // }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="name" className="input-label">
              Year of Study
            </label>
            <div className="year-of-study">
              <input type="radio" id="year-1" name="year-of-study" />
              <label htmlFor="year-1">1</label>
              <input type="radio" id="year-2" name="year-of-study" />
              <label htmlFor="year-2">2</label>
              <input type="radio" id="year-3" name="year-of-study" />
              <label htmlFor="year-3">3</label>
              <input type="radio" id="year-4" name="year-of-study" />
              <label htmlFor="year-4">4</label>
              <input type="radio" id="year-5" name="year-of-study" />
              <label htmlFor="year-5">5</label>
            </div>
          </div>
          <div className="input-block">
            <label htmlFor="name" className="input-label">
              Mobile Number
            </label>
            <input type="text" autoComplete="off" name="name" id="name" />
          </div>
          <div className="info-source">
            <input
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="How did you come to know about Campus Ambassador Programme?"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
