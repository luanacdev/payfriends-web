import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { postTask } from '../../../services/tasks.service'
import { MESSAGE } from '../../../utils/messages'
import {
  ButtonCancel,
  ButtonCloseModal,
  ButtonSyles
} from '../../Form/Button/styles'
import {
  ContainerInput,
  ErrorMessage,
  InputSyles
} from '../../Form/Input/styles'
import {
  ContainerButtons,
  ContainerRow,
  Content,
  Overlay
} from './styles'

interface ModalAddPaymentProps {
  onAddNewPayment: () => void;
  close: () => void;
  onTestAddPayment?: (params: FieldValues) => void
}

interface FormData {
  name: string
  username: string
  title: string
  value: number
  date: string
}

export function ModalAddPayment({onAddNewPayment, close, onTestAddPayment}: ModalAddPaymentProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    resetField,
    getValues
  } = useForm<FormData>()
  const [statusPayed, setStatusPayed] = useState(false)

  const clearFields = () => {
    resetField('name')
    resetField('username')
    resetField('title')
    resetField('value')
    resetField('date')
  }

  const onSubmit = async ({
    name,
    username,
    title,
    value,
    date,
  }: FormData) => {
    await postTask({
      id: Math.random(),
      name,
      username,
      title,
      value: Number(value),
      date,
      isPayed: statusPayed,
    })
      .then(() => {
        clearFields()
        onAddNewPayment();        
        close();

        toast.success('Pagamento criado!')
      })
      .catch(() => {
        return toast.error('Não foi possível criar pagamento!')
      })
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Adicionar pagamento</Dialog.Title>

        <ButtonCloseModal>
          <X size={24} />
        </ButtonCloseModal>

        <form onSubmit={handleSubmit(onTestAddPayment || onSubmit)}>
          <ContainerRow>
            <ContainerInput>
              <InputSyles
                type="string"
                placeholder="Nome"
                required
                id="name"
                {...register('name', {
                  required: true,
                })}
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
              />
              {errors.value && (
                <ErrorMessage>{MESSAGE.EMPTY_FIELD}</ErrorMessage>
              )}
            </ContainerInput>
          </ContainerRow>

          <ContainerRow>
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

            <ButtonSyles
              type="button"
              onClick={() => setStatusPayed(!statusPayed)}
              bgColor={statusPayed ? '#00B37E' : '#F75A68'}
              transitionColor={statusPayed ? '#015F43' : '#7A1921'}
              whi="45%"
              hei="30px"
            >
              {statusPayed ? 'Pago' : 'Pendente'}
            </ButtonSyles>
          </ContainerRow>

          <ContainerButtons>
            <ButtonSyles 
              type="submit"
              onClick={() => {
                if(onTestAddPayment){
                  const data = getValues();

                  onTestAddPayment(data)
                }
              }}
              >
                SALVAR</ButtonSyles>
            <ButtonCancel onClick={() => {
              close();
              clearFields()
            }}>CANCELAR</ButtonCancel>
          </ContainerButtons>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
