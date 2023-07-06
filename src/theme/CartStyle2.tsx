import React from "react";
import Flex from "./Flex";
import { Box, Typography } from "@mui/material";

interface CartStyle2Props {
  data: {
    id: string;
    name: string;
    // Add more properties as needed
  };
}

const CartStyle2: React.FC<CartStyle2Props> = ({ data }) => {
  return (
    <Flex>
      <Box>
        <Typography variant="h3">{data.id}</Typography>
        <Typography variant="body1">{data.name}</Typography>
      </Box>
      <Box>
        <img src="" alt="" />
      </Box>
    </Flex>
  );
};

export default CartStyle2;
