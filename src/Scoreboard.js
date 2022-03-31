import React from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  return (
    <div className="Scoreboard">
      <h3> #### Check out the Scores #### </h3>
      <ul>
        <Player name="Penelope" />
        <Player name="Nathalia" />
        <Player name="Tio Joao" />
        <Player name="Percivaldo" />
      </ul>
      <AddPlayerForm />
    </div>
  );
}
