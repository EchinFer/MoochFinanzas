import { Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const BasicDataTable = () => {

  const rows = [
    { id: 1, nombre: 'Hello', monto: 'World', fecha: 'World' },
    { id: 2, nombre: 'DataGridPro', monto: 'is Awesome', fecha: 'is Awesome' },
    { id: 3, nombre: 'MUI', monto: 'is Amazing', fecha: 'is Amazing' },
    { id: 4, nombre: 'MUI', monto: 'is Amazing', fecha: 'is Amazing' },
    { id: 5, nombre: 'MUI', monto: 'is Amazing', fecha: 'is Amazing' },
    { id: 6, nombre: 'MUI', monto: 'is Amazing', fecha: 'is Amazing' },
    { id: 7, nombre: 'MUI', monto: 'is Amazing', fecha: 'is Amazing' },
  ];

  const columns = [
    { field: 'nombre', headerName: 'Nombre', width: 300 },
    { field: 'monto', headerName: 'Monto', width: 300 },
    { field: 'fecha', headerName: 'Fecha', width: 300 },
  ];

  return (
    <Stack sx={{height: 500}}>
      <DataGrid rows={rows} columns={columns} />
    </Stack>
  )
}
