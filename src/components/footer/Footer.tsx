// import React from 'react';

// const Footer: React.FC = () => {
//   const footerStyle = {
//     backgroundColor: '#1976D2',
//     color: '#fff',
//     padding: '20px 0',
//     textAlign: 'center' // For medium devices
//   };

//   const itemStyle = {
//     display: 'inline-block',
//     margin: '0 10px',
//     verticalAlign: 'top',
//     width: '50%', // For medium devices
//     [theme.breakpoints.up('lg')]: {
//       width: '25%' // For large devices
//     }
//   };

//   const linkStyle = {
//     color: '#fff',
//     display: 'block',
//     textDecoration: 'none',
//     margin: '5px 0'
//   };

//   return (
//     <footer style={footerStyle}>
//       {/* Items for Medium and Large Devices */}
//       <div style={itemStyle}>
//         <h3>Item 1</h3>
//         <nav>
//           <ul>
//             <li>
//               <a href="#" style={linkStyle}>Link 1</a>
//             </li>
//             <li>
//               <a href="#" style={linkStyle}>Link 2</a>
//             </li>
//             <li>
//               <a href="#" style={linkStyle}>Link 3</a>
//             </li>
//             <li>
//               <a href="#" style={linkStyle}>Link 4</a>
//             </li>
//             <li>
//               <a href="#" style={linkStyle}>Link 5</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {/* Repeat the above div for Item 2, Item 3, and Item 4 */}
//       {/* Remember to adjust the style if needed for the layout in different screen sizes */}
//     </footer>
//   );
// };

// export default Footer;

import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Flex from "../../theme/Flex";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div>
      <Divider
        sx={{ backgroundColor: "secondary.contrastText", margin: "80px 0" }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              gutterBottom
            >
              About Us
            </Typography>
            <Typography variant="body2" color="secondary.contrastText">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography variant="body2" color="secondary.contrastText">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="secondary.contrastText">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="secondary.contrastText">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              gutterBottom
            >
              Follow Us
            </Typography>
            <Flex justifyContent="space-between">
              <Avatar sx={{ bgcolor: "#1877f2", width: 34, height: 34 }}>
                <FacebookIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: "#E1306C", width: 34, height: 34 }}>
                <InstagramIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: "#FF0000", width: 34, height: 34 }}>
                <YouTubeIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: "#0A66C2", width: 34, height: 34 }}>
                <LinkedInIcon />
              </Avatar>
            </Flex>
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography
            variant="body2"
            color="secondary.contrastText"
            align="center"
          >
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
