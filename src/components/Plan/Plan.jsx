import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import SimpleAccordion from '../Reviews/Reviews';
import MedicationManag from '../MedicationManag/MedicationManag'
import Dignose from '../Dignos/Dignose';

const Plan = () => {
  
    return (
        <>
            <Paper sx={{ width: '100%'}}>
                <Typography variant="h6" color='#048E68' gutterBottom padding='8px'>
                    plan
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} sx={{ height: '100%' }} >
                        <Grid item xs={6}>
                            <SimpleAccordion />
                        </Grid>
                        <Grid item xs={6}>
                            <Dignose />
                        </Grid>
                        <Grid item xs={6}>
                            <MedicationManag />
                        </Grid>
                        <Grid item xs={6}>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Box>
            </Paper>


        </>
    );
};

export default Plan;