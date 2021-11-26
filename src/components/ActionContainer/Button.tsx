import React from "react";
import "./button.css"

type ButtonProps = {
    name: string
    callBack: () => void
    disabledBtn: boolean
}

const Button = ({name, callBack, disabledBtn}: ButtonProps) => {

    return(
        <button className="btn" disabled={disabledBtn} onClick={callBack}>
            {name}
        </button>
    );
}

export default Button;