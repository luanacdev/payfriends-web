import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent } from './styles'

import avatar from '../../assets/avatar.svg'
import logo from '../../assets/logo-white.svg'
import { HeaderButton } from '../../pages/Home/styles'
import { BoxPerfl } from '../BoxPerfil'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <img src={avatar} alt="" />

        {/* <Avatar /> */}
      </HeaderContent>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <HeaderButton>abrir perfil</HeaderButton>
        </Dialog.Trigger>

        <BoxPerfl />
      </Dialog.Root>
    </HeaderContainer>
  )
}
