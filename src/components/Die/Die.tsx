import React from "react";

function Die({ side, stopRolling, isRolling, where }: Iprops) {
  const ariaLabelId = `caption-${where}dice`;
  return (
    <figure className="rolldice--die">
      <figcaption
        className="visually-hidden"
        id={ariaLabelId}
        aria-live="assertive"
      >
        Dice with side {side}
      </figcaption>
      {/* rotate-center if animate is true*/}
      <i
        className={`fas fa-dice-${side} ${isRolling ? "rotate-center" : ""}`}
        aria-labelledby={ariaLabelId}
        onAnimationEnd={stopRolling}
      ></i>
    </figure>
  );
}
interface Iprops {
  side: string;
  isRolling: boolean;
  stopRolling: (event: React.AnimationEvent<HTMLElement>) => void;
  where: "left" | "right";
}

export default Die;
