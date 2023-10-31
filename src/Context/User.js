import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({
    name: '',
    setName: () => {},
});

const UserProvider = ({children}) => {
    const [name,setName] = useState('BDD');
    const value = {name,setName};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
export default UserContext;