import React, {useState} from 'react';
import './Counter.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './imgs/d89a71bccaecd2492ca54f55912135d1.jpg';

const CounterSofa = () => {
    const [value, setValue] = useState(1);
    const [tupoiValue, setTupoiValue] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const Increment = () => {
        setValue(value + 1);
    };
    const Decrement = () => {
        setValue(value - 1)
    };
    const Reset = () => {
        setValue(1);
    }

    const First = () => {
        setTupoiValue(38);
    }

    const Second = () => {
        setTupoiValue(22);
    }

    const Angry = () => {
        setTupoiValue(18);
    }

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    const changeInputName = (e) =>{
        setInputValue(e.target.value);
    }
    return (
        <div className='main_container'>
            {!isVisible && (
            <div className='counter_container'>
                    <h1 className='container_title'>{inputValue}</h1>
                <h1 className='container_title'>Количество невыполненных обещаний Гриши перед своей королевой:  </h1>
                <h1 className='counter_value'>{value}</h1>
                {value >= 2 && (<h1 className='container_title_blin'>Было только одно.</h1>)}
                {value === 0 && (<h1 className='container_title_blin'>Можешь зайти в доту <FavoriteIcon /></h1>)}
                {value < 0 && (<h1 className='container_title_blin'>???</h1>)}
                {/*<input type='text' placeholder='Name me' onChange={changeInputName} value={inputValue} />*/}
                <div className='button_container'>
                    <button onClick={Increment} className='button_element_first'>+1</button>
                    <button onClick={Decrement} className='button_element'>-1</button>
                    <button onClick={Reset} className='button_element'>Сброс</button>
                    <button onClick={toggleVisibility} className='button_element'>Можно вопросик?</button>
                </div>
            </div>
                )}
            {isVisible && (
                <div className='counter_container'>
                    <h1 className='container_title'>Я по прежнему тупой?...</h1>
                    {tupoiValue === 38 && (<h1 className='container_title_blin'><FavoriteIcon /></h1>)}
                    {tupoiValue === 22 && (<h1 className='container_title_blin'><FavoriteIcon /> <FavoriteIcon /></h1>)}
                    {tupoiValue === 18 && (<h1 className='container_title_zloi'>>:(</h1>)}
                    {/*<input type='text' placeholder='Name me' onChange={changeInputName} value={inputValue} />*/}
                    <div className='button_container'>
                        <button onClick={First} className='button_element_first'>Нет</button>
                        <button onClick={Second} className='button_element'>Конечно нет!</button>
                        <button onClick={Angry} className='button_element'>Я подумаю</button>
                        <button onClick={toggleVisibility} className='button_element'>Назад к обещаниям</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CounterSofa;