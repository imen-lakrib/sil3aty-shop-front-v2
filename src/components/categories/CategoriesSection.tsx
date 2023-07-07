import React from "react";
import Flex from "../../theme/Flex";
import CustomTitle from "../../theme/CustomTitle";
import Arrows from "../../theme/Arrows";
import Carousel from "../../theme/slider/Carousel";
import CartStyle2 from "../../theme/CartStyle2";
import { Box, Container } from "@mui/material";
import Carouseltest from "./Carouseltest";

const categories = [
  { id: "01", name: "cat 1", image: "/1.png" },
  { id: "03", name: "cat 3", image: "/3.png" },
  { id: "04", name: "cat 4", image: "/4.png" },
  { id: "05", name: "cat 5", image: "/5.png" },
];
const CategoriesSection = () => {
  return (
    <Box sx={{ padding: {xs:"5px", sm:"10px", md:"30px", lg:"50px"}, margin: {xs:"5px", sm:"10px 5px", md:"30px 5px", lg:"50px 5px"} }}>
      <Flex justifyContent="space-between" alignItems="center">
        <CustomTitle
          title1="Discover more."
          title2="Good things are waiting for"
        />
      </Flex>

      <Carouseltest/>

      <Carousel>
        {categories.map((category) => (
          <CartStyle2 key={category.id} data={category} />
        ))}
      </Carousel>
    </Box>
  );
};

export default CategoriesSection;
