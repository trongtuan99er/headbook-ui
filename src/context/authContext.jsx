import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthContextProvider ({children}) {
  const [ currentUser, setCurrentUser ] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  )
  const login = () => {
    setCurrentUser({
      userName: 'tuan',
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAUvIj8tIlcc6MemlkLaXGlOLNplzf-3euA&usqp=CAU'
    })
  }

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{currentUser, login}}>
      {children}
    </AuthContext.Provider>
  )
}