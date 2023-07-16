import React from "react";
import Flex from "../../theme/Flex";
import CustomTitle from "../../theme/CustomTitle";
import Arrows from "../../theme/Arrows";
import { Box, Container } from "@mui/material";
import ProductCart from "../../theme/carts/ProductCart";
import SwiperModel from "../../theme/swiper/SwiperModel";


import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from "../../redux/slices/productSlice";


const NewArrivalsSection = () => {

  // get all products:
  const products = useSelector(selectProducts).slice(0, 8);


  return (
    <Box
      sx={{
        padding: { xs: "5px", sm: "10px", md: "30px", lg: "50px" },
        margin: { xs: "5px", sm: "10px 5px", md: "30px 5px", lg: "50px 5px" },
      }}
    >
      <CustomTitle title1="New Arrivals." title2="REY backpacks & bags" />
      <SwiperModel
        numberDisplay={3}
        cartStyle="ProductCart"
        data={products}
      />
    </Box>
  );
};

export default NewArrivalsSection;
