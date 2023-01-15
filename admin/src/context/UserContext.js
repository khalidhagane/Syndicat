import { createContext, useState } from "react"
// import { useNavigate } from 'react-router-dom'
// import { api } from "../helpers/api"

const UserContext = createContext({})

const UserProvider = ({ children }) => {


    const [auth, setAuth] = useState({})

   console.log('auth',auth);

    return (
        <UserContext.Provider value={{auth, setAuth} }>
            {children}
        </UserContext.Provider>
    );



}

export { UserContext, UserProvider };