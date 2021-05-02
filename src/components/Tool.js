import React, { useContext } from "react";
// import "./Tool.css";
import { ThemeContext } from "./ThemeProvider";
import AppBar from "./AppBar";
import Footer from "./Footer";
export default function Tool() {
  const state = useContext(ThemeContext);
  const toolContainer = {
    backgroundColor: state.theme.primary,
    height: "90vh",
  };
  const text = {
    color: state.theme.text,
  };

  const btn = {
    borderRadius: "25px",
    padding: "3px",
    width: "150px",
    fontFamily: "Work Sans",
    background: state.theme.primary,
    color: "#c5347d",
    border: "1px solid #c5347d",
    fontSize: "16px",
    transition: "1.5s",
    borderRadius: "100px",
  };

  return (
    <>
      <div style={toolContainer}>
        <div>
          <p>this is not done</p>
          <button style={btn}>start scanning</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
