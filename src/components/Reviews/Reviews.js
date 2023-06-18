import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import Paper from '@mui/material/Paper';
import {Box} from '@mui/material'
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import { MarkerComp } from '../Marker/markerStyle';

export default function Reviews() {
    return (
       
           
        <Paper sx={{
            display: 'flex', backgroundColor: 'white', flexDirection: 'column',
            borderColor: "#78b9ad",
            borderLeft: 6,
            borderLeftColor: "#4d99bd",
            height:'100%'

            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <MarkerComp color={'#048E68'} background={'#F1F1F1'}>
                <ReviewsOutlinedIcon />
                <Typography>Reviews</Typography>
            </MarkerComp>
            </Box>
            <Box sx={{
                display: 'flex', flexDirection:'column' ,width:'98%',justifyContent:'space-between',padding:'8px'}}>
                <Accordion sx={{
                    borderColor: "#78b9ad",
                    borderLeft: 6,
                    borderLeftColor: "purple"
}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                > 
                    <WarningOutlinedIcon sx={{ color: '#CC0066'}} />
                    <Typography sx={{ color: '#CC0066' }} >Allergies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Not on File
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                    borderColor: "#78b9ad",
                    borderLeft: 6,
                    borderLeftColor: "purple"
}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                > 
                    <SegmentOutlinedIcon sx={{ color: '#CC0066' }} />
                    <Typography sx={{ color: '#CC0066'}} >Problem List</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        None
                    </Typography>
                </AccordionDetails>
            </Accordion>
                <Accordion sx={{
                    borderColor: "#78b9ad",
                    borderLeft: 6,
                    borderLeftColor: "purple"
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <HistoryOutlinedIcon sx={{ color: '#CC0066' }} />
                    <Typography sx={{ color: '#CC0066' }} >Medical History</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        None
                    </Typography>
                </AccordionDetails>
            </Accordion>
                <Accordion sx={{
                    borderColor: "#78b9ad",
                    borderLeft: 6,
                    borderLeftColor: "purple"
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Diversity3OutlinedIcon sx={{ color: '#CC0066' }} />
                    <Typography sx={{ color:'#CC0066' }} >Family History</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        None
                    </Typography>
                </AccordionDetails>
            </Accordion>
                
            </Box> 
        </Paper>
    );
}