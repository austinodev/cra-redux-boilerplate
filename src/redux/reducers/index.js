import { combineReducers } from "redux";
import { valueReducer } from "./value_reducer";

export default combineReducers({
    value: valueReducer,
})
