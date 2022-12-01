import React from "react";

const InputText = ({placeholder, children, onValueChange, error}) => {
    const style = {
        borderWidth: error ? 2 : 1,
        borderBottomWidth: 2,
        borderColor: error ? "red" : "#ccc",
        borderBottomColor: error ? "red" : "#F8D49A"
    }
    return(
        <div className={"form-control"}>
            <input
                type={"password"}
                style={style}
                placeholder={placeholder}
                onKeyUp={(event) => onValueChange(event.target.value)} />
            {children}
        </div>
    );
}

export default InputText;
