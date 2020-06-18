import React from "react";
import "./App.css";
import NavBarContainer from "../containers/NavBarContainer";
import RoutesContainer from "../routes/RoutesContainer";
function App() {
  return (
    <div className="whole-page">
      <NavBarContainer />
      <RoutesContainer />
    </div>
  );
}

export default App;
