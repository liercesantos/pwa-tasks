import React from "react";

const InputText = ({placeholder, children, defaultValue, onValueChange, error, readOnly}) => {
  const style = {
    borderWidth: error ? 2 : 1,
    borderBottomWidth: 2,
    borderColor: error ? "red" : "#ccc",
    borderBottomColor: error ? "red" : "#F8D49A"
  }
  return(
    <div className={"form-control"}>
      <input
        type={"text"}
        style={style}
        placeholder={placeholder}
        defaultValue={defaultValue ?? undefined}
        readOnly={readOnly ?? false}
        onKeyUp={(event) => {
          if(!readOnly){
            onValueChange(event.target.value)
          }
        }} />
      {children}
    </div>
  );
}

export default InputText;
