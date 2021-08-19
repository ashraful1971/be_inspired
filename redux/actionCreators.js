import * as types from './actionTypes'
import axios from 'axios';

export const load_quotes = () => dispatch => {
    axios.get("https://api.quotable.io/quotes")
    .then(response=>dispatch(get_quotes(response.data)))
    .catch(error=>console.log("******* = "+error.message));
};

export const get_quotes = (quotes) =>  {
    return {
        type: types.GET_QUOTES,
        payload: quotes
    }
}