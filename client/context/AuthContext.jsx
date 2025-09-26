import { Children, createContext } from "react";
import axios from 'axios'


// Addition of backendurl
const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;



// Addition of state variables
export const AuthContext = createContext();

export const AuthProvider = ()=>{
    const value = {
        axios
    }

    return (
        <AuthContext.Provider value={value} >
            {Children}
        </AuthContext.Provider>
    )
}