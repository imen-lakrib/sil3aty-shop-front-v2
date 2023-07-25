import React, { useEffect, useState } from "react";
import Flex from "../../theme/Flex";
import CustomTitle from "../../theme/CustomTitle";
import { Box, Container } from "@mui/material";
import SwiperModel from "../../theme/swiper/SwiperModel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { GET_CATEGORIES, selectCategories } from "../../redux/slices/characteristicSlice.js";
import { useNavigate } from "react-router-dom";
import API_URL from "../../routes/Api.js";
import { toast } from "react-toastify";
import axios from "axios";

// const categories = [
//   {
//     id: "01",
//     subTitle: "twooooo",
//     title: "twooooo",
//     image: "/1.png",
//     link: "category/twooooo"
//   },
//   {
//     id: "03",
//     subTitle: "one",
//     title: "Shop the latest from top brands",
//     image: "/3.png",
//     link: "category/one"
//   },
//   {
//     id: "04",
//     subTitle: "t-shirt",
//     title: "Shop the latest from top brands",
//     image: "/4.png",
//     link: "category/t-shirt"
//   },
//   {
//     id: "05",
//     subTitle: "Explore new arrivals",
//     title: "Shop the latest from top brands",
//     image: "/5.png",
//     link: "category/Google_speaker"
//   },
// ];
const CategoriesSection = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [issLoadingCategory, setIsLoadingCategory] = useState(false);



  const getCategories = async () => {
    try {
        setIsLoadingCategory(true);
        const response = await axios.get(`${API_URL}categories`)
        if (!response.status === 200) {
            toast.error("something wont wrong")
        }
        setIsLoadingCategory(false);
        dispatch(GET_CATEGORIES(response.data))
        console.log(categories);




    } catch (error) {
        setIsLoadingCategory(false);
        console.log(error)
    }
}

useEffect(() => {
  getCategories()
 


}, [dispatch])


 



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
