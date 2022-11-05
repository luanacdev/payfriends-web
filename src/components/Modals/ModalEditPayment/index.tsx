/* eslint-disable prettier/prettier */
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CancelButton,
  CloseButton,
  ContainerButtons,
  ContainerInput,
  Content,
  Overlay
} from './styles'

export function ModalEditPayment() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Editar pagamento</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <ContainerInput>
            <input type="text" placeholder="Usuário*" required />
            <input type="number" placeholder="Valor*" required />
          </ContainerInput>

          <ContainerInput>
            <input type="datetime-local" placeholder="Data" required />
            <input type="string" placeholder="Titulo" required />
          </ContainerInput>

          <ContainerButtons>
            <button type="submit">SALVAR</button>
            <CancelButton>CANCELAR</CancelButton>
          </ContainerButtons>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
