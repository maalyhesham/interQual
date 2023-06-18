import React from 'react'
import SideBar from '../Sidebar/Sidebar'
import {Grid} from '@mui/material'
import HeaderTabs from '../HeaderTabs/HeaderTabs'




function Main() {
  return (
    <>
      <Grid container spacing={0.5}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <HeaderTabs />
        </Grid>
      </Grid>
    </>

  )
}

export default Main


// const HomePage = () => {
//   return (
//     <>
//       <Grid container spacing={0.5}>
//         <Grid item xs={2}>
//           <Sidebar />
//         </Grid>
//         <Grid item xs={10}>
//           <Main />
//         </Grid>
//       </Grid>

//     </>

//   );
// }


// export default HomePage;
