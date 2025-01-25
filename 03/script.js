import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function App(){
    let [count, setCount] = useState(0)

    function increment(){
        if(count>=20){
            alert("Value is greater than 20")
            return;
        }
        count = count+1;
        setCount(count)
    }

    function decrement(){
        if(count<=0){
            alert("value is less than 0")
            return;
        }
        count = count-1;
        setCount(count)
    }

    return(
        <div className='counter_box'>
            <h2>Count is {count}</h2>
            <div className='btns'>
                <button onClick={increment} className='btn'>Increment</button>
                <button onClick={decrement} className='btn'>Decrement</button>
            </div>
        </div>
    )
}


const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>)