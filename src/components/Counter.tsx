import React, {useState, useEffect} from "react";
import './counter.css';
import CounterContainerSet from "./SetCounter/CounterContainerSet";
import CounterContainerInc from "./ActionContainer/CounterContainerInc";

export type CounterStateType = {
    min: number
    max: number
    currValue: number
    // indicator: boolean
}

const Counter = () => {

    const MaxMin = {
        maximum: 5,
        minimum: 0
    }

    const counterState: CounterStateType = {
        min: MaxMin.minimum,
        max: MaxMin.maximum,
        currValue: MaxMin.minimum,
        // indicator: true
    }

    const [counter, setCounter] = useState<CounterStateType>(counterState);
    const [error, setError] = useState<boolean>(false);
    const [indicator, setIndicator] = useState<boolean>(true);
    const [valueMin, setValueMin] = useState<number>(MaxMin.minimum);
    const [valueMax, setValueMax] = useState<number>(MaxMin.maximum);


    useEffect(() => {
        let min = localStorage.getItem("min");
        let max = localStorage.getItem("max");
        if(min && max) {
            setCounter({...counter, min: JSON.parse(min), max: JSON.parse(max), currValue: JSON.parse(min)});
            setValueMin(JSON.parse(min));
            setValueMax(JSON.parse(max));
        }
     }, []);

    const setCounterValues = (min: number, max: number) => {
        localStorage.setItem("min", JSON.stringify(min));
        localStorage.setItem("max", JSON.stringify(max));
        setCounter({...counter, min: min, max: max, currValue: min});
    }

    const incrementValue = () => {
        if(counter.currValue < counter.max) {
            setCounter({...counter, currValue: counter.currValue + 1});
        }
    }

    const onIndicator = (ind: boolean) => {
        setIndicator(ind);
    }

    const resetValue = () => {
        setCounter({...counter, currValue: counter.min});
    }


    return(
        <div className="counter">
            <CounterContainerSet min={valueMin} max={valueMax}
                                 error={error} setCounterValues={setCounterValues}
                                 setError={setError} onIndicator={onIndicator} indicator={indicator} setValueMin={setValueMin} setValueMax={setValueMax}/>
            <CounterContainerInc counter={counter} error={error} indicator={indicator} incrementValue={incrementValue} resetValue={resetValue} />
        </div>
    );
}

export default Counter;