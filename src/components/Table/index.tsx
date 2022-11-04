import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'lastName', headerName: 'ID', width: 130 },
  { field: 'age', headerName: 'ID', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    sortable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'firstName') || ''} && ${params.getValue(
        params.id,
        'lastName' || '',
      )}`,
  },
]

const rows = [
  { id: 1, firstName: 'Caio', lastName: 'sdsdsddd', age: 12 },
  { id: 1, firstName: 'Caio', lastName: 'sdsdsddd', age: 12 },
  { id: 1, firstName: 'Caio', lastName: 'sdsdsddd', age: 12 },
]

export function Table() {
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
