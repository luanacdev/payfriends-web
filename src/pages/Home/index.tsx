import * as Dialog from '@radix-ui/react-dialog'
import { Header } from '../../components/Header'
import { ModalAddPayment } from '../../components/Modals/ModalAddPayment'
import { Table } from '../../components/Table'
import { HeaderButton, HeaderTitle, HomeHeader, HomeTable } from './styles'

export function Home() {
  return (
    <>
      <Header />

      <HomeHeader>
        <HeaderTitle>
          <h1>Meus pagamentos</h1>
        </HeaderTitle>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderButton>ADICIONAR PAGAMENTO</HeaderButton>
          </Dialog.Trigger>

          <ModalAddPayment />
        </Dialog.Root>
      </HomeHeader>

      <HomeTable>
        <Table />
      </HomeTable>
    </>
  )
}
