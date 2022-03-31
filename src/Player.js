import React from "react";

export default function Player(props) {
  return (
    <div>
      <p>****</p>
      <h3>{props.name}</h3>
      <p>{props.score}</p>
    </div>
  );
}
