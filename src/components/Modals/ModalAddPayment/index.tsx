import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'

export function ModalAddPayment() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Adicionar pagamento</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Titulo" />
          <input type="number" placeholder="Data" />
          <input type="text" placeholder="Valor" />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
