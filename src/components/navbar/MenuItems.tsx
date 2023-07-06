import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CustomButton from "../../theme/CustomButton";
import Flex from "../../theme/Flex";
import { Link } from 'react-router-dom';
import { menu } from "../../data/Data";
import { Box } from "@mui/material";
export default function MenuItems() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  
    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
    {menu.map((menuItem) => (
      <span key={menuItem.id} style={{ marginInline: '10px' }}>
        <Link to={menuItem.path} style={{ textDecoration: 'none' }}>
          <CustomButton color="secondary" variant="text">
            {menuItem.title}
          </CustomButton>
        </Link>
      </span>
    ))}
  </Box>
  );
}
