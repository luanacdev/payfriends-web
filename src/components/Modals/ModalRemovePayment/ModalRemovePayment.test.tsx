import * as Dialog from '@radix-ui/react-dialog';
import { render } from "@testing-library/react";
import { ModalRemovePayment } from '.';
import db from '../../../../db.json';
import { HeaderButton } from "../../../pages/Home/styles";

describe('ModalDeletePayment', () => {
    it('should be delete payment', () => {
        const mockRemovePayment = jest.fn((id: number)=> {
            db.tasks = db.tasks.filter(task => task.id !== id);
        });
        
        const [task] = db.tasks;

        const tasksLengthBeforeDelete = db.tasks.length;

        const {getByText} = render(
            <Dialog.Root open={true}>
                <Dialog.Trigger asChild>
                    <HeaderButton>REMOVER PAGAMENTO</HeaderButton>
                </Dialog.Trigger>
                
                <ModalRemovePayment onTestRemove={mockRemovePayment} taskInfo={task} />
            </Dialog.Root>
        );
        
        const button = getByText('CONFIRMAR');

        button.click();

        const tasksLengthAfterDelete = db.tasks.length;
        
        expect(tasksLengthBeforeDelete).toBeGreaterThan(tasksLengthAfterDelete)
    })
})