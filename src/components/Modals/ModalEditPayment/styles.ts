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
  min-width: 36rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-200']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
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

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  input {
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-100']};
    /* color: ${(props) => props.theme['gray-300']}; */
    padding: 1rem;
    width: 45%;
    &::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }
  }

  button {
    border: 0;
    cursor: pointer;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  margin-top: 1rem;
  button[type='submit'] {
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

export const ContainerRaioButtons = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  width: 45%;
  div {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    input {
      cursor: pointer;
    }
  }
`
