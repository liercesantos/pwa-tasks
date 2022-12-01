import React from "react";

const ButtonPrimary = ({children, onPress}) => {
    return(
        <div>
            <button className={"button-primary"} onClick={onPress}>
                {children}
            </button>
        </div>
    );
}
export default ButtonPrimary;
