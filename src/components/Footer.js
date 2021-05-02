import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Footer() {
  const state = useContext(ThemeContext);

  const footer = {
    backgroundColor: state.theme.primary,
    color: state.theme.text,
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={footer}>© 2021 Slyx MicroPlastic Identifier</div>;
}
