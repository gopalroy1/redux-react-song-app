// import { type } from "@testing-library/user-event/dist/type"
import { SELECT_SONGS } from "./actionTypes"

//Role of the this file is to create action type

export const selectSongs =()=>{
    return{
        type:SELECT_SONGS,
        payload: song
    }
}