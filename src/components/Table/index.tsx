import Pagination from '@mui/material/Pagination'
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  useGridApiContext,
  // eslint-disable-next-line prettier/prettier
  useGridSelector
} from '@mui/x-data-grid'
import { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { ITasks } from '../../interfaces/ITasks'
import { getTasks } from '../../services/tasks.service'

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 130 },
  { field: 'name', headerName: 'Usuário', width: 130 },
  { field: 'title', headerName: 'Título', width: 130 },
  { field: 'date', headerName: 'Data', width: 130 },
  { field: 'value', headerName: 'Valor', width: 130 },
  {
    field: 'isPayed',
    headerName: 'Pago',
    width: 130,
  },

  // { width: 1340, type: 'actions' },
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
  }, [])

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
      }}
    >
      <DataGrid
        rows={tasks}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Pagination: CustomPagination,
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  )
}
