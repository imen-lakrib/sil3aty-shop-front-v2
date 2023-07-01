import { Box } from "@mui/material";
import CustomIconButton from "../../theme/CustomIconButton";
import MenuIcon from '@mui/icons-material/Menu';
const MobileMenu = () => {
  const handleButtonClick = () => {
    // Handle button click event here
  };
  return (
    <Box
      sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none" } }}
    >
      <CustomIconButton onClick={handleButtonClick} icon={<MenuIcon />} />
    </Box>
  );
};

export default MobileMenu;
