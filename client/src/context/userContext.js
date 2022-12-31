import { createContext, useReducer } from "react"

export const UserContext = createContext()

const initialState = {
  isLogin: false,
  user: {}
}

const reducer = (state, action) => {
  const {type, payload} = action

  switch (type) {
    case 'USER_SUCCES':
    case 'LOGIN_SUCCES':
      localStorage.setItem("token", payload.token)
      localStorage.setItem("role", payload.role)
      return {
        isLogin: true,
        user: payload
      }
    case 'AUTH_ERROR':
    case 'LOGOUT':
      localStorage.removeItem("token")
      localStorage.removeItem("role")
      return {
        isLogin: false,
        user: {}
      }
    default:
      throw new Error()
  }
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}