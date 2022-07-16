import { createStore } from "redux";
import rooted from './redux/reducers/main';


const store = createStore(
    rooted
);

export default store;