import React from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import { useState } from "react";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score");
  const [players, set_players] = useState([
    {
      id: 1,
      name: "Penelope",
      score: 22,
    },
    {
      id: 2,
      name: "Nathalia",
      score: 14,
    },
    {
      id: 3,
      name: "Tio Joao",
      score: 18,
    },
    {
      id: 4,
      name: "Percivaldo",
      score: 30,
    },
  ]);

  // Defining the callback function
  const incrementScore = (id) => {
    const new_players_array = players.map((p) => {
      // decide whether increment this players score or not
      if (p.id === id) {
        return {
          // copying over the players object's data
          ...p,
          // now override the incremented score property
          score: p.score + 1,
        };
      } else {
        return p;
      }
    });
    set_players(new_players_array);
    console.log("Player clicked", id);
  };

  // Using the spread operator: first "copy the array"
  // Then, sort it with the compare_score callback function
  const players_sorted =
    sort_by === "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name);
  // ****** can also do:
  // cons players_sorted = [...players].sort(sort_by === "name" ? compare_name : compare_value)
  const change_sorting = (event) => {
    console.log("new sort order", event.target.value);
    set_sort_by(event.target.value);
  };

  return (
    <div className="Scoreboard">
      <h3> #### Check out the Scores #### </h3>
      <p>
        Sort by {""}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Score</option>
          <option value="name">Name</option>
        </select>
      </p>
      <ul>
        {players_sorted.map((p, id) => (
          <Player
            key={p.id}
            id={p.id}
            name={p.name}
            score={p.score}
            // Passing it down as a callback prop
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm />
    </div>
  );
}
