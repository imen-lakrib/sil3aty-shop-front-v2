import React from "react";
import Flex from "../../theme/Flex";
import CustomTitle from "../../theme/CustomTitle";
import Arrows from "../../theme/Arrows";
import Carousel from "../../theme/slider/Carousel";
import CartStyle2 from "../../theme/CartStyle2";

const CategoriesSection = () => {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <CustomTitle
          title1="Discover more."
          title2="Good things are waiting for"
        />
        {/* <Arrows/> */}
      </Flex>
      
      <Carousel />
    </>
  );
};

export default CategoriesSection;
