import React from "react";
import "./Loading.css";
import logo from "../assets/logo-header-purple.svg"; 

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
};

export default Loading;
