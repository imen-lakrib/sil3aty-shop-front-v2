import CustomTitle from "../../theme/CustomTitle";
import { Box } from "@mui/material";
import SwiperModel from "../../theme/swiper/SwiperModel";


import {  useSelector } from 'react-redux'
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
