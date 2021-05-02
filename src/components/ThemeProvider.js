import React, { useState } from "react";

export const ThemeContext = React.createContext({
  theme: {
    type: "light",
    primary: "#00bfa5",
    text: "#black",
  },
  setTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const theme = {
    light: {
      type: "light",
      primary: "white",
      text: "black",
    },
    dark: {
      type: "dark",
      primary: "#212121",
      text: "white",
    },
  };

  const setTheme = (type) => {
    setState({ ...state, theme: type === "dark" ? theme.light : theme.dark });
  };

  const initState = {
    theme: theme.dark,
    setTheme: setTheme,
  };

  const [state, setState] = useState(initState);

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
};
