import React, {useState, useEffect} from "react";
import './counter.css';
import CounterContainerSet from "./SetCounter/CounterContainerSet";
import CounterContainerInc from "./ActionContainer/CounterContainerInc";

export type CounterStateType = {
    min: number
    max: number
    currValue: number
}

const Counter = () => {

    const MaxMin = {
        maximum: 5,
        minimum: 0
    }

    const counterState: CounterStateType = {
        min: MaxMin.minimum,
        max: MaxMin.maximum,
        currValue: MaxMin.minimum
    }

    const [counter, setCounter] = useState<CounterStateType>(counterState);
    const [error, setError] = useState<boolean>(false)


    const setCounterValues = (min: number, max: number) => {
        setCounter({...counter, min: min, max: max, currValue: min});
    }

    const incrementValue = () => {
        if(counter.currValue < counter.max) {
            setCounter({...counter, currValue: counter.currValue + 1});
        }
    }

    const resetValue = () => {
        setCounter({...counter, currValue: counter.min});
    }

    return(
        <div className="counter">
            <CounterContainerSet min={counter.min} max={counter.max} error={error} setCounterValues={setCounterValues} setError={setError} />
            <CounterContainerInc counter={counter} error={error} incrementValue={incrementValue} resetValue={resetValue}/>
        </div>
    );
}

export default Counter;