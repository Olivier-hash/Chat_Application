import { Children, createContext, useState } from "react";
import axios from 'axios'


// Addition of backendurl
const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;



// Addition of state variables
export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [authUser, setAuthUser] = useState(null)

    const value = {
        axios
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}