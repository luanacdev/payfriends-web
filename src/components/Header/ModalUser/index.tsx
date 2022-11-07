import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ButtonCloseModal } from '../../Form/Button/styles';

import {
    ContainerRow,
    Content,
    Overlay
} from './styles';

export function ModalUser() {
    const user = JSON.parse(localStorage.getItem('USER_INFO') || '{}');

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Dados do perfil</Dialog.Title>

                <ButtonCloseModal>
                    <X size={24} />
                </ButtonCloseModal>

                <ContainerRow>
                    <p>Nome: {user.name}</p>
                    <p>E-mail: {user.email}</p>
                </ContainerRow>
            </Content>
        </Dialog.Portal>
  )
}
