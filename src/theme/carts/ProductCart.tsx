import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Flex from "../Flex";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import CustomIconButton from "../CustomIconButton";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_WISHLIST,
  selectWishlist,
} from "../../redux/slices/wishListSlice";
import QuickView from "../models/QuickView";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../routes/Api";
import { ADD_TO_CART } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  color: string;
  size: string;
  ratings: number;
  images: { public_id: string; url: string; _id: string }[];
  category: string;
  stock: number;
  numberOfReviews: number;
  createdAt: string;
  reviews: {
    user: string;
    rating: number;
    comment: string;
    time: string;
    _id: string;
  }[];
  __v: number;
}

interface ProductDataProps {
  data: Product;
}

const ProductCart: React.FC<ProductDataProps> = ({ data }) => {
  // single product page:
  const navigate = useNavigate();
  const openProductDetails = (data:any) => {
    navigate(`/product-details/${data._id}`);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dispatch = useDispatch();

  const [isLOading, setIsLoading] = useState(false);
  console.log(isLOading)
  // add to cart :
  const addToCart = async (data: ProductDataProps["data"]) => {
    try {
      setIsLoading(true);
      const newItem = {
        productName: data.name,
        quantity: 1,
        productImage: data.images[0].url || "https://www.google.com",
        productPrice: data.price,
        productId: data._id,
      };

      // Make the API request if needed
      const response = await axios.post(`${API_URL}cart/addtocart`, newItem, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success == true) {
        // Dispatch the addToCart action with the new item
        dispatch(ADD_TO_CART(response.data.cart));
        toast.success("successfully added to cart");
        setIsLoading(false);
      }
      toast.error(response.data.message);
      setIsLoading(false);

      // Handle the response if needed
    } catch (error) {
      // Handle error
      setIsLoading(false);
      toast.error(data.description);
    }
  };

  // add to wishlist
  const wishListData = useSelector(selectWishlist);
  console.log("wishListDatawishListDatawishListData", wishListData);

  const addToWishLIst = async (data: ProductDataProps["data"]) => {
    try {
      setIsLoading(true);

      // Check if the product already exists in the wishlist
      const productExists = wishListData.find(
        (item:any) => item.productId === data._id
      );

      if (productExists) {
        // If the product already exists, display a toast message and return early
        toast.warning("Product already exists in the wishlist");
        setIsLoading(false);
        return;
      }

      // If the product doesn't exist, add it to the wishlist
      const newItem = {
        productName: data.name,
        quantity: 1,
        productImage: data.images[0].url || "https://www.google.com",
        productPrice: data.price,
        productId: data._id,
      };

      // Make the API request if needed
      const response = await axios.post(`${API_URL}cart/add`, newItem, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success === true) {
        // Dispatch the addToWishlist action with the new item
        dispatch(ADD_TO_WISHLIST(response.data));
        toast.success("Successfully added to the wishlist");
      } else {
        // Handle the response if needed (e.g., display an error message)
        toast.error(response.data.message || "Failed to add to the wishlist");
      }

      setIsLoading(false);
    } catch (error) {
      // Handle error
      setIsLoading(false);
      toast.error(
        "An error occurred while adding to the wishlist"
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "250px",
          padding: "20px",
          margin: "10px 30px",
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            position: "relative",
            margin: "20px 0",
            padding: "20px",
            width: "250px",
            backgroundColor: "secondary.main",
            borderRadius: "20px",
            height: "280px",
            textAlign: "center",
            overflow: "hidden",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            style={{ width: "100%" }}
            src={data?.images?.[0]?.url || "https://www.google.com"}
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              zIndex: "1",
              top: "15px",
              width: "100%",
            }}
          >
            <CustomIconButton
              color="secondary"
              fontSize="10px"
              onClick={() => addToWishLIst(data)}
              icon={<FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              zIndex: "1",
              bottom: "15px",
              width: "90%",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          >
            <CustomIconButton
              fontSize="10px"
              color="secondary"
              text="Add to bag"
              onClick={() => addToCart(data)}
              icon={<ShoppingBasketOutlinedIcon sx={{ fontSize: "20px" }} />}
            />
            <CustomIconButton
              color="secondary"
              fontSize="10px"
              icon={<ZoomOutMapIcon />}
              onClick={handleClickOpen}
            />
          </Box>
        </Box>
        <Box
          sx={{ margin: "20px 0", cursor: "pointer" }}
          onClick={() => openProductDetails(data)}
        >
          <CircleIcon sx={{ color: data.color }} />
          <Typography
            variant="h3"
            sx={{ color: "secondary.light", fontSize: "18px" }}
          >
            {data.name}
          </Typography>
          <Typography sx={{ color: "secondary.contrastText" }}>
            {data.description.length > 120 ? data.description.substring(0, 120) + "..." : data.description}
          </Typography>
        </Box>
        <Flex justifyContent="space-between" alignItems="flex-end">
          <Button
            variant="outlined"
            sx={{
              color: "success.main",
              border: "2px #5dc65f solid",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              padding: "1px",
            }}
          >
            ${data.price}
          </Button>
          <Flex>
            <Box sx={{ marginInline: "2px" }}></Box>
            <StarIcon sx={{ color: "warning.main" }} />
            <Box sx={{ color: "secondary.contrastText" }}>
              {`${data.ratings} (${data.numberOfReviews} ${
                data.numberOfReviews > 1 ? "reviews" : "review"
              })`}
            </Box>
          </Flex>
        </Flex>
      </Box>
      <QuickView open={open} setOpen={setOpen} data={data} />
    </>
  );
};

export default ProductCart;
