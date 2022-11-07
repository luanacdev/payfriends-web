import * as Dialog from '@radix-ui/react-dialog';
import { fireEvent, render } from "@testing-library/react";
import { ModalAddPayment } from ".";
import db from '../../../../db.json';
import { HeaderButton } from '../../../pages/Home/styles';

describe('ModalAddPayment', () => {
    it('should add payment', () => {
        const mockAddPayment = jest.fn((data)=> {
            db.tasks.push({
                id: Math.random(),
                title: data.title,
                name: data.name,
                username: data.username,
                value: Number(data.value),
                date: data.date,
                isPayed: data.isPayed,
            })
        });

        const { getByPlaceholderText, getByRole } = 
            render(
                <Dialog.Root open={true}>
                    <Dialog.Trigger asChild>
                        <HeaderButton>ADICIONAR PAGAMENTO</HeaderButton>
                    </Dialog.Trigger>
                    
                    <ModalAddPayment 
                        onAddNewPayment={() => null} 
                        close={() => console.log(false)} 
                        onTestAddPayment={mockAddPayment}  
                    />
                </Dialog.Root>
            );

        const name = "Maria";
        const username = "Maria123";
        const title = "Titulo teste";
        const value = "1000";
        const dateTime = "07/11/2022 19:47";
        
        const nameInput = getByPlaceholderText('Nome');
        const usernameInput = getByPlaceholderText('Usuário*');
        const titleInput = getByPlaceholderText('Título*');
        const valueInput = getByPlaceholderText('Valor*');
        const dateTimeInput = getByPlaceholderText('Data');

        fireEvent.change(nameInput, {target: {value: name}});
        fireEvent.change(titleInput, {target: {value: title}});
        fireEvent.change(usernameInput, {target: {value: username}});
        fireEvent.change(valueInput, {target: {value: value}});
        fireEvent.change(dateTimeInput, {target: {value: dateTime}});

        const savePaymentButton = getByRole('button', { name: /^SALVAR$/i });

        fireEvent.click(savePaymentButton);

        const isPayementCreated = db.tasks.find(task => task.name === name && task.title === title && task.username === username);

        expect(!!isPayementCreated).toBeTruthy();

        db.tasks = db.tasks.filter(task => task.name !== name)
    })
})