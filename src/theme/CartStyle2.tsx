import React from "react";
import Flex from "./Flex";
import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

interface CartStyle2Props {
  data: {
    id: string;
    subTitle: string;
    title: string;
    image: string;
    // Add more properties as needed
  };
}

const CartStyle2: React.FC<CartStyle2Props> = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "secondary.main",
        padding: "20px",
        borderRadius: "15px",
        margin: "10px",
      }}
    >
      <Flex justifyContent="space-between">
        <Box sx={{textAlign:"left", width:"55%"}}>
          <Typography sx={{ color: "primary.main", fontSize:"13px" }} variant="body1">
            {data.subTitle}
          </Typography>
          <Typography sx={{ color: "primary.main", fontSize:"23px" }} variant="h3">
            {data.title}
          </Typography>
          <Box sx={{ margin: "20px 0" }}>
            <CustomButton color="secondary" variant="text" fontSize="10px">
              click me
            </CustomButton>
          </Box>
        </Box>
        <Box sx={{ width: "100px" }}>
          <img style={{ width: "100%" }} src={data.image} alt="" />
        </Box>
      </Flex>
    </Box>
  );
};

export default CartStyle2;
