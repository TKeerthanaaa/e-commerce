import { useContext } from "react";
import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const values = { currentUser, setCurrentUser };
  return (
    <UserContext.Provider value={{ values }}>{children}</UserContext.Provider>
  );
};

const useUserGlobalContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserGlobalContext };
