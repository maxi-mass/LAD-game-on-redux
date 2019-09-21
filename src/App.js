import React, {useEffect} from 'react';
import './App.css';
import {connect} from "react-redux";
import {
  setBoard,
  setGameOver,
  setCurrentPlayer,
  setMessage,
} from "./redux/game-reducer";
import Table from "./components/Table/Table";

const App = (props) => {
  // Начало новой игры
  const initGame = () => {
    // Создаем пустое игровое поле, представляющее собой 7 столбцов в 6 клеток высотой
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) {
        row.push(null)
      }
      board.push(row);
    }

    props.setBoard(board);
    props.setCurrentPlayer(props.player1);
    props.setGameOver(props.isGameOver);
    props.setMessage(props.message);
  };

  const play = (c) => {
    if (!props.isGameOver) {
      // Закрасить поле на доске после хода игрока
      let board= props.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = props.currentPlayer;
          break;
        }
      }

      // Проверка статуса после хода игрока
      let result = checkAll(board);
      if (result === props.player1) {
        props.setBoard(board);
        props.setGameOver(true);
        props.setMessage('Игрок 1 (красные фишки) выиграл!');
      } else if (result === props.player2) {
        props.setBoard(board);
        props.setGameOver(true);
        props.setMessage('Игрок 2 (желтые фишки) выиграл!' );
      } else if (result === 'draw') {
        props.setBoard(board);
        props.setGameOver(true);
        props.setMessage('Ничья.');
      } else {
        props.setBoard(board);
        (props.currentPlayer === props.player1) ? props.setCurrentPlayer(props.player2) : props.setCurrentPlayer(props.player1);
      }
    } else {
      props.setMessage('Game over. Начните новую игру.');
      props.setGameOver(false);
    }
  };

  const checkVertical = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
              board[r][c] === board[r - 2][c] &&
              board[r][c] === board[r - 3][c]) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkHorizontal = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c + 1] &&
              board[r][c] === board[r][c + 2] &&
              board[r][c] === board[r][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDiagonalRight = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
              board[r][c] === board[r - 2][c + 2] &&
              board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDiagonalLeft = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
              board[r][c] === board[r - 2][c - 2] &&
              board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDraw = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';
  };

  const checkAll = (board) => {
    return checkVertical(board) || checkDiagonalRight(board) || checkDiagonalLeft(board) || checkHorizontal(board) || checkDraw(board);
  };

  useEffect(() => {
    initGame();
  }, []);

    return <Table
        board={props.board}
        message={props.message}
        initGame={initGame}
        play={play}
    />
};

export default connect(state => ({
  player1: state.game.player1,
  player2: state.game.player2,
  currentPlayer: state.game.currentPlayer,
  board: state.game.board,
  isGameOver: state.game.isGameOver,
  message: state.game.message
}), {setCurrentPlayer, setMessage, setGameOver, setBoard})(App);
