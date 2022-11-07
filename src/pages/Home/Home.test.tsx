import { fireEvent, render } from '@testing-library/react';
import { Home } from '.';

describe('Home', () => {
    it('should render correctly', () => {    
        const {getByText} = render(<Home />)

        const addPaymentButton = getByText('ADICIONAR PAGAMENTO');

        const myPaymentsText = getByText('Meus pagamentos')  

        expect(addPaymentButton).toBeInTheDocument()
        expect(myPaymentsText).toBeInTheDocument()
    })

    it('should open add payment modal', () => {    
        const {getByText, getByRole} = render(<Home />)

        const addPaymentButton = getByRole('button', { name: /^ADICIONAR PAGAMENTO$/i });

        fireEvent.click(addPaymentButton);

        const titleAddPaymentModal = getByText('Adicionar pagamento')
        const dialog = getByRole('dialog')

        expect(titleAddPaymentModal).toBeInTheDocument()
        expect(dialog).toBeInTheDocument()
    })
})