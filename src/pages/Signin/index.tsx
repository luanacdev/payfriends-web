import { AxiosError, AxiosResponse } from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { getAccount } from '../../services/account.service'

export function Signin() {
  const { setUser, signin } = useContext(AuthContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('')

  useEffect(() => {
    getAccount()
      .then((res: AxiosResponse) => {
        setUser(res.data)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })
  }, [])

  const handleLogin = () => {
    if (!email || !password) {
      setError('Preencha todos os campos')
      return
    }

    const res = signin(email, password)

    if (res) {
      setError(res)
      return
    }

    navigate('/home')
  }

  return (
    <>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </>
  )
}
