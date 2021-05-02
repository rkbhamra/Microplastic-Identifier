import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "./Toggle.css";
function ToggleTheme() {
  const state = useContext(ThemeContext);

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

  const container = {};

  return (
    <div style={container}>
      <button
        variant="contained"
        onClick={() => {
          state.setTheme(state.theme.type);
        }}
        style={btn}
        class="button"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ToggleTheme;
