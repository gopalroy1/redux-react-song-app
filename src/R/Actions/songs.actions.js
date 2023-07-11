// import { type } from "@testing-library/user-event/dist/type"
import { SELECT_SONGS } from "./ActionTypes"

//Role of the this file is to create action type

export const selectSongs =()=>{
    return{
        type:SELECT_SONGS,
        value: value
        
    }
}

export default selectSongs;