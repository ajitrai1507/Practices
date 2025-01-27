import { useState } from "react";
import './NotePad.css';

function NotePad(){

    const [inputValue , setInputValue] = useState("");

    const ChangeMethod = (event)=>{
        const newVal = event.target.value;
        setInputValue(newVal)
    }
    return(
        <div className="notePad">
            <p className="para">{inputValue}</p>
            <input className="inputField" type="text" value={inputValue} placeholder="type something...." onChange={ChangeMethod} />
        </div>
    )
}

export default NotePad;