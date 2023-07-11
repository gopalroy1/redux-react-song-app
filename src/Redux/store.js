import dataReducer from "./reducers/dataReducer";
import songReducer from "./reducers/songReducers";

import { createStore } from "redux";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    data: dataReducer,
    songs: songReducer
})


const store = createStore(rootReducer);

export default store;