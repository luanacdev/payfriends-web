import { AxiosError, AxiosResponse } from 'axios'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { getAccount } from '../../services/account.service'
import * as S from './styles'

export function Signin() {
  const { setUser, signin } = useContext(AuthContext)

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const token = localStorage.getItem('user_token')

  useEffect(() => {
    getAccount()
      .then((res: AxiosResponse) => {
        setUser(res.data)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })
  }, [])

  const handleLogin = (data: any) => {
    signin(data.email, data.password)

    console.log(signin(data.email, data.password))

    if (typeof token === 'string') {
      navigate('/home')
    }
  }

  return (
    <>
      <S.SigninContainer>
        <S.SigninRightBox>
          <S.SigninForm>
            <form onSubmit={handleSubmit(handleLogin)}>
              <input type="email" {...register('email')} />
              <input type="password" {...register('password')} />
              <button onClick={handleLogin}>Entrar</button>
            </form>
          </S.SigninForm>
        </S.SigninRightBox>
        <S.SigninImageBox></S.SigninImageBox>
      </S.SigninContainer>
    </>
  )
}
