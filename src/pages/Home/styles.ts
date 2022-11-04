import styled from 'styled-components'

export const HeaderTitle = styled.div`
  /* background: ${(props) => props.theme['blue-900']}; */
  /* padding: 2.5rem 0 1.5rem; */
  /* padding: 6rem; */
`

export const HeaderButton = styled.button`
  background: ${(props) => props.theme['blue-900']};
  padding: 1rem;
`

export const HomeHeader = styled.div`
  padding: 4rem 7rem 0rem 7rem;
  display: flex;
  justify-content: space-between;
`

export const HomeTable = styled.div`
  height: 50%;
  width: 100%;
  padding-left: 7rem;
  padding-right: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
