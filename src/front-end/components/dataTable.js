import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: '"Comic Sans MS", cursive, sans-serif', // Remplacez par la police de votre choix
      fontWeightBold: 700,
    },
    palette: {
        mode: 'dark',
      text: {
        primary: '#ffffff', // Remplacez par la couleur de votre choix
      
      },
    },
  });

export default function DataTable({ data ,columns}) {
  return (
    <ThemeProvider theme={theme}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </ThemeProvider>
  );
}