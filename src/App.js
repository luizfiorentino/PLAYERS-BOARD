import logo from "./logo.svg";
import "./App.css";
import Player from "./Player";
import Scoreboard from "./Scoreboard";
import Title from "./Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
