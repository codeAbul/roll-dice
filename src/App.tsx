import React, { Fragment } from "react";
import "./App.css";
import RollDice from "./components/RollDIce";

const App: React.FC = () => {
  return (
    <Fragment>
      <header>
        <h1>Roll Dice</h1>
        <small>'Cause you got nothin' better to do</small>
      </header>
      <main>
        <RollDice />
      </main>
    </Fragment>
  );
};

export default App;
