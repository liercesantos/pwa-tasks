import React, {useEffect, useState} from "react";
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
import firebaseAnalytics from "../services/firebase/analytics";
import AppLoader from "../components/layout/AppLoader";

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
  const {logged} = useGuard();
  const classMaps = {
    "/": !logged ? "Login" : "Home",
    "/register": "Register",
    "/dashboard": "Dashboard",
    "/account": "Account"
  };

  useEffect(() => {
    firebaseAnalytics('screen_view', {
      firebase_screen: classMaps[location.pathname],
      firebase_screen_class: classMaps[location.pathname]
    });
    /* eslint-disable-next-line */
  }, [location]);
}

const Main = () => {
  const {logged} = useGuard();
  const guardControl = new GuardControl();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!logged){
      setLoading(true);
      setTimeout(() => {
        guardControl.persist();
        setLoading(false);
      }, 3000)
    }
    /* eslint-disable-next-line */
  }, []);

  return (
    <>
      { loading
        ?
          <AppLoader />
        :
          <BrowserRouter>
            <AnalyticsListener />
            { !logged ? <GuestRoutes /> : <GuardRoutes /> }
          </BrowserRouter>
      }
    </>
  );
}

export default Main;
