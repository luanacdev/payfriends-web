import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import { IAccount, IUser } from '../interfaces/IAccount'
interface AuthContextType {
  user: IUser[]
  setUser: (user: IUser[]) => void
  account: IAccount
  signin: (email: string, password: string) => string | undefined
  token: string
  sigout: () => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser[]>([])
  const [account, setAccount] = useState<IAccount>({} as IAccount)

  const signin = (email: string, password: string) => {
    const hasUser = user?.filter((user) => user.email === email)

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2)
        localStorage.setItem('USER_TOKEN', JSON.stringify({ token }))
        setAccount({ email, password })
        return (window.location.href = '/home')
      } else {
        toast.error('E-mail ou senha incorretos ')
      }
    }
  }

  const sigout = () => {
    localStorage.removeItem('USER_TOKEN')
    window.location.href = '/'
  }

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('USER_TOKEN')

    if (token) {
      return token
    }

    return ''
  })

  return (
    <AuthContext.Provider
      value={{ user, setUser, account, signin, token, sigout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
