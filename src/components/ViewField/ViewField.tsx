import React from "react";
import "./viewfiled.css";

type ViewFieldProps = {
    currValue: number
    max: number
    error: boolean
}

const ViewField = ({currValue, max, error} : ViewFieldProps) => {

    let color = ""

    if(currValue >= max) {
        color = "indicate";
    }

    return(
        <div className="viewFiled">
            {error ? <span className="is_error">in correct value</span> : <span className={color}>{currValue}</span>}
        </div>
    );
}

export default ViewField;