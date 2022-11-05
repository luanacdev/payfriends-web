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
  // eslint-disable-next-line prettier/prettier
  useGridSelector
} from '@mui/x-data-grid'
import * as Dialog from '@radix-ui/react-dialog'
import { AxiosError, AxiosResponse } from 'axios'
import moment from 'moment'
import { CheckCircle, Pencil, Trash, XCircle } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { ITasks } from '../../interfaces/ITasks'
import { getTasks } from '../../services/tasks.service'
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
      console.log(id, 'kkkkk')
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

export function Table() {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState<ITasks[]>([])

  useEffect(() => {
    getTasks()
      .then((res: AxiosResponse) => {
        setTasks(res.data)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })
  }, [setTasks])

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
        rows={tasks}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        editMode="row"
        components={{
          Pagination: CustomPagination,
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  )
}
