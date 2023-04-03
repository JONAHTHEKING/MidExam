
const initialstate = {

    counter : 0,
  
}

const counterReducer = (state= initialstate, action) => {

    switch (action.type){
        case "increment":
            return {
                counter : state.counter + 1,
               
            };
            
                case "decrement":
                    return {
                        counter : state.counter - 1
                    };

                    default:
                        return state;
    }
};
export default counterReducer