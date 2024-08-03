import React, {useState} from 'react';
import './Counter.css'


const Counter = () => {

    const [value, setValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const increment = () => {
        setValue(value + 1);
    };
    const decrement = () => {
        setValue(value - 1)
    };
    const reset = () => {
        setValue(0);
    }
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    const changeInputName = (e) =>{
        setInputValue(e.target.value);
    }
    return (
        <div className='main_container'>
        <div className='counter_container'>
            <h1 className='container_title'>{inputValue}</h1>
            {!isVisible && (<h1 className='counter_value'>{value}</h1>)}
            <h1 className='container_title'>Name your counter: </h1>
            <input type='text' placeholder='Name me' onChange={changeInputName} value={inputValue} />
            <div className='button_container'>
                <button onClick={increment} className='button_element'>Increment</button>
                <button onClick={decrement} className='button_element'>Decrement</button>
                <button onClick={reset} className='button_element'>Reset</button>
                <button onClick={toggleVisibility} className='button_element'>Try me!!!</button>
            </div>
        </div>
        </div>
    );
};


export default Counter;
