import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        width: { xs: "80px", sm: "100px", md: "150px", lg: "150px" },
        padding: "10px",
      }}
    >
      <img style={{ width: "100%" }} src="/logo.png" alt="logo" />
    </Box>
  );
};

export default Logo;
