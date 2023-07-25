import CustomButton from "../../theme/CustomButton";
import { Link, useLocation } from "react-router-dom";
import { menu } from "../../data/Data";
import { Box } from "@mui/material";

export default function MenuItems() {
  

  // Get the current pathname using the useLocation hook
  const location = useLocation();

  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
      {menu.map((menuItem) => (
        <span key={menuItem.id} style={{ marginInline: "10px" }}>
          <Link to={menuItem.path} style={{ textDecoration: "none" }}>
            <CustomButton
              color={menuItem.path === location.pathname ? "primary" : "secondary"} 
              variant={menuItem.path === location.pathname ? "contained" : "text"} // Check if the current path matches the menu item path
              backgroundColor= {menuItem.path === location.pathname ? `${'#ccd3d6'}80` : "transparent"} // Apply background color to the active item
            >
              {menuItem.title}
            </CustomButton>
          </Link>
        </span>
      ))}
    </Box>
  );
}
