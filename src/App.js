import logo from "./logo.svg";
import "./App.css";
import { ThemeContextProvider } from "./components/ThemeProvider";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Tool from "./components/Tool";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route path="/tool">
            <Tool />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
