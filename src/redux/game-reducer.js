const SET_BOARD = 'SET-BOARD';
const SET_CURRENT_PLAYER = 'SET-CURRENT-PLAYER';
const SET_GAME_OVER = 'SET-GAME-OVER';
const SET_MESSAGE = 'SET-MESSAGE';

let initialState = {
    player1: 1,
    player2: 2,
    currentPlayer: null,
    board: [],
    isGameOver: false,
    message: ""
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOARD:
            return {
                ...state,
                board: action.board.map(column => column.map(cell => cell))
            };
        case SET_CURRENT_PLAYER:
            return {
                ...state,
                currentPlayer: action.currentPlayer
            };
        case SET_GAME_OVER:
            return {
                ...state,
                isGameOver: action.isGameOver
            };
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    }
};

export const setBoard = board => ({type: SET_BOARD, board});
export const setGameOver = isGameOver => ({type: SET_GAME_OVER, isGameOver});
export const setCurrentPlayer = currentPlayer => ({type: SET_CURRENT_PLAYER, currentPlayer});
export const setMessage = message => ({type: SET_MESSAGE, message});