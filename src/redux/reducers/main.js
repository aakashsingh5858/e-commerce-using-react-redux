import { combineReducers } from "redux";
import { cartreducer } from "./reducer";


const rooted = combineReducers({
    cartreducer
});

export default rooted;

