import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

interface IButtonProps {
  bgColor?: string
  fontColor?: string
  transitionColor?: string
  wid?: string
  hei?: string
  mb?: string
  mt?: string
}

export const ButtonDefault = styled.button`
  height: 30px;
  border: 0;
  border-radius: 6px;
  padding: 0 1.25rem;

  margin-top: ${(props: IButtonProps) => (props.mt ? props.hei : '')};
  margin-bottom: ${(props: IButtonProps) => (props.mb ? props.hei : '')};

  width: ${(props: IButtonProps) => (props.wid ? props.wid : '')};
  height: ${(props: IButtonProps) => (props.hei ? props.hei : '')};

  color: ${(props: IButtonProps) =>
    props.fontColor ? props.fontColor : '#fff'};

  font-weight: bold;
  background: ${(props: IButtonProps) =>
    props.bgColor ? props.bgColor : '#007DFE'};

  cursor: pointer;
  &:hover {
    background: ${(props: IButtonProps) =>
      props.transitionColor ? props.transitionColor : '#002D69'};
    transition: background-color 0.2s;
  }
`

export const ButtonCloseModal = styled(Dialog.Close)`
  border: 0;
  position: absolute;
  background: transparent;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`
