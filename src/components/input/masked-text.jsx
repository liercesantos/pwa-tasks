import React from "react";
import MaskedInput from 'react-text-mask'

const MaskedText = (props) => {
    const {placeholder, children, mask, onValueChange} = props;

    return(
        <div className={"form-control"}>
            <MaskedInput mask={mask} placeholder={placeholder} onChange={(event) => onValueChange(event.target.value)} />
            {children}
        </div>
    );
}

export default MaskedText;
