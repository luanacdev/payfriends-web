import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { postTask } from '../../../services/tasks.service'
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

export function ModalAddPayment() {
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
      id: Math.random(),
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
        <Dialog.Title>Adicionar pagamento</Dialog.Title>

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
            />
            {errors.name && <span>O campo nome não pode ser vazio.</span>}
            <input
              id="username"
              type="string"
              placeholder="Usuário*"
              {...register('username', {
                required: true,
              })}
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
            />
            {errors.title && <span>O campo título não pode ser vazio.</span>}

            <input
              type="number"
              placeholder="Valor*"
              id="value"
              {...register('value', {
                required: true,
              })}
            />
            {errors.value && <span>O campo valor não pode ser vazio.</span>}
          </ContainerInput>

          <ContainerInput>
            <input
              type="datetime-local"
              placeholder="Data"
              id="date"
              {...register('date', {
                required: true,
              })}
            />
            {errors.date && <span>O campo data não pode ser vazio.</span>}

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
                />
              </div>
              <div>
                <p>Pendente</p>
                <input
                  type="radio"
                  id="isPayed"
                  value="false"
                  checked
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
