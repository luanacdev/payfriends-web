/* eslint-disable prettier/prettier */
import * as Dialog from '@radix-ui/react-dialog'
import moment from 'moment'
import { Calendar, X } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '../../../../components/Form/Button'
import { ButtonCancel, ButtonCloseModal } from '../../../../components/Form/Button/styles'
import { updateTask } from '../../../../services/tasks.service'
import { MESSAGE } from '../../../../utils/messages'

import {
  ContainerInput,
  ErrorMessage,
  InputSyles
} from '../../../../components/Form/Input/styles'
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
            <ContainerInput>
              <InputSyles
                type="string"
                placeholder="Nome"
                id="name"
                {...register('name', {
                  required: true,
                })}
                defaultValue={taskInfo.name}
              />
              {errors.name && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>

            <ContainerInput>
              <InputSyles
                id="username"
                type="string"
                placeholder="Usuário*"
                {...register('username', {
                  required: true,
                })}
                defaultValue={taskInfo.username}
              />
              {errors.username && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>
          </ContainerRow>

          <ContainerRow>
            <ContainerInput>
              <InputSyles
                id="title"
                type="string"
                placeholder="Título*"
                {...register('title', {
                  required: true,
                })}
                defaultValue={taskInfo.title}
              />
              {errors.title && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>

            <ContainerInput>
              <InputSyles
                placeholder="Valor*"
                id="value"
                {...register('value', {
                  required: true,
                })}
                defaultValue={taskInfo.value}
              />
              {errors.value && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>
          </ContainerRow>

          <ContainerRow>
            {editDate ? (
              <ContainerInput>
                <InputSyles
                  type="datetime-local"
                  placeholder="Data"
                  id="date"
                  {...register('date', {
                    required: true,
                  })}
                />
                {errors.date && (
                  <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
                )}
              </ContainerInput>
            ) : (
              <>
                <InputSyles
                  {...register('date')}
                  defaultValue={moment(taskInfo.date).format('LLL')}
                  disabled
                  width="45%"
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
                whi="45%"
                hei='30px'
              >
                {statusPayed ? 'Pago' : 'Pendente'}
              </Button>
          </ContainerRow>

          <ContainerButtons>
            <Button type="submit">SALVAR</Button>
            <ButtonCancel>CANCELAR</ButtonCancel>
          </ContainerButtons>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
