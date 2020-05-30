import React from "react";
import "./css/App.css";
import { Home } from "./routes";
import { Logo } from "./components";
import { GlobalStyle } from "./global";
function App() {
  return (
    <div className="App">
      <Logo />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
