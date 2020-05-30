import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Detail } from "./routes";
import { GlobalStyle } from "./global";
function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
      <GlobalStyle />
    </Router>
  );
}

export default App;
