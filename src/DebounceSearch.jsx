import { useEffect, useState } from "react";

//Debounding
//On Every change whenever the amount of delay in time occurs the api get call

export const DebounceSearch = (props) => {
    //Approach 1
    
    // const [text, setText] = useState("");
    // let timer = 0;

    // const deboundfunc = (func, delay) => {
    //     debugger;
    //     if (timer) {
    //         clearTimeout(timer)
    //     }

    //     return function () {
    //         timer = setTimeout(() => {
    //             func();
    //         }, delay)
    //     }
    // }


    // return (
    //     <div>
    //         <h2>Form Input with Debounding</h2>
    //         <input type="text" value={text} onChange={deboundfunc((e) => {
    //             setText(e.target.value);
    //             console.log(e.target.value);
    //         }, 1000)} />
    //     </div>
    // )

    //Approach 2

    const [text,setText] = useState("");
    useEffect(()=>{
       let timer= setTimeout(() => {
            console.log(text);
        }, 2000);
        return ()=>clearTimeout(timer)
    })
    return(
        <div>
            <h2>Form Input with useEffect</h2>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

export default DebounceSearch;

// (e)=>setText(e.target.value)