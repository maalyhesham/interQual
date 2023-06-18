import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Box, Typography } from '@mui/material'
import { MarkerComp } from '../Marker/markerStyle'
import TollIcon from '@mui/icons-material/Toll';
import { ContextData } from '../../ContextApp';
// import {TextField } from '@mui/material';



const columns = [
    { field: "code", headerName: "code", width: 70 },
    { field: "descripton", headerName: "descripton", width: 300 },


];

export default function Dignose() {


    const { dataFilter } = useContext(ContextData);

    return (
        <Paper sx={{
            display: 'flex', backgroundColor: 'white', flexDirection: 'column',
            borderColor: "#78b9ad",
            borderLeft: 6,
            borderLeftColor: "#4d99bd",
            height: '100%'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <MarkerComp color={'#CD639A'} background={'#F5E7E7'}>
                    <TollIcon />
                    <Typography>Visit Dignose</Typography>
                </MarkerComp>
            </Box>
            <div style={{ height: 400, width: '100%', padding: '8px 0' }}>
                <DataGrid
                    rows={dataFilter}
                    columns={columns}
                    pageSize={2}
                    rowsPerPageOptions={[5]}
                />

            </div>
        </Paper>
    );
}






