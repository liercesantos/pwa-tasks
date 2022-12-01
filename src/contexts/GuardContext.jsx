import React, {createContext, useContext, useState} from "react";

const GuardContext = createContext({
    user: {},
    setUser: () => {},
    logged: false,
    setLogged: () => {},
    APPLICATION_KEY: ""
});

const GuardProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);
    const APPLICATION_KEY = "EAA46900AF9F0F9B7578DB00B460940DFCD38D08C50C9F1ADD317077F12F077A";

    return (
        <GuardContext.Provider value={{
            user,
            setUser,
            logged,
            setLogged,
            APPLICATION_KEY
        }}>
            {children}
        </GuardContext.Provider>
    );
}
export default GuardProvider;

export const useGuard = () => {
    return useContext(GuardContext);
};
