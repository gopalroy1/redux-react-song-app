import React from "react";
import { useSelector } from "react-redux";

const SongList =()=>{

    let data = useSelector((state)=> state.data);



    return(


        <div>
            <h1>List of the songs are </h1>
            {
                data.map((song)=>(
                   <h1>song.name</h1>
                ))
            }
        </div>
    )
}


export default SongList;
