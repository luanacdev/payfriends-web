import {
  DataGrid, GridColDef
} from '@mui/x-data-grid';
import { ITasks } from '../../../interfaces/ITasks';

import { ButtonsEditAndDeleteTable, CustomPagination, CustomToolbar, FormatValue, FormatValueDate, RenderingPaymentStatus } from './TableComponents';

interface TableProps {
  data: ITasks[]
  fetchTasks: () => void
}

export function Table({ data, fetchTasks }: TableProps) {

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nome', width: 160 },
    { field: 'username', headerName: 'Usuario', width: 160 },
    { field: 'title', headerName: 'Título', width: 250 },
    {
      field: 'date',
      headerName: 'Data',
      width: 250,
      renderCell: FormatValueDate,
    },
    {
      field: 'value',
      headerName: 'Valor',
      width: 130,
      renderCell: FormatValue,
    },
    {
      field: 'isPayed',
      headerName: 'Pago',
      width: 130,
      renderCell: RenderingPaymentStatus,
      type: 'boolean',
    },
    {
      field: 'id',
      headerName: '',
      width: 130,
      renderCell: (id) => {
        return ButtonsEditAndDeleteTable(id, fetchTasks )
      },
      type: 'number',
    },
  ]
  
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
