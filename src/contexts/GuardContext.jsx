import React, {createContext, useContext, useState} from "react";

const GuardContext = createContext({
  user: {
    uid: "",
    name: "",
    email: ""
  },
  setUser: () => {},
  logged: false,
  setLogged: () => {},
  APPLICATION_KEY: "",
  isOnline: false
});

const GuardProvider = ({children}) => {
  const [user, setUser] = useState({
    uid: undefined,
    name: undefined,
    email: undefined
  });
  const [logged, setLogged] = useState(false);
  const APPLICATION_KEY = "EAA46900AF9F0F9B7578DB00B460940DFCD38D08C50C9F1ADD317077F12F077A";
  const isOnline = navigator.onLine;

  return (
    <GuardContext.Provider value={{
      user,
      setUser,
      logged,
      setLogged,
      APPLICATION_KEY,
      isOnline
    }}>
      {children}
    </GuardContext.Provider>
  );
}
export default GuardProvider;

export const useGuard = () => {
  return useContext(GuardContext);
};
