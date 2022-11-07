import * as Dialog from '@radix-ui/react-dialog'
import { AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Header } from '../../components/Header'
import { ITasks } from '../../interfaces/ITasks'
import { getTasks } from '../../services/tasks.service'

import { ModalAddPayment } from './ModalsPayment/ModalAddPayment'
import { HeaderButton, HeaderTitle, HomeHeader, HomeTable } from './styles'
import { Table } from './TableMyPayment'

export function Home() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [addNewPaymentModalOpened, setAddNewPaymentModalOpened] = useState<boolean>(false)

  const fetchTasks = useCallback(() => {
    getTasks()
    .then((res: AxiosResponse) => { 
      setTasks(res.data)
    })
    .catch(() => {
      toast.error('Erro interno no servidor')
    })
  }, [getTasks, setTasks])

  useEffect(() => { 
    fetchTasks();    
  }, [fetchTasks])

  return (
    <>
      <Header />

      <HomeHeader>
        <HeaderTitle>
          <h1>Meus pagamentos</h1>
        </HeaderTitle>

        <Dialog.Root open={addNewPaymentModalOpened} onOpenChange={setAddNewPaymentModalOpened}>
          <Dialog.Trigger asChild>
            <HeaderButton>ADICIONAR PAGAMENTO</HeaderButton>
          </Dialog.Trigger>

          <ModalAddPayment onAddNewPayment={fetchTasks} close={() => setAddNewPaymentModalOpened(false)} />
        </Dialog.Root>
      </HomeHeader>

      <HomeTable>
        <Table data={tasks} fetchTasks={fetchTasks} />
      </HomeTable>
    </>
  )
}
