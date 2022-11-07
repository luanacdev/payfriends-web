import Pagination from '@mui/material/Pagination'
import {
  DataGrid,
  GridColDef,
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

import formatMonetaryValue from '../../utils/formatMonetaryValue'
import { ModalEditPayment } from '../Modals/ModalEditPayment'
import { ModalRemovePayment } from '../Modals/ModalRemovePayment'
import { TableBoxButtons, TableButtonEdit } from './styles'

function renderingPaymentStatus(params: GridRenderCellParams<boolean>) {
  return params.value ? (
    <CheckCircle size={25} color="green" />
  ) : (
    <XCircle size={25} color="red" />
  )
}

function formatValue(params: GridRenderCellParams<number>) {
  return formatMonetaryValue(params.value)
}

function formatValueDate(params: GridRenderCellParams<string>) {
  return moment(params.value).format('LLL')
}

function editRow(params: GridRenderCellParams<number>) {
  const taskInfo = params.row

  return (
    <TableBoxButtons>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <TableButtonEdit>
            <Pencil size={25} />
          </TableButtonEdit>
        </Dialog.Trigger>

        <ModalEditPayment taskInfo={taskInfo} />
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <TableButtonEdit>
            <Trash size={25} />
          </TableButtonEdit>
        </Dialog.Trigger>

        <ModalRemovePayment taskInfo={taskInfo} />
      </Dialog.Root>
    </TableBoxButtons>
  )
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Nome', width: 160 },
  { field: 'username', headerName: 'Usuario', width: 160 },
  { field: 'title', headerName: 'Título', width: 250 },
  {
    field: 'date',
    headerName: 'Data',
    width: 250,
    renderCell: formatValueDate,
  },
  {
    field: 'value',
    headerName: 'Valor',
    width: 130,
    renderCell: formatValue,
  },
  {
    field: 'isPayed',
    headerName: 'Pago',
    width: 130,
    renderCell: renderingPaymentStatus,
    type: 'boolean',
  },
  {
    field: 'id',
    headerName: '',
    width: 130,
    renderCell: (id) => {
      return editRow(id)
    },
    type: 'number',
  },
]

function CustomPagination() {
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

interface TableProps {
  data: any[]
}

export function Table({data}: TableProps) {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    )
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        margin: 'auto',
        background: '#FFFF',
        borderRadius: '5px',
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Pagination: CustomPagination,
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  )
}
