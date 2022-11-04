import { HeaderContainer, HeaderContent } from './styles'

import avatar from '../../assets/avatar.svg'
import logo from '../../assets/logo-white.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <img src={avatar} alt="" />

        {/* <Avatar /> */}
      </HeaderContent>
    </HeaderContainer>
  )
}
