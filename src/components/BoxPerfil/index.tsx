import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'

export function BoxPerfl() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Perfil do usuario</Dialog.Title>

        <CloseButton>
          <X size={32} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
