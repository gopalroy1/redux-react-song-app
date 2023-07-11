import { SELECT_SONGS } from "../Actions/actionTypes";

const INITIAL_STATE = null;


const songReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SELECT_SONGS:
            return action.payload
        default:
            return state
    }
}

export default songReducer;