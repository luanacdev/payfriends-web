import * as Dialog from '@radix-ui/react-dialog'
import moment from 'moment'
import { X } from 'phosphor-react'
import { deleteTask } from '../../../services/tasks.service'
import formatMonetaryValue from '../../../utils/formatMonetaryValue'
import {
  ButtonCancel,
  ButtonCloseModal,
  // eslint-disable-next-line prettier/prettier
  ButtonSyles
} from '../../Form/Button/styles'
import {
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

        <ButtonCloseModal>
          <X size={24} />
        </ButtonCloseModal>

        <ContainerInfoTask>
          <p>Nome: {taskInfo.name}</p>
          <p>Usuário: {taskInfo.username}</p>

          <p>Título: {taskInfo.title}</p>
          <p>Data: {moment(taskInfo.date).format('LLL')}</p>
          <p>Valor: {formatMonetaryValue(taskInfo.value)}</p>
          <p>
            Status:
            {taskInfo.isPayed ? ' Pago' : ' Pendente'}
          </p>
        </ContainerInfoTask>

        <ContainerButtons>
          <ButtonSyles onClick={() => handleDeleteTask()}>
            CONFIRMAR
          </ButtonSyles>
          <ButtonCancel>CANCELAR</ButtonCancel>
        </ContainerButtons>
      </Content>
    </Dialog.Portal>
  )
}
