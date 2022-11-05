import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;

  position: fixed;

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

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
`

export const ButtonPayed = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  width: 45%;
  background-color: red;
`
