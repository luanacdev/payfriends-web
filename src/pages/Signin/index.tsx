import { AxiosError, AxiosResponse } from 'axios'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthContext'
import { getAccount } from '../../services/account.service'
import {
  SigninBox,
  SigninButton,
  SigninButtonContainer,
  SigninContainer,
  SigninImageBox,
  SigninInput,
  SigninInputContainer,
  SigninLogoBox,
  // eslint-disable-next-line prettier/prettier
  SigninRightBox
} from './styles'

import logo from '../../assets/logo.svg'
import men from '../../assets/men-on-cell-phone.svg'

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
          <SigninBox>
            <SigninLogoBox>
              <img src={logo} alt="Logo" />
            </SigninLogoBox>

            <h1>Bem vindo de volta</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
              <SigninInputContainer>
                <p>Email</p>
                <SigninInput type="email" {...register('email')} />
              </SigninInputContainer>

              <SigninInputContainer>
                <p>Senha</p>
                <SigninInput type="password" {...register('password')} />
              </SigninInputContainer>

              <SigninButtonContainer>
                <SigninButton type="submit" onClick={handleLogin}>
                  Entrar
                </SigninButton>
              </SigninButtonContainer>
            </form>
          </SigninBox>
        </SigninRightBox>
        <SigninImageBox>
          <img src={men} alt="Homen fazendo pagamento com PayFriends" />
        </SigninImageBox>
      </SigninContainer>
    </>
  )
}
