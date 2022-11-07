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

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  margin-top: 1rem;
`

export const ContainerInfoTask = styled.div`
  padding-top: 1rem;
  p {
    margin-top: 10px;
  }
`
