import { combineReducers } from "redux";
import {createItems} from "./createItems";
import { addCart } from "./addCart";


const rootReducer = combineReducers({
  createItems,
  addCart


})

export default rootReducer;