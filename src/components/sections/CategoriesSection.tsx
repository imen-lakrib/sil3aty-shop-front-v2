import React from "react";
import Flex from "../../theme/Flex";
import CustomTitle from "../../theme/CustomTitle";
import { Box, Container } from "@mui/material";
import SwiperModel from "../../theme/swiper/SwiperModel.jsx";

const categories = [
  {
    id: "01",
    subTitle: "Explore new arrivals",
    title: "Shop the latest from top brands",
    image: "/1.png",
  },
  {
    id: "03",
    subTitle: "Explore new arrivals",
    title: "Shop the latest from top brands",
    image: "/3.png",
  },
  {
    id: "04",
    subTitle: "Explore new arrivals",
    title: "Shop the latest from top brands",
    image: "/4.png",
  },
  {
    id: "05",
    subTitle: "Explore new arrivals",
    title: "Shop the latest from top brands",
    image: "/5.png",
  },
];
const CategoriesSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: "5px", sm: "10px", md: "30px", lg: "50px" },
        margin: { xs: "5px", sm: "10px 5px", md: "30px 5px", lg: "50px 5px" },
      }}
    >
      <CustomTitle
        title1="Discover more."
        title2="Good things are waiting for"
      />

      <SwiperModel numberDisplay={3} cartStyle="CartStyle2" data={categories} />

      
    </Box>
  );
};

export default CategoriesSection;
