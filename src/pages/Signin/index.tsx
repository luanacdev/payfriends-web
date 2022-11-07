import { AxiosResponse } from 'axios'
import { useContext, useEffect } from 'react'
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

import { toast } from 'react-toastify'
import logo from '../../assets/logo.svg'
import men from '../../assets/men-on-cell-phone.svg'
import { ErrorMessage } from '../../components/Form/Input/styles'
import { MESSAGE } from '../../utils/messages'

interface FieldValues {
  email: string;
  password: string;
}

interface SigninProps {
  onTestSignin?: (params: FieldValues) => void 
}

export function Signin({ onTestSignin }: SigninProps) {
  const { setUsers, signin } = useContext(AuthContext)

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues
  } = useForm<FieldValues>()

  const handleLogin = async (data: FieldValues) => {
    signin(data.email, data.password)
  }

  useEffect(() => {
    localStorage.removeItem('USER_TOKEN')
    localStorage.removeItem('USER_INFO')

    getAccount()
      .then(async (res: AxiosResponse) => {
        setUsers(res.data)
      })
      .catch(() => {
        return toast.error('Erro interno no servidor.')
      })
  }, [setUsers])

  return (
    <>
      <SigninContainer>
        <SigninRightBox>
          <SigninBox>
            <SigninLogoBox>
              <img src={logo} alt="Logo" />
            </SigninLogoBox>

            <h1>Bem vindo de volta</h1>
            <form onSubmit={handleSubmit(onTestSignin || handleLogin)}>
              <SigninInputContainer>
                <p>Email</p>
                <SigninInput
                  type="email"
                  {...register('email', {
                    required: true,
                  })}
                  placeholder="example@example.com"
                />
                {errors.email && (
                  <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
                )}
              </SigninInputContainer>

              <SigninInputContainer>
                <p>Senha</p>
                <SigninInput
                  type="password"
                  {...register('password', {
                    required: true,
                  })}
                  placeholder="*****"
                />
                {errors.password && (
                  <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
                )}
              </SigninInputContainer>

              <SigninButtonContainer>
                <SigninButton type="submit" onClick={() => {
                  if(onTestSignin){
                    const data = getValues();

                    onTestSignin(data)
                  }
                }}>
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
