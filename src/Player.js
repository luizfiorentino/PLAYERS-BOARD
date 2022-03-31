import React from "react";

export default function Player(props) {
  // Event listener callback:
  const onClickIncrement = () => {
    // Call the cb prop passed down from Scoreboard
    props.incrementScore(props.id);
  };

  return (
    <div>
      <p>****</p>
      <h3>
        {props.name} ~" {props.score}
      </h3>

      <button onClick={onClickIncrement}>
        Click here to boost my score ;)
      </button>
    </div>
  );
}
