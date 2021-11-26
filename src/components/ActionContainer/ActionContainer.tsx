import React from "react";
import "./actioncontainer.css";
import Button from "./Button";


type ActionContainerProps = {
    currValue: number
    max: number
    min: number
    incrementValue: () => void
    resetValue: () => void
}

const ActionContainer = ({incrementValue, resetValue, currValue, max, min }: ActionContainerProps) => {

    const callBackInc = () => {
        incrementValue();
    }

    const callBackReset = () => {
        resetValue();
    }

    return(
        <div className="actionContainer">
            <Button name={"inc"} callBack={callBackInc} disabledBtn={currValue === max}/>
            <Button name={"reset"} callBack={callBackReset}  disabledBtn={currValue === min}/>
        </div>
    );
}

export default ActionContainer;