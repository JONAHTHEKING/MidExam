import { combineReducers } from "redux";
import filterreducer from "./filterreducer"
import counterReducer from "./maths";


const reducer = combineReducers({
  counterReducer: counterReducer,
  filterreducer: filterreducer,

})
export default reducer;
