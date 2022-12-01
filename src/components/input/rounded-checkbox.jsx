import React from "react";
import RoundUncheckedIcon from "../../assets/icons/round-unchecked";
import RoundCheckedIcon from "../../assets/icons/round-checked";

const RoundedCheckbox = ({checked, action}) => {

    return(
        <div onClick={action}>
            {checked ? <RoundCheckedIcon /> : <RoundUncheckedIcon />}
        </div>
    );
}

export default RoundedCheckbox;
