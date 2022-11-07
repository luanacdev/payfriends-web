/* eslint-disable prettier/prettier */
import * as Dialog from '@radix-ui/react-dialog'
import moment from 'moment'
import { Calendar, X } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '../../../../components/Form/Button'
import { ButtonCloseModal } from '../../../../components/Form/Button/styles'
import { updateTask } from '../../../../services/tasks.service'
import { MESSAGE } from '../../../../utils/messages'

import Input from '../../../../components/Form/Input'
import {
  ContainerButtons, ContainerRow,
  Content,
  Overlay
} from './styles'

interface FormData {
  name: string
  username: string
  title: string
  value: number
  date: string
}

interface IModalEditPaymentProps {
  taskInfo: {
    id: number
    name: string
    username: string
    date: string
    title: string
    value: number
    isPayed: boolean
  }
  fetchTasks: () => void
  close: () => void
}

export function ModalEditPayment({ taskInfo, fetchTasks, close }: IModalEditPaymentProps) {

  const [editDate, setEditDate] = useState(false)
  const [statusPayed, setStatusPayed] = useState(taskInfo.isPayed); 

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async ({
    name,
    username,
    title,
    value,
    date,
  }: FormData) => {
    await updateTask({
      id: taskInfo.id,
      name,
      username,
      title,
      value: Number(value),
      date,
      isPayed: statusPayed,
    })
      .then(() => {
        fetchTasks()
        close()
        toast.success('Pagamento editado!')
      })
      .catch(() => {
        toast.error('Não foi possível editar pagamento!')
      })
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Editar pagamento</Dialog.Title>

        <ButtonCloseModal>
          <X size={24} />
        </ButtonCloseModal>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerRow>
            <Input
              type="string"
              placeholder="Nome"
              id="name"
              name="name"
              defaultValue={taskInfo.name}
              register={register}
              requiredMessage={MESSAGE.EMPTY_FIELD}
              error={errors.name && errors.name.message}
            />

            <Input
              id="username"
              type="string"
              placeholder="Usuário*"
              name="username"
              defaultValue={taskInfo.username}
              register={register}
              requiredMessage={MESSAGE.EMPTY_FIELD}
              error={errors.username && errors.username.message}
            />
          </ContainerRow>

          <ContainerRow>
              <Input
                id="title"
                type="string"
                placeholder="Título*"
                defaultValue={taskInfo.title}
                register={register}
                requiredMessage={MESSAGE.EMPTY_FIELD}
                error={errors.username && errors.username.message}
                name="title"
              />

              <Input
                type="number"
                placeholder="Valor*"
                id="value"
                name="value"
                register={register}
                requiredMessage={MESSAGE.EMPTY_FIELD}
                error={errors.value && errors.value.message}
                defaultValue={taskInfo.value}
              />
          </ContainerRow>

          <ContainerRow>
            {editDate ? (
              <Input
                type="datetime-local"
                placeholder="Data"
                id="date"
                name="date"
                register={register}
                requiredMessage={MESSAGE.EMPTY_FIELD}
                error={errors.date && errors.date.message}
              />
            ) : (
              <>
                <Input
                  name="date"
                  register={register}
                  defaultValue={moment(taskInfo.date).format('LLL')}
                  disabled
                />
                <button onClick={() => setEditDate(!editDate)}>
                  <Calendar size={25} />
                </button>
              </>
            )}

              <Button
                type="button"
                onClick={() => setStatusPayed(!statusPayed)}
                bgColor={statusPayed ? '#00B37E' : '#F75A68'}
                transitionColor={statusPayed ? '#015F43' : '#7A1921'}
                wid="45%"
                hei='30px'
              >
                {statusPayed ? 'Pago' : 'Pendente'}
              </Button>
          </ContainerRow>

          <ContainerButtons>
            <Button type="submit">SALVAR</Button>
            <Button 
              onClick={() => {
                close();
              }}
              bgColor={'#C4C4CC'}
              transitionColor={'#E5E5E5'}
              fontColor={'black'}
            >
              CANCELAR
            </Button>
          </ContainerButtons>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
