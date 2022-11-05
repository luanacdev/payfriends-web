import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-200']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  margin-top: 1rem;
  button {
    height: 30px;
    border: 0;
    background: ${(props) => props.theme['blue-400']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme['blue-900']};
      transition: background-color 0.2s;
    }
  }
`
export const CancelButton = styled(Dialog.Close)`
  height: 30px;
  border: 0;
  background: ${(props) => props.theme['gray-300']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['gray-200']};
    transition: background-color 0.2s;
  }
`

export const ContainerInfoTask = styled.div`
  padding-top: 1rem;
`
