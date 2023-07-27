import { useEffect, useState } from "react";
import CustomTitle from "../../theme/CustomTitle";
import { Box } from "@mui/material";
import SwiperModel from "../../theme/swiper/SwiperModel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { GET_CATEGORIES, selectCategories } from "../../redux/slices/characteristicSlice.js";
import API_URL from "../../routes/Api.js";
import { toast } from "react-toastify";
import axios from "axios";

const CategoriesSection = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const [isLoadingCategory, setIsLoadingCategory] = useState(false);

  const getCategories = async () => {
    try {
      setIsLoadingCategory(true);
      const response = await axios.get(`${API_URL}categories`);
      if (response.status !== 200) {
        toast.error("something went wrong");
      }
      setIsLoadingCategory(false);
      dispatch(GET_CATEGORIES(response.data));
      console.log(categories);
    } catch (error) {
      setIsLoadingCategory(false);
      console.log(error);
    }
  };

  console.log(isLoadingCategory)

  useEffect(() => {
    getCategories();
  }, [dispatch]);

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
