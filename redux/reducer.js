import * as types from './actionTypes'

const initialState = {
    quotes: []
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_QUOTES:
            return {
                ...state,
                quotes: action.payload
            }
    }
    return state;
}

export default reducer;