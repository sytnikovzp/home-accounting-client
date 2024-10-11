import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import NavBar from './Navigation/NavBar';
import AccountingService from './Services/AccountingService';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <Box>
      <Grid container direction={'column'}>
        <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
          <Header></Header>
        </Grid>
        <Grid container>
          <Grid item lg={2} md={2} xl={2} sm={2} xs={2}>
            <NavBar />
          </Grid>
          <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
            <Outlet />
          </Grid>
          <Grid item lg={4} md={4} xl={4} sm={4} xs={4}>
            <AccountingService />
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
