import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

 
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log('This is the new user from the Auth Context', user);
    
  }, [user])

  const Login_AC = async (userDetails) => {
    const data = userDetails
    setUser(data)
    localStorage.setItem('user-details', data)
  }

  const Logout_AC = async () => {
    localStorage.removeItem('user-details')
  }


  const value = {
    Login_AC, Logout_AC, user
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider
