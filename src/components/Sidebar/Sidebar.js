import React from "react";
import SearchCom from "../Search/SearchComp";
import Divider from '@mui/material/Divider';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import BedroomChildRoundedIcon from '@mui/icons-material/BedroomChildRounded';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import Typography from '@mui/material/Typography';
import AvatarComp from "../Avatar/Avatar";
import { Box, Drawer } from '@mui/material'
import { Span } from "../span/Span";

const SideBar = () => {

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#E0F4F1"
        }
      }}
      sx={{
        width: '240px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '240px',
          boxSizing: 'border-box',
        },
        backgroundColor: '#CCE5FF'
      }}
      variant="permanent"
      anchor="left"
      open
    >

      <div>
      <Box>
        <div className="avatar" style={{
          display: 'flex', justifyContent: 'center',
          alignItems: 'flex-end', width: '80%', paddingLeft: '15px'
        }}>
          
          <AvatarComp />

          <div style={{ display: 'flex' }}>
            <DesktopAccessDisabledIcon sx={{ width: '20px', height: '20px' }} />
            <MarkEmailUnreadOutlinedIcon sx={{ width: '20px', height: '20px' }} />
          </div>
        </div>
        <Divider light />

      </Box>


      <div className="cadenceTest" style={{
        width: '100%', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexDirection: 'column'
      }}>

        <Divider light />
        <Typography variant="h6" color='#006600' gutterBottom>
          Cadence Test
        </Typography>

        <Typography variant="subtitle2" display="block" gutterBottom>
          Male,31 y.o..27/4/1991
        </Typography>
        <Typography variant="subtitle2" display="block" gutterBottom>
          MRN:900000292
        </Typography>
        <Divider light />
        <Typography variant="subtitle2" display="block" gutterBottom>
          Cerner MRN:No Value Set
        </Typography>
        <Typography variant="subtitle2" display="block" gutterBottom>
          Nationality:UNITED KINGDOM
        </Typography>

          <Typography variant="subtitle2" sx={{ margin: '0 8px', backgroundColor: '#E4A8A9', padding: '6px 15px' }}>
          CAM Payment Status, Yes: <Span color={'red'} margin={'0 8px'}>REQUIRED</Span>
        </Typography>
        <Typography variant="subtitle2" display="block" gutterBottom>
          catchment Area:BARSH
        </Typography>
        <Typography variant="subtitle2" display="block" gutterBottom>
          HC Exp Dt:No Active Hc
        </Typography>
        <Typography variant="subtitle2" display="block" gutterBottom>
          Admitted Unit:None
        </Typography>

        <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '7px', margin: '10px' }}>
          <SearchCom />
          <Typography variant="subtitle2" sx={{ color: 'black', margin: '5px 5px', backgroundColor: 'white', width: '97%', }}>
            COVIED-19:Unknown
          </Typography>
          <Divider light />
        </Box>
      </div>
   
      <Typography variant="subtitle2" display="block" gutterBottom>
        Car Team:No PCP
      </Typography>
      <Typography variant="subtitle2" display="block" gutterBottom>
        Primary Cvg:NextCare - Dar Al
      </Typography>
      <Divider light />
      <Typography variant="subtitle2" sx={{ color: '#404040', margin: '3px 8px', minWidth: '40%', backgroundColor: '#FFD93F' }}>
        Allergies:<Span color="black">Not on file</Span>
      </Typography>

      
      <Divider light />
      <Typography variant="subtitle2" sx={{ color: '#404040', margin: '10px 10px', backgroundColor: '#FFD93F' }}>
        Hyperation Risk(%):<Span color="black">3%</Span>
      </Typography>

      <Typography variant="subtitle2" display="block" gutterBottom>
        Mother recived Covid Vaccine during pregnancy:None
      </Typography>
      <Typography variant="subtitle2" display="block" gutterBottom>
        Person od Determination : None
      </Typography>
    
      <Divider light />
      <Typography variant="subtitle2" color='#00994C' gutterBottom>
        29/3 GP NEW for follow-up
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        for follow-up
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Wt:50kg
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        BMI:<Span>170.30 kg/m</Span>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        BP:120/80 `{'>'}`  1day
      </Typography>
    
      <Divider light />

      <Typography variant="subtitle2" color='#0066CC' gutterBottom>
        LAST 3YR
      </Typography>
      <Divider light />

      <div style={{ display: 'flex' }}>
        <BedroomChildRoundedIcon sx={{ color: '#CC0000' }} />
        <Typography variant="subtitle2" color='#CC0000' gutterBottom>
          Admission(pending)
        </Typography>
        <Divider light />
      </div>
      <div style={{ display: 'flex' }}>
        <VaccinesOutlinedIcon />
        <Typography variant="subtitle2" gutterBottom>
          pain Med
        </Typography>
      </div>
      <Divider light />

      <div style={{ display: 'flex' }}>
        <ScienceOutlinedIcon />
        <Typography variant="subtitle2" gutterBottom>
          No result
        </Typography>
      </div>
      <Divider light />
   

      <Typography variant="subtitle2" gutterBottom>
        CARE GAP/HEALTH MAINTENANCE
      </Typography>
      <div style={{ display: 'flex' }}>
        <AccessTimeFilledOutlinedIcon sx={{ color: '#CC0000' }} />
        <Typography variant="subtitle2" gutterBottom>
          9
        </Typography>

      </div>
    
      <Divider light />
      <Typography variant="subtitle2" color='purple' gutterBottom>
        EDG Concept ENDOCRPNOLOGY PROBLEMS(0)
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Other problems (0)
      </Typography>
      
      
      <Divider light />
      <Typography variant="subtitle2" gutterBottom>
        Registries(3)
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="subtitle2" gutterBottom>
          Cord Blood(Stem cell):None
        </Typography>
        <ModeEditOutlineOutlinedIcon />
      </div>

      </div>

    </Drawer>


  )

}
export default SideBar;
