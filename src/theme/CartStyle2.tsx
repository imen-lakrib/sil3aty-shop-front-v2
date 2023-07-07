import React from "react";
import Flex from "./Flex";
import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

interface CartStyle2Props {
  data: {
    id: string;
    name: string;
    image: string;
    // Add more properties as needed
  };
}

const CartStyle2: React.FC<CartStyle2Props> = ({ data }) => {
  return (
    <Box
      sx={{
        width: { sx: "250px", sm: "300px", md: "300px", lg: "300px" },
        backgroundColor: "secondary.main",
        padding: "20px",
        borderRadius: "15px",
        margin: "20px",
      }}
    >
      <Flex justifyContent="space-between">
        <Box>
          <Typography sx={{ color: "primary.main" }} variant="body1">
            {data.name}
          </Typography>
          <Typography sx={{ color: "primary.main" }} variant="h3">
            {data.id}
          </Typography>
          <Box sx={{ margin: "20px 0" }}>
            <CustomButton color="secondary" variant="text" fontSize="10px">
              click me
            </CustomButton>
          </Box>
        </Box>
        <Box sx={{ width: {xs: "80px", sm:"150px", md:"150px", lg:"150px"} }}>
          <img style={{ width: "100%" }} src={data.image} alt="" />
        </Box>
      </Flex>
    </Box>
  );
};

export default CartStyle2;
