import styled from 'styled-components'

interface IInputProps {
  width?: string
  widthContainer?: string
  padding?: string
}

export const ContainerInput = styled.div`
  width: ${(props: IInputProps) => (props.widthContainer ? props.widthContainer : '45%')};
  padding: ${(props: IInputProps) => (props.padding ? props.padding : '')};
  display: flex;
  flex-direction: column;

  p {
    color: #616161;
    margin-bottom: 5px;
  }
`

export const InputDefault = styled.input`
  width: ${(props: IInputProps) => (props.width ? props.width : '')};
  padding: 1rem;

  border-radius: 6px;
  border: 0;

  background: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const ErrorMessage = styled.span`
  margin-top: 5px;

  font-size: 13px;

  color: ${(props) => props.theme['red-300']};
`
