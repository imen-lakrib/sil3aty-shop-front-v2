import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

// const TabPanel = ({ value, index, children }) => {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// };

const MyAccount = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path);

  const [activeTab, setActiveTab] = React.useState(paths[2] || 'account-info');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ maxWidth: "100%", bgcolor: 'transparent', color: "secondary.light", margin: {xs:'30px 20px', sm:'50px 20px',md:'50px 200px', lg:'50px 200px'} }}>
        <Typography  variant='h3'>Account</Typography>
        <Typography sx={{margin:"20px 0 40px 0"}} variant='h6'>Enrico Cole, ciseco@gmail.com · Los Angeles, CA</Typography>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{ border: "1px solid gray", borderRight: "none", borderLeft: "none", padding:'10px 0' }}
      >
        <Tab
          value="account-info"
          sx={{
            color: 'secondary.contrastText',
            '&.Mui-selected': {
              color: 'common.white',
              fontWeight: 600,
              borderBottom: '2px solid blue',
            },
          }}
          label="Account info"
          component={Link}
          to="/my-account/account-info"
        />
        <Tab
          value="wishlist"
          sx={{
            color: 'secondary.contrastText',
            '&.Mui-selected': {
              color: 'common.white',
              fontWeight: 600,
              borderBottom: '2px solid blue',
            },
          }}
          label="Wishlist"
          component={Link}
          to="/my-account/wishlist"
        />
        <Tab
          value="my-orders"
          sx={{
            color: 'secondary.contrastText',
            '&.Mui-selected': {
              color: 'common.white',
              fontWeight: 600,
              borderBottom: '2px solid blue',
            },
          }}
          label="My order"
          component={Link}
          to="/my-account/my-orders"
        />
        <Tab
          value="change-pw"
          sx={{
            color: 'secondary.contrastText',
            '&.Mui-selected': {
              color: 'common.white',
              fontWeight: 600,
              borderBottom: '2px solid blue',
            },
          }}
          label="Change password"
          component={Link}
          to="/my-account/change-pw"
        />
        <Tab
          value="track-my-order"
          sx={{
            color: 'secondary.contrastText',
            '&.Mui-selected': {
              color: 'common.white',
              fontWeight: 600,
              borderBottom: '2px solid blue',
            },
          }}
          label="Track my order"
          component={Link}
          to="/my-account/track-my-order"
        />
      </Tabs>

      <Outlet />
    </Box>
  );
}

export default MyAccount;
