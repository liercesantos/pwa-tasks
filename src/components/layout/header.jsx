import React from "react";

const Header = ({title}) => {
    return(
        <div className={"header-container"}>
            <h1 className={"title"}>{title}</h1>
        </div>
    );
}

export default Header;
