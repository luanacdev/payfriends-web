import styled from 'styled-components'

export const HeaderTitle = styled.div`
  /* background: ${(props) => props.theme['blue-900']}; */
  /* padding: 2.5rem 0 1.5rem; */
  /* padding: 6rem; */
`

export const HeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 20%;
  border-radius: 3px;
  border: 1px solid #007dfe;
  background-color: ${(props) => props.theme['blue-400']};
  color: white;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
