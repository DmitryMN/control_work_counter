import React, {ChangeEvent, useState} from "react";
import "./setcounter.css";

type SetCounterPropsType = {
    valueMin: number
    valueMax: number
    error: boolean
    setValueMin: (value: number) => void
    setValueMax: (value: number) => void
    setError: (value: boolean) => void
    onIndicator: (ind: boolean) => void
}

const setErrorsMin = (value: number, max: number, setError: (value: boolean) => void, setValue: (value: number) => void) => {
    if(value < 0) {
        setError(true);
    } else if (value >= max) {
        setError(true);
    } else {
        setError(false)
    }
    setValue(value);
}

const setErrorsMax = (value: number, min: number, setError: (value: boolean) => void, setValue: (value: number) => void) => {
    if (value <= min) {
        setError(true);
    } else {
        setError(false)
    }
    setValue(value);
}

const SetCounter = (props: SetCounterPropsType) => {

    console.log(props.valueMin + " " + props.valueMax)

    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        let parseInt = e.currentTarget.value;
        setErrorsMin(+parseInt, props.valueMax, props.setError, props.setValueMin);
        props.onIndicator(false);
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        let parseInt = e.currentTarget.value;
        setErrorsMax(+parseInt, props.valueMin, props.setError, props.setValueMax);
        props.onIndicator(false);
    }

    return (
        <div className="setcounter_container">
            <div className="setcounter_form">
                <label>max value:</label>
                <input className={props.error && props.valueMax <= props.valueMin  ? "error" : ""}  value={props.valueMax} type="number" onChange={onChangeHandlerMax} />
            </div>
            <div className="setcounter_form">
                <label>start value:</label>
                <input className={props.error ? "error" : ""} value={props.valueMin} type="number" onChange={onChangeHandlerMin} />
            </div>
        </div>
    );
}

export default SetCounter;