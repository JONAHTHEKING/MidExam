
export const setfilter = (value) => async dispatch => {

    dispatch ({
        type: "krupakar",
        payload: value
    })
}

export const resetfilter = () => async dispatch => {
    dispatch ({
        type: "RESETFILTER",
    
    })
}





