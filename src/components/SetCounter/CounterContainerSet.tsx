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
}

const CounterContainerSet = ({min, max, error, setCounterValues, setError}: CounterContainerType) => {

    let value = 0;
    let maxs = 2;

    const [valueMin, setValueMin] = useState<number>(min);
    const [valueMax, setValueMax] = useState<number>(max);

    const onClickCallBack = () => {
        setCounterValues(valueMin, valueMax);
    }

    return(
        <div className="counter_container">
            <SetCounter min={valueMin} max={valueMax} error={error} setValueMin={setValueMin} setValueMax={setValueMax} setError={setError}/>
            <div className="btn_container">
                <Button name={"set"} callBack={onClickCallBack} disabledBtn={value === maxs}/>
            </div>
        </div>
    );
}

export default CounterContainerSet;