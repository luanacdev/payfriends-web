import { AxiosError, AxiosResponse } from 'axios'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthContext'
import { getAccount } from '../../services/account.service'
import {
  SigninContainer,
  SigninForm,
  SigninImageBox,
  // eslint-disable-next-line prettier/prettier
  SigninRightBox
} from './styles'

export function Signin() {
  const { setUser, signin } = useContext(AuthContext)

  const { register, handleSubmit } = useForm()

  const handleLogin = async (data: any) => {
    await getAccount()
      .then((res: AxiosResponse) => {
        setUser(res.data)
        signin(data.email, data.password)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })
  }

  return (
    <>
      <SigninContainer>
        <SigninRightBox>
          <SigninForm>
            <form onSubmit={handleSubmit(handleLogin)}>
              <input type="email" {...register('email')} />
              <input type="password" {...register('password')} />
              <button onClick={handleLogin}>Entrar</button>
            </form>
          </SigninForm>
        </SigninRightBox>
        <SigninImageBox></SigninImageBox>
      </SigninContainer>
    </>
  )
}
