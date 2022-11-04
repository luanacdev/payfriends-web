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

export const HeaderButtonSigout = styled.div`
  height: 50px;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 999em;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0 1.25rem;
  width: 140px;
  justify-content: space-between;

  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['red-300']};
    transition: background-color 0.2s;
  }
`
