import { useState } from "react"

export const LiftState = () => {
    const [empname, setEmpname] = useState("");
    return (
        <>
            <InputField inempname={empname} ipsetEmpname={setEmpname}/>
            <ShowName employeeName = {empname}/>
        </>
    )
}

export const InputField = (props) => {
    return (
        <>
            <input type='text' value={props.inempname} placeholder="Enter name" onChange={(e) => props.ipsetEmpname(e.target.value)} />
        </>
    )
}

export const ShowName = (props) => {
    return (
        <div>
            <h2>My name is : {props.employeeName}</h2>
        </div>
    )
}

export default LiftState;