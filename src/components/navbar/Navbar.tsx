import { Box } from "@mui/material";
import React from "react";
import MenuItems from "./MenuItems";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CustomIconButton from "../../theme/CustomIconButton";
import Badge from "@mui/material/Badge";
import Flex from "../../theme/Flex";
import MobileMenu from "./MobileMenu";
const Navbar: React.FC = () => {
  const handleButtonClick = () => {
    // Handle button click event here
  };

  return (
    <Flex justifyContent="space-around" alignItems="center">
      <MobileMenu />

      <img src="/logo.png" alt="logo" />
      <MenuItems />

      <Flex>
        <Box sx={{ display: { xs: "none", sm:"block", md:"block", lg:"block" } }}>
          <CustomIconButton onClick={handleButtonClick} icon={<SearchIcon />} />
        </Box>
        <CustomIconButton
          onClick={handleButtonClick}
          icon={<PersonOutlineOutlinedIcon />}
        />

        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <CustomIconButton
            onClick={handleButtonClick}
            icon={<ShoppingBasketOutlinedIcon />}
          />
        </Badge>
      </Flex>
    </Flex>
  );
};

export default Navbar;
