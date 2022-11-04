import { HeaderButtonSigout, HeaderContainer, HeaderContent } from './styles'

import { SignOut } from 'phosphor-react'
import { useContext } from 'react'
import avatar from '../../assets/avatar.svg'
import logo from '../../assets/logo-white.svg'
import { AuthContext } from '../../contexts/AuthContext'

export function Header() {
  const { sigout } = useContext(AuthContext)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <HeaderButtonSigout onClick={sigout}>
          <img src={avatar} alt="" />
          <SignOut size={32} />
        </HeaderButtonSigout>
      </HeaderContent>
    </HeaderContainer>
  )
}
