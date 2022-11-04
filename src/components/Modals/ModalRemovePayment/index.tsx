import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'

export function ModalRemovePayment() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Remover pagamento</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <h1>Tem certeza que deseja remover esse pagamento ?</h1>

        <button>sim</button>
        <button>cancelar</button>
      </Content>
    </Dialog.Portal>
  )
}
