import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./routes";
import { Logo } from "./components";
import { GlobalStyle } from "./global";
function App() {
  return (
    <Router className="App">
      <Logo />
      <Route exact path="/" component={Home} />
      <GlobalStyle />
    </Router>
  );
}

export default App;
