import Pagination from '@mui/material/Pagination'
import {
  gridPageCountSelector,
  gridPageSelector,
  GridRenderCellParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid'
import * as Dialog from '@radix-ui/react-dialog'
import moment from 'moment'
import { CheckCircle, Pencil, Trash, XCircle } from 'phosphor-react'
import formatMonetaryValue from '../../../../utils/formatMonetaryValue'
import { ModalEditPayment } from '../../ModalsPayment/ModalEditPayment'
import { ModalRemovePayment } from '../../ModalsPayment/ModalRemovePayment'
import { TableBoxButtons, TableButtonEdit } from './styles'

export function ButtonsEditAndDeleteTable(params: GridRenderCellParams<number>, fetchTasks: () => void) {
    const taskInfo = params.row
  
    return (
      <TableBoxButtons>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <TableButtonEdit>
              <Pencil size={25} />
            </TableButtonEdit>
          </Dialog.Trigger>
  
          <ModalEditPayment taskInfo={taskInfo} fetchTasks={fetchTasks} />
        </Dialog.Root>
  
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <TableButtonEdit>
              <Trash size={25} />
            </TableButtonEdit>
          </Dialog.Trigger>
  
          <ModalRemovePayment taskInfo={taskInfo} fetchTasks={fetchTasks} />
        </Dialog.Root>
      </TableBoxButtons>
    )
}
  
export function RenderingPaymentStatus(params: GridRenderCellParams<boolean>) {
  return params.value ? (
    <CheckCircle size={25} color="green" />
  ) : (
    <XCircle size={25} color="red" />
  )
}

export function FormatValue(params: GridRenderCellParams<number>) {
  return formatMonetaryValue(params.value)
}

export function FormatValueDate(params: GridRenderCellParams<string>) {
  return moment(params.value).format('LLL')
}

export function CustomPagination() {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

export function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}