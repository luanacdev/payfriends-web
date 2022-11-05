import * as Dialog from '@radix-ui/react-dialog'
import moment from 'moment'
import { Calendar, X } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { postTask } from '../../../services/tasks.service'
import formatMonetaryValue from '../../../utils/formatMonetaryValue'
import {
  CancelButton,
  CloseButton,
  ContainerButtons,
  ContainerInput,
  ContainerRaioButtons,
  Content,
  // eslint-disable-next-line prettier/prettier
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

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInput>
            <input
              type="string"
              placeholder="Nome"
              required
              id="name"
              {...register('name', {
                required: true,
              })}
              defaultValue={taskInfo.name}
            />
            {errors.name && <span>O campo nome não pode ser vazio.</span>}
            <input
              id="username"
              type="string"
              placeholder="Usuário*"
              {...register('username', {
                required: true,
              })}
              defaultValue={taskInfo.username}
            />
            {errors.username && (
              <span>O campo usuário não pode ser vazio.</span>
            )}
          </ContainerInput>

          <ContainerInput>
            <input
              id="title"
              type="string"
              placeholder="Título*"
              {...register('title', {
                required: true,
              })}
              defaultValue={taskInfo.title}
            />
            {errors.title && <span>O campo título não pode ser vazio.</span>}

            <input
              // type="number"
              placeholder="Valor*"
              id="value"
              {...register('value', {
                required: true,
              })}
              defaultValue={formatMonetaryValue(taskInfo.value)}
            />
            {errors.value && <span>O campo valor não pode ser vazio.</span>}
          </ContainerInput>

          <ContainerInput>
            {editDate ? (
              <>
                <input
                  type="datetime-local"
                  placeholder="Data"
                  id="date"
                  {...register('date', {
                    required: true,
                  })}
                />
                {errors.value && <span>O campo valor não pode ser vazio.</span>}
              </>
            ) : (
              <>
                <input
                  {...register('date')}
                  defaultValue={moment(taskInfo.date).format('LLL')}
                  disabled
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
