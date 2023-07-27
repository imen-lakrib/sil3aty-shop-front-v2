import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Flex from "../../theme/Flex";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => { // Make sure to specify React.FC as the type for functional components
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
              color="secondary.contrastText" // Change to "textSecondary" for secondary text color
              gutterBottom
            >
              About Us
            </Typography>
            <Typography variant="body2" color="secondary.contrastText"> {/* Change to "textSecondary" */}
              We are an Ecommerce Company where you can buy your customize online store with a lot of features
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="secondary.contrastText" // Change to "textSecondary" for secondary text color
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography variant="body2" color="secondary.contrastText"> {/* Change to "textSecondary" */}
            lakribimen@gmail.com
            </Typography>
            <Typography variant="body2" color="secondary.contrastText"> {/* Change to "textSecondary" */}
              Email: lakribimen@gmail.com
            </Typography>
            <Typography variant="body2" color="secondary.contrastText"> {/* Change to "textSecondary" */}
              Linkedin: imenlakrib
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="secondary.contrastText" // Change to "textSecondary" for secondary text color
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
            color="secondary.contrastText" // Change to "textSecondary" for secondary text color
            align="center"
            sx={{padding:"20px 0"}}
          >
            {"Copyright © "}
            <Link style={{color:"#00A0C6", textDecoration:"none",cursor:"pointer" }}  to="https://sil3aty-shop-front-v2.vercel.app/"> {/* Change href to "to" */}
              Sil3aty.shop
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
