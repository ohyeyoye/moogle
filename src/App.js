import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, Detail } from "routes";
function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
