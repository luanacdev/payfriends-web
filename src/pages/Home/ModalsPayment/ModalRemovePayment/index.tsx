import * as Dialog from '@radix-ui/react-dialog'
import moment from 'moment'
import { X } from 'phosphor-react'
import { toast } from 'react-toastify'
import { Button } from '../../../../components/Form/Button'
import {
  ButtonCancel,
  ButtonCloseModal
} from '../../../../components/Form/Button/styles'
import { deleteTask } from '../../../../services/tasks.service'
import formatMonetaryValue from '../../../../utils/formatMonetaryValue'

import {
  ContainerButtons,
  ContainerInfoTask,
  Content,
  Overlay
} from './styles'

interface IModalRemovePaymentProps {
  taskInfo: {
    id: number
    name: string
    username: string
    date: string
    title: string
    value: number
    isPayed: boolean
  }
  onTestRemove?: (id: number) => void
  fetchTasks: () => void
  close: () => void;
}

export function ModalRemovePayment({ taskInfo, onTestRemove, fetchTasks, close }: IModalRemovePaymentProps) {
 
  const handleDeleteTask = async () => {
    await deleteTask(taskInfo.id)
      .then(() => {
        fetchTasks()
        close()
        toast.success('Pagamento removido!')
      })
      .catch(() => {
        return toast.error('Não foi possível remover pagamento!')
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
          <Button onClick={() => onTestRemove ? onTestRemove(taskInfo.id) : handleDeleteTask()}>
            CONFIRMAR
          </Button>
          <ButtonCancel>CANCELAR</ButtonCancel>
        </ContainerButtons>
      </Content>
    </Dialog.Portal>
  )
}
