import React from "react";

const TextDivider = ({text}) => {
    return(
        <div className="line-divider">
            <span className={"line-divider-text"}>
                {text}
            </span>
        </div>
    );
}
export default TextDivider;
