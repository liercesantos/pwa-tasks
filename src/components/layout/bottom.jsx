import React from "react";
import HomeIcon from "../../assets/icons/home";
import DashboardIcon from "../../assets/icons/dashboard";
import AccountIcon from "../../assets/icons/account";
import {Link} from "react-router-dom";

const Bottom = () => {

    return(
        <div className={"bottom-container"}>
            <span className={"home"}>
                <Link to={"/"}>
                    <HomeIcon />
                </Link>
            </span>
            <span className={"dashboard"}>
                <Link to={"/dashboard"}>
                    <DashboardIcon />
                </Link>
            </span>
            <span className={"account"}>
                <Link to={"/account"}>
                    <AccountIcon />
                </Link>
            </span>
        </div>
    );
}

export default Bottom;
