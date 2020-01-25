import React, { useState } from "react";
import Die from "../Die/Die";

function RollDice() {
  const [dieOne, setDieOne] = useState("one");
  const [dieTwo, setDieTwo] = useState("one");
  const [isRolling, setIsRolling] = useState(false);

  return (
    <article className="rolldice">
      <Die side={dieOne} stopRolling={stopRolling} isRolling={isRolling} where="left" />
      <Die side={dieTwo} stopRolling={stopRolling} isRolling={isRolling} where="right" />
      <button
        type="button"
        className="rolldice--control"
        onClick={roll}
        disabled={isRolling}
      >
        {isRolling ? "Rolling Dice..." : "Roll Dice"}
      </button>
    </article>
  );

  function roll() {
    // Choose a random side between 1 and 6 for initial state
    setDieOne(randomSide(1, 6));
    setDieTwo(randomSide(1, 6));
    setIsRolling(true);
  }

  function stopRolling({ target }: React.AnimationEvent<HTMLElement>) {
    if (isRolling) setIsRolling(false);
  }
}

function randomSide(num1: number, num2: number) {
  const sides = ["one", "two", "three", "four", "five", "six"];
  return sides[Math.floor(Math.random() * (num2 - num1 + 1))];
}

export default RollDice;
