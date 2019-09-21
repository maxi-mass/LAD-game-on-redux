import {combineReducers, createStore} from "redux";
import {gameReducer} from "./game-reducer";

let reducers = combineReducers({
    game: gameReducer,
});

let store = createStore(reducers);

export default store;