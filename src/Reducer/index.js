import { combineReducers } from "redux";
import filterreducer from "./filterreducer"
import maths from "./maths"
import counterReducer from "./maths";


const reducer = combineReducers({
  counterReducer: counterReducer,
  filterreducer: filterreducer,
  // maths: maths
})
export default reducer;
