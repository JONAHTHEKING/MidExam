
const initialState = {

    filter_name: "ALL",

}

const filter_name = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case "krupakar":
            return { ...state, filter_name: payload };

        case "RESETFILTER":
            return { ...state, filter_name: "ALL" };
        default:
            return state;


    }

}
export default filter_name












