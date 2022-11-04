import { Header } from '../../components/Header'
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

        <HeaderButton>ADICIONAR PAGAMENTO</HeaderButton>
      </HomeHeader>

      <HomeTable>
        <Table />
      </HomeTable>
    </>
  )
}
