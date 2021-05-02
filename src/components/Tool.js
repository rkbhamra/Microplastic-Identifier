import React, { useContext } from "react";
import "./Toggle.css";
import "./Tool.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

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
  const title = {
    color: state.theme.text,
    fontSize: "2.5em",
    fontFamily: "Work Sans",
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

  const scan = () => {};

  return (
    <>
      <div style={toolContainer}>
        <div className="tool-container">
          <p style={title}>
            Harness the Power of
            <span className="rainbow-text"> Machine Learning</span> with
            Holographic Imaging
          </p>
          <button className="button" style={btn} onClick={scan}>
            start scanning
          </button>
          <div className="frame">
            <div className="left">
              <blockquote
                cite="https://onlinelibrary.wiley.com/doi/full/10.1002/aisy.201900153"
                style={text}
              >
                "Microplastics (MPs) are a major environmental concern due to
                their possible impact on water pollution, wildlife, and the food
                chain. Reliable, rapid, and high‐throughput screening of MPs
                from other components of a water sample after sieving and/or
                digestion is still a highly desirable goal to avoid cumbersome
                visual analysis by expert users under the optical microscope."
              </blockquote>
            </div>
            <div className="right">
              <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/temp/lf20_iRxzMr.json"
                style={{ height: "500px", width: "500px", paddingTop: "6px" }}
              ></Player>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
