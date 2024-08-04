import { useEffect, useState } from "react";

//Without Debounding
//Every change in field make the api call

export const Search = (props) =>{
    const [text,setText] = useState("");
    useEffect(()=>{
        console.log(text);
    })
    return(
        <div>
            <h2>Form Input with useEffect</h2>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

export default Search;