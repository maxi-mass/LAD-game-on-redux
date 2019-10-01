import {combineReducers, createStore, applyMiddleware} from "redux";
import {gameReducer} from "./game-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    game: gameReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;