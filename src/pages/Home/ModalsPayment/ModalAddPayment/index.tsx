import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '../../../../components/Form/Button'
import Input from '../../../../components/Form/Input'
import { postTask } from '../../../../services/tasks.service'
import { MESSAGE } from '../../../../utils/messages'
import {
  ButtonCloseModal,
  ContainerButtons,
  ContainerRow,
  Content,
  Overlay
} from './styles'

interface ModalAddPaymentProps {
  close: () => void;
  onTestAddPayment?: (params: FieldValues) => void
  onAddNewPayment:  () => void
}

interface FormData {
  name: string
  username: string
  title: string
  value: number
  date: string
}

export function ModalAddPayment({ close, onTestAddPayment, onAddNewPayment}: ModalAddPaymentProps) {

  const [statusPayed, setStatusPayed] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
    resetField,
    getValues
  } = useForm<FormData>()

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
        onAddNewPayment()       
        close()

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
            <Input
              type="string"
              placeholder="Nome"
              id="name"
              name="name"
              register={register}
              requiredMessage={MESSAGE.EMPTY_FIELD}
              error={errors.name && errors.name.message}
            />
             
            <Input
              type="string"
              placeholder="Usuário*"
              id="username"
              name="username"
              register={register}
              requiredMessage={MESSAGE.EMPTY_FIELD}
              error={errors.username && errors.username.message}
            />
          </ContainerRow>

          <ContainerRow>
            <Input
              type="string"
              id="title"
              name="title"
              placeholder="Título*"
              register={register}
              requiredMessage={MESSAGE.EMPTY_FIELD}
              error={errors.username && errors.username.message}
            />

            <Input
              type="number"
              placeholder="Valor*"
              id="value"
              name="value"
              register={register}
              requiredMessage={MESSAGE.EMPTY_FIELD}
              error={errors.value && errors.value.message}
            />
          </ContainerRow>

          <ContainerRow>
            <Input
              type="datetime-local"
              placeholder="Data"
              id="date"
              name="date"
              register={register}
              requiredMessage={MESSAGE.EMPTY_FIELD}
              error={errors.date && errors.date.message}
            />
             
            <Button
              type="button"
              onClick={() => setStatusPayed(!statusPayed)}
              bgColor={statusPayed ? '#00B37E' : '#F75A68'}
              transitionColor={statusPayed ? '#015F43' : '#7A1921'}
              wid="45%"
              hei="30px"
            >
              {statusPayed ? 'Pago' : 'Pendente'}
            </Button>
          </ContainerRow>

          <ContainerButtons>
            <Button
              type="submit"
              onClick={() => {
                if(onTestAddPayment){
                  const data = getValues();

                  onTestAddPayment(data)
                }
              }}
            >
              SALVAR
            </Button>
            
            <Button 
              onClick={() => {
                close();
                clearFields()
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
