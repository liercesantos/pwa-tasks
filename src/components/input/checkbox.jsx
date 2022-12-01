import React, {useState} from "react";
import UncheckedIcon from "../../assets/icons/unchecked";
import CheckedIcon from "../../assets/icons/checked";

const Checkbox = ({action}) => {
    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!checked);
        action();
    }

    return(
        <div onClick={handleCheck}>
            {checked ? <CheckedIcon /> : <UncheckedIcon />}
        </div>
    );
}

export default Checkbox;
