/* eslint-disable prettier/prettier */
import * as Dialog from '@radix-ui/react-dialog'
import moment from 'moment'
import { Calendar, X } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { postTask } from '../../../services/tasks.service'
import formatMonetaryValue from '../../../utils/formatMonetaryValue'
import { MESSAGE } from '../../../utils/messages'
import { ButtonCancel, ButtonCloseModal, ButtonSyles } from '../../Form/Button/styles'

import {
  ContainerInput,
  ErrorMessage,
  InputSyles
} from '../../Form/Input/styles'
import {

  ContainerButtons,
  ContainerRaioButtons,
  ContainerRow,
  Content,
  Overlay
} from './styles'

export function ModalEditPayment({ taskInfo }: any) {
  const [editDate, setEditDate] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = async ({
    name,
    username,
    title,
    value,
    date,
    isPayed,
  }: any) => {
    await postTask({
      id: taskInfo.id,
      name,
      username,
      title,
      value,
      date,
      isPayed,
    })
      .then(() => {
        window.alert('Pagamento criado com sucesso!')
      })
      .catch(() => {
        window.alert('Não foi possível criar pagamento!')
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
                type="number"
                placeholder="Valor*"
                id="value"
                {...register('value', {
                  required: true,
                })}
                defaultValue={formatMonetaryValue(taskInfo.value)}
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

            <ContainerRaioButtons>
              <div>
                <p>Pago</p>
                <input
                  type="radio"
                  id="isPayed"
                  value="true"
                  {...register('isPayed', {
                    required: true,
                  })}
                  defaultChecked={taskInfo.isPayed === true}
                />
              </div>
              <div>
                <p>Pendente</p>
                <input
                  type="radio"
                  id="isPayed"
                  value="false"
                  defaultChecked={taskInfo.isPayed === false}
                  {...register('isPayed', {
                    required: true,
                  })}
                />
              </div>
            </ContainerRaioButtons>
          </ContainerRow>

          <ContainerButtons>
            <ButtonSyles type="submit">SALVAR</ButtonSyles>
            <ButtonCancel>CANCELAR</ButtonCancel>
          </ContainerButtons>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
