import React from "react";
import style from "./Form.module.css";
import logo from "../../assets/Rick-And-Morty-Logo.png";
import { useState } from "react";
import validation from "../Validation/Validation";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    console.log(handleSubmit);
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
    console.log(handleChange);
  };

  return (
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="ramlogo"></img>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.inputContainer}>
          <EmailIcon sx={{ pr: 1 }} />
          <input
            placeholder="rick@mail.com"
            className={style.input}
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className={style.errorContainer}>
          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>
        <div className={style.inputContainer}>
          <KeyIcon sx={{ pr: 1 }} />
          <input
            placeholder="Morty123"
            className={style.input}
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className={style.errorContainer}>
          {errors.password && <p className={style.error}>{errors.password}</p>}
        </div>
        <button type="submit" className={style.button}>
          <LoginIcon sx={{ pr: 1 }} />
          Log in
        </button>
      </form>
    </div>
  );
};

export default Form;
