// import { legacy_createStore as createStore,applyMiddleware } from "redux";


import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { useSelector } from "react-redux";


import reducer from "./Reducer";
import filter_name from "./Reducer/filterreducer";

// const initialstate = {

//     counter : 0
// }

// const counterReducer = (state= initialstate, action) => {

//     switch (action.type){
//         case "increment":
//             return {
//                 counter : state.counter + 1
//             };
            
//                 case "decrement":
//                     return {
//                         counter : state.counter - 1
//                     };
//                     default:
//                         return state;
//     }
// };


const middleware = [thunk];
const store = createStore ( 
   
    reducer,
     composeWithDevTools(applyMiddleware(...middleware)),
    
    

)

export default store;