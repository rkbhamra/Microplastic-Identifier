import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "./ThemeProvider";
import AppBar from "./AppBar";

export default function Home() {
  const state = useContext(ThemeContext);
  const container = {
    backgroundColor: state.theme.primary,
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
      <div style={container} className="container">
        <div className="text">
          <h1 className="h1">
            <span style={text}> voluptates </span>{" "}
            <span className="rainbow-text">magnam. </span>
            <span style={text}>somdoj</span>
          </h1>
          <h2 className="h2" style={text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            eveniet in optio, quibusdam ea voluptatibus architecto quisquam
            velit. Unde, necessitatibus.
          </h2>
        </div>
        <div
          style={{
            zIndex: "100",
            margin: "auto",
            width: "fit-content",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "2.5%",
            zIndex: "100",
          }}
        >
          <button style={btn}> Get Started</button>
        </div>
        <img className="img" src="./dot.png"></img>
      </div>
    </>
  );
}
