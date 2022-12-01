import React from "react";

const ButtonSecondary = ({children, onPress}) => {
    return(
        <div>
            <button className={"button-secondary"} onClick={onPress}>
                {children}
            </button>
        </div>
    );
}
export default ButtonSecondary;
