import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthContextProvider ({children}) {
  const [ currentUser, setCurrentUser ] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  )
  const login = async (inputs) => {
    const res = await axios.post("https://headbook.onrender.com/api/auth/login", inputs, {
      withCredentials: true
    })
    setCurrentUser(res.data)
  }

  const logout = async () => {
    await axios.post("https://headbook.onrender.com/api/auth/logout")
    setCurrentUser(null)
  }

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{currentUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}