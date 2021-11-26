import React, {ChangeEvent, useState} from "react";
import "./setcounter.css";

type SetCounterPropsType = {
    min: number
    max: number
    error: boolean
    setValueMin: (value: number) => void
    setValueMax: (value: number) => void
    setError: (value: boolean) => void
}

const SetCounter = (props: SetCounterPropsType) => {

    const errors = "error";

    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        let parseInt = e.currentTarget.value;
        +parseInt < 0 ? props.setError(true) : props.setError(false);
        props.setValueMin(+parseInt);
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        let parseInt = e.currentTarget.value;
        props.setValueMax(+parseInt);
    }

    return (
        <div className="setcounter_container">
            <div className="setcounter_form">
                <label>max value:</label>
                <input value={props.max} type="number" onChange={onChangeHandlerMax}  min={props.min}/>
            </div>
            <div className="setcounter_form">
                <label>start value:</label>
                <input className={props.error ? errors : ""} value={props.min} type="number" onChange={onChangeHandlerMin} />
            </div>
        </div>
    );
}

export default SetCounter;