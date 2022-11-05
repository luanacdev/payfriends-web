import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-900']};
  padding: 2.5rem 0 1.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderButtonSigout = styled.button`
  height: 50px;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50px;

  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['red-300']};
    transition: background-color 0.2s;
  }
`

export const HeaderButtonUser = styled.button`
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  justify-content: space-between;
`
