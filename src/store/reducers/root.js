import { combineReducers } from "redux"
import quoteReducer from "./quote";

const rootReducer = combineReducers({
    quoteReducer,
})

export default rootReducer