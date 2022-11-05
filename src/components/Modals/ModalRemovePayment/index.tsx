import * as Dialog from '@radix-ui/react-dialog'
import moment from 'moment'
import { X } from 'phosphor-react'
import { deleteTask } from '../../../services/tasks.service'
import formatMonetaryValue from '../../../utils/formatMonetaryValue'
import {
  CancelButton,
  CloseButton,
  ContainerButtons,
  ContainerInfoTask,
  Content,
  // eslint-disable-next-line prettier/prettier
  Overlay
} from './styles'

export function ModalRemovePayment({ taskInfo }: any) {
  const handleDeleteTask = async () => {
    await deleteTask(taskInfo.id)
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
          <p>Nome: {taskInfo.name}</p>
          <p>Usuário: {taskInfo.username}</p>

          <p>Titulo: {taskInfo.title}</p>
          <p>Data: {moment(taskInfo.date).format('LLL')}</p>
          <p>Valor: {formatMonetaryValue(taskInfo.value)}</p>
          <p>
            Status:
            {taskInfo.isPayed ? ' Pago' : ' Pendente'}
          </p>
        </ContainerInfoTask>

        <ContainerButtons>
          <button onClick={() => handleDeleteTask()}>CONFIRMAR</button>
          <CancelButton>CANCELAR</CancelButton>
        </ContainerButtons>

        <CloseButton>
          <X size={24} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
