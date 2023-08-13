import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css"
import logo from "../../assets/Rick-And-Morty-Logo.png";

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="ramlogo"></img>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
