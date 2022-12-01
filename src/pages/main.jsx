import React, {useEffect} from "react";
import {BrowserRouter, useLocation} from "react-router-dom";
import {
    Routes,
    Route,
} from "react-router";
import Container from "../components/layout/container";
import Login from "./login";
import Register from "./register";
import Home from "./home";
import {useGuard} from "../contexts/GuardContext";
import GuardControl from "../controls/guard-control";
import Dashboard from "./dashboard";
import Account from "./account";
import firebase from "../services/firebase";

const GuestRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

const GuardRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={
                    <Container
                        title={"Home"}
                        component={<Home />}
                    />
                }
            />
            <Route
                path="/dashboard"
                element={
                    <Container
                        title={"Dashboard"}
                        component={<Dashboard />}
                    />
                }
            />
            <Route
                path="/account"
                element={
                    <Container
                        title={"Perfil"}
                        component={<Account />}
                    />
                }
            />
        </Routes>
    );
}

const AnalyticsListener = () => {
    const location = useLocation();

    useEffect(() => {
        firebase.analytics().setCurrentScreen(location.pathname);
    }, [location]);
}

const Main = () => {
    const {logged} = useGuard();
    const login_control = new GuardControl();

    useEffect(() => {
        if(!logged){
            login_control.persist();
        }
    }, []);

    return (
        <BrowserRouter>
            <AnalyticsListener />
            { !logged ? <GuestRoutes /> : <GuardRoutes /> }
        </BrowserRouter>
    );
}

export default Main;
