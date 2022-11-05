import {
  HeaderBox,
  HeaderButtonSigout,
  HeaderButtonUser,
  HeaderContainer,
  // eslint-disable-next-line prettier/prettier
  HeaderContent
} from './styles'

import * as Dialog from '@radix-ui/react-dialog'
import { SignOut, User } from 'phosphor-react'
import { useContext } from 'react'
import avatar from '../../assets/avatar.svg'
import logo from '../../assets/logo-white.svg'
import { AuthContext } from '../../contexts/AuthContext'
import { ModalUser } from '../Modals/ModalUser'

export function Header() {
  const { sigout } = useContext(AuthContext)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <HeaderBox>
          <img src={avatar} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <HeaderButtonUser>
                <User size={32} color="white" />
              </HeaderButtonUser>
            </Dialog.Trigger>

            <ModalUser />
          </Dialog.Root>

          <HeaderButtonSigout onClick={sigout}>
            <SignOut size={32} />
          </HeaderButtonSigout>
        </HeaderBox>
      </HeaderContent>
    </HeaderContainer>
  )
}
