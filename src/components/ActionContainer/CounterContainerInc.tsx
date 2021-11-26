import React from "react";
import ActionContainer from "./ActionContainer";
import ViewField from "../ViewField/ViewField";
import "../SetCounter/setcounter.css";
import {CounterStateType} from "../Counter";

type CounterContainerIncPropsType = {
    counter: CounterStateType
    error: boolean
    incrementValue: () => void
    resetValue: () => void
}

const CounterContainerInc = ({counter, error, incrementValue, resetValue}: CounterContainerIncPropsType) => {

    return(
        <div className="counter_container">
            <ViewField currValue={counter.currValue} max={counter.max} error={error}/>
            <ActionContainer currValue={counter.currValue} max={counter.max} min={counter.min} incrementValue={incrementValue} resetValue={resetValue} />
        </div>
    );
}

export default CounterContainerInc;