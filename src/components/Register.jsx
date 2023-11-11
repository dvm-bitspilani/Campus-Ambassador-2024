import React, { useEffect, useState } from "react";
import "./Register.css";
import Cross from "../../public/cross.svg";
import Select from "react-select";
import CustomStyles from "./CustomStyle";
import { useFormik } from "formik";
import { regSchema } from "../schemas";
import collegesData from "./colleges.json";

const initialValues = {
  email: "",
  name: "",
  year: "",
  mobile: "",
  city: "",
  college: "",
  info_source: "",
};

const Register = ({
  setIsFormOpen,
  textControls,
  regControls,
  boxControls,
}) => {
  const [success, setSuccess] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: regSchema,
      onSubmit: async (values) => {
        console.log(values);

        async function sendReg() {
          try {
            const res = await fetch(
              "https://bits-apogee.org/collegeambassador/register",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }
            );

            const data = await res.json();
            console.log(data.message);
            setSuccess(true);
          } catch (error) {
            console.error("Error:", error.message);
          }
        }

        await Promise.all([sendReg()]);
      },
    });

  const [colleges, setColleges] = useState([]);
  const infoSources = [
    { value: 1, label: "I received a call/mail/message" },
    { value: 2, label: "Unstop (D2C)" },
    { value: 3, label: "Internshala" },
    { value: 4, label: "LinkedIn" },
    { value: 5, label: "APOGEE Website" },
    { value: 6, label: "Others" },
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
    await Promise.all([animateBox()]);
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

  useEffect(() => {
    setColleges(
      collegesData["data"].map((item) => {
        return { value: item.id, label: item.name };
      })
    );
  }, []);

  return (
    <div className="register">
      <button className="register-back" onClick={handleBack}>
        <img src={Cross} alt="" />
      </button>
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <div className="input-field">
              <input
                type="text"
                autoComplete="off"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>{errors.name && touched.name ? errors.name : ""}</p>
            </div>
          </div>
          <div className="input-block">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <div className="input-field">
              <input
                type="text"
                autoComplete="off"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>{errors.email && touched.email ? errors.email : ""}</p>
            </div>
          </div>
          <div className="input-block">
            <label htmlFor="college" className="input-label">
              College
            </label>
            <div className="input-field">
              <Select
                options={colleges}
                id="college"
                styles={customStyleArray[0]}
                placeholder="Choose your College"
                name="college"
                value={colleges.find(
                  (option) => option.value === values.college
                )}
                onChange={(selectedOption) => {
                  let event = {
                    target: { name: "college", value: selectedOption.value },
                  };
                  handleChange(event);
                }}
                onBlur={() => {
                  handleBlur({ target: { name: "college" } });
                }}
              />
              <p>{errors.college && touched.college ? errors.college : ""}</p>
            </div>
          </div>
          <div className="input-block">
            <label htmlFor="college" className="input-label">
              College Location
            </label>
            <div className="input-field">
              <input
                type="text"
                autoComplete="off"
                name="city"
                id="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>{errors.city && touched.city ? errors.city : ""}</p>
            </div>
          </div>
          <div className="input-block">
            <label htmlFor="name" className="input-label">
              Year of Study
            </label>
            <div className="input-field">
              <div className="year-of-study">
                <input
                  type="radio"
                  id="year-1"
                  name="year"
                  value="1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.year === "1"}
                />
                <label htmlFor="year-1">1</label>
                <input
                  type="radio"
                  id="year-2"
                  name="year"
                  value="2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.year === "2"}
                />
                <label htmlFor="year-2">2</label>
                <input
                  type="radio"
                  id="year-3"
                  name="year"
                  value="3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.year === "3"}
                />
                <label htmlFor="year-3">3</label>
                <input
                  type="radio"
                  id="year-4"
                  name="year"
                  value="4"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.year === "4"}
                />
                <label htmlFor="year-4">4</label>
                <input
                  type="radio"
                  id="year-5"
                  name="year"
                  value="5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.year === "5"}
                />
                <label htmlFor="year-5">5</label>
              </div>
              <p>{errors.year && touched.year ? errors.year : ""}</p>
            </div>
          </div>
          <div className="input-block">
            <label htmlFor="name" className="input-label">
              Mobile Number
            </label>
            <div className="input-field">
              <input
                type="text"
                autoComplete="off"
                name="mobile"
                id="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>{errors.mobile && touched.mobile ? errors.mobile : ""}</p>
            </div>
          </div>
          <div className="info-source">
            <div className="info-field">
              <Select
                className="info-source-select"
                options={infoSources}
                styles={customStyleArray[0]}
                placeholder="How did you come to know about Campus Ambassador Programme?"
                value={infoSources.find(
                  (option) => option.label === values.info_source
                )}
                onChange={(option) => {
                  handleChange("info_source")(option.label);
                }}
                onBlur={handleBlur("info_source")}
              />
              <p>
                {errors.info_source && touched.info_source
                  ? errors.info_source
                  : ""}
              </p>
            </div>
          </div>
          {success ? null : <button type="submit">Submit</button>}
        </form>
        {success ? <p className="reg-success">Successfully Registered</p> : ""}
      </div>
    </div>
  );
};

export default Register;
