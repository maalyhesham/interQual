import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
 import { Paper, Box,Typography } from '@mui/material'
import {MarkerComp} from '../Marker/markerStyle'
 import AutoModeIcon from '@mui/icons-material/AutoMode';
import { ContextData } from '../../ContextApp';
 
const columns = [
    { field: 'code', headerName: 'code', width: 70 },
    { field: 'description', headerName: 'description', width: 130 },
];


export default function MedicationManag() {
    
    const { dataFilterOrder } = useContext(ContextData);
    
    return (
        <Paper sx={{
            display: 'flex', backgroundColor: 'white', flexDirection: 'column',
            borderColor: "#78b9ad",
            borderLeft: 6,
            borderLeftColor: "#4d99bd",
            height: '100%'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <MarkerComp color={'#C7A0E0'} background={'#F1F1F1'} width={'35%'}>
                 <AutoModeIcon/>
               <Typography>Medication Mangment</Typography>
            </MarkerComp>
            </Box>
            <div style={{ height: 400, width: '100%'}}>
                <DataGrid
                    rows={dataFilterOrder}
                    columns={columns}
                    pageSize={2}
                    rowsPerPageOptions={[5]}
                />

            </div>
        </Paper>
    );
}








