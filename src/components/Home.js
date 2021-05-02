import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "./ThemeProvider";
import AppBar from "./AppBar";
import Footer from "./Footer";
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
            {/* <span style={text}></span>{" "} */}
            <span className="rainbow-text">Slyx. </span>
            <span style={text}> Powered by DCP and ML</span>
          </h1>
          <h2 className="h2" style={text}>
            The widespread environmental presence of microplastics and adverse
            biological effects of micro and nano-sized waste demands
            quantifcation at the smallest possible size to perform an ecological
            risk assessment effectively. Slyx is the solution.
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
      <Footer />
    </>
  );
}
