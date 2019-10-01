import React from 'react';
import Game from "./components/Game/Game";
import Greeting from "./components/Greeting/Greeting";
import GameOver from "./components/GameOver/GameOver";
import {Route} from "react-router-dom";

const App = () => {
  return <>
    <Route exact path="/" render = {() => <Greeting />} />
    <Route exact path="/game" render = {() => <Game />} />
    <Route exact path="/game-over" render = {() => <GameOver />} />
  </>;
}

export default App;
