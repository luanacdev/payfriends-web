import styled from 'styled-components'

interface IInputProps {
  width?: string
}

export const InputSyles = styled.input`
  width: ${(props: IInputProps) => (props.width ? props.width : '')};
  padding: 1rem;

  border-radius: 6px;
  border: 0;

  background: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const ContainerInput = styled.div`
  width: ${(props: IInputProps) => (props.width ? props.width : '45%')};

  display: flex;
  flex-direction: column;
`

export const ErrorMessage = styled.span`
  margin-top: 5px;

  font-size: 13px;

  color: ${(props) => props.theme['red-300']};
`
