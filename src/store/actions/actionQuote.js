import {ADD_FAVORITE, ADD_QUOTE, QUOTE_FETCH_SUCCESS} from "./actionType";
import {quoteAPI} from "../../provider/api";

export const quoteFetch = (payload) => {
    return {
        type: QUOTE_FETCH_SUCCESS,
        payload
    }
}
export const addQuote = (payload) => {
    return {
        type: ADD_QUOTE,
        payload
    }
}
export const addFavorite = (payload) => {
    return {
        type: ADD_FAVORITE,
        payload
    }
}


export const fetchQuote = () => {
    return (dispatch) => {
        return quoteAPI.get()
            .then(({data}) => {
                dispatch(quoteFetch(data.quote))
            })
    }
}

export const addQuoteToFavorite = (payload) => {
    return (dispatch) => {
        dispatch(addFavorite(payload))
    }
}

export const addPersonalQuote = (payload) => {
    return (dispatch) => {
        dispatch(addQuote(payload))
    }
}