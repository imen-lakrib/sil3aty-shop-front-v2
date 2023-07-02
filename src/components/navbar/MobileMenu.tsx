import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CustomIconButton from "../../theme/CustomIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { menu } from "../../data/Data";

import Flex from "../../theme/Flex";
import SearchBox from "./SearchBox";
import MenuItems from "./MenuItems";
import CustomButton from "../../theme/CustomButton";

const MobileMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const handleButtonClick = () => {
    toggleDrawer(true);
    console.log("Button clicked and drawer opened");
  };

  const handleCloseDrawer = () => {
    toggleDrawer(false);
    console.log("Drawer closed");
  };

  return (
    <Box
      sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none" } }}
    >
      <CustomIconButton onClick={handleButtonClick} icon={<MenuIcon />} />
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        onOpen={handleButtonClick}
      >
        <Box
          sx={{
            width: { xs: 250, sm: 350, md: 350, lg: 350 },
            position: "relative",
            backgroundColor: "primary.main",
            height: "100%",
            padding: "10px",
          }}
        >
          <Box sx={{ position: "absolute", top: 5, right: 5 }}>
            <CustomIconButton
              onClick={handleCloseDrawer}
              icon={<CloseIcon />}
            />
          </Box>
          <img src="/logo.png" alt="logo" />

          <Typography
            sx={{ padding: "10px" }}
            color="secondary.main"
            variant="body1"
          >
            Discover the most outstanding articles on all topics of life. Write
            your stories and share them
          </Typography>
          <Box sx={{margin:"20px 0"}}>
            <Flex justifyContent="space-evenly" alignItems="center">
              <FacebookIcon style={{ color: "#3b5998" }} />
              <TwitterIcon style={{ color: "#1da1f2" }} />
              <InstagramIcon style={{ color: "#c32aa3" }} />
              <LinkedInIcon style={{ color: "#0077b5" }} />
            </Flex>
          </Box>
          <SearchBox />
          <Divider sx={{ backgroundColor: "secondary.light", margin:"20px 0" }} />

          <MenuItems />

          <Box>
            {menu.map((menu) => {
              return (
                <div key={menu.id} style={{ margin: "20px 0" }}>
                  <CustomButton color="secondary" variant="text">
                    {menu.title}
                  </CustomButton>
                </div>
              );
            })}
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default MobileMenu;
