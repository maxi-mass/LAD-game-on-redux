import React, {useEffect} from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {setData,play, setGameOver} from "./../../redux/game-reducer";
import Table from "./Table/Table";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

const Game = (props) => {
  const initGame = () => {
    props.setData();
  }

  const play = (columnIndex) => {
    props.play({columnIndex, currentPlayer: props.currentPlayer})
  };

  useEffect(() => {
    initGame();
  }, []);

  if (!props.location.state) {
    return <Redirect to={"/"} />
  }

  
  if (props.isGameOver) {
    if (props.message !== '') {
      setGameOver(false);
      return <Redirect to={{
          pathname: "/game-over",
          state: {message: props.message}
      }}/>
    }
  }
  
  return <Table
      board={props.board}
      message={props.message}
      initGame={initGame}
      play={play}
  />
};

let mapStateToProps = state => ({
  currentPlayer: state.game.currentPlayer,
  board: state.game.board,
  isGameOver: state.game.isGameOver,
  message: state.game.message
});

export default compose(
  connect(mapStateToProps, {setData, play}),
  withRouter
)(Game);