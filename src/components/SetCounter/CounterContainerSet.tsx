import React, {useState} from "react";
import "./setcounter.css";
import SetCounter from "./SetCounter";
import Button from "../ActionContainer/Button";

type CounterContainerType = {
    min: number
    max: number
    error: boolean
    setCounterValues: (min: number, max: number) => void
    setError: (value: boolean) => void
    onIndicator: (ind: boolean) => void
    indicator: boolean
    setValueMin: (value: number) => void
    setValueMax: (value: number) => void
}

const CounterContainerSet = ({min, max, error, setCounterValues, setError, onIndicator, indicator, setValueMin, setValueMax}: CounterContainerType) => {

    const onClickCallBack = () => {
        onIndicator(true);
        setCounterValues(min, max);
    }


    return(
        <div className="counter_container">
            <SetCounter valueMin={min} valueMax={max} error={error} setValueMin={setValueMin} setValueMax={setValueMax} setError={setError} onIndicator={onIndicator}/>
            <div className="btn_container">
                <Button name={"set"} callBack={onClickCallBack} disabledBtn={indicator}/>
            </div>
        </div>
    );
}

export default CounterContainerSet;