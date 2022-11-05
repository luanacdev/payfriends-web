import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { deleteTask } from '../../../services/tasks.service'
import {
  CancelButton,
  CloseButton,
  ContainerButtons,
  ContainerInfoTask,
  Content,
  Overlay
} from './styles'

export function ModalRemovePayment(id: any) {
  const handleDeleteTask = async () => {
    await deleteTask(id)
      .then(() => {
        window.alert('Task removida com sucesso!')
      })
      .catch(() => {
        return window.alert('Não foi possível remover!')
      })
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Excluir pagamento</Dialog.Title>

        <ContainerInfoTask>
          <p>Usuário: Luana</p>
          <p>Data: 20/02/2022</p>
          <p>Valor: R$ 400,00</p>
        </ContainerInfoTask>

        <ContainerButtons>
          <button type="submit" onClick={() => handleDeleteTask}>
            CONFIRMAR
          </button>
          <CancelButton>CANCELAR</CancelButton>
        </ContainerButtons>

        <CloseButton>
          <X size={24} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
