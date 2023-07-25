import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Add, ArrowBack, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
// import { ADD_TO_CART, DECREASE_CART, selectCartItems } from '../../redux/slices/cartSlice';
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { yellow } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import API_URL from "../routes/Api";
import Flex from "../theme/Flex";
import { ADD_TO_CART, selectCartItems } from "../redux/slices/cartSlice";
import CustomIconButton from "../theme/CustomIconButton";
import CustomAccordion from "../theme/CustomAccordion";
import CircleIcon from "@mui/icons-material/Circle";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

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

const renderRatingStars = (ratings: any) => {
  const fullStars = Math.floor(ratings);
  const hasHalfStar = ratings % 1 !== 0;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <StarIcon sx={{ fontSize: "16px", color: yellow[700] }} key={i} />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <StarHalfIcon
        sx={{ fontSize: "16px", color: yellow[700] }}
        key={fullStars}
      />
    );
  }

  while (stars.length < 5) {
    stars.push(
      <StarBorderIcon
        sx={{ fontSize: "16px", color: yellow[700] }}
        key={stars.length}
      />
    );
  }

  return stars;
};
const SingleProduct = () => {
  const dispatch = useDispatch();

  //
  const { id } = useParams();
  // const [product, setProduct] = useState<Product>({});
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    try {
      const res = await axios.get(`${API_URL}products/${id}`);

      if (!res.data.currentProduct) {
        console.log("Product not found");
      }

      setProduct(res.data.currentProduct);
      console.log("proooooooooooooooooooooduct", res.data.currentProduct);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // add to cart :
  const [isLOading, setIsLoading] = useState(false);
  // add to cart :

  const addToCart = async (product) => {
    try {
      setIsLoading(true);
      const newItem = {
        productName: product.name,
        quantity: 1,
        productImage: product.images[0].url || "https://www.google.com",
        productPrice: product.price,
        productId: product._id,
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

  // find single product

  const cartItems = useSelector(selectCartItems);
  const prodactCart = cartItems.find((item: any) => item.id === id);

  const decreaseCart = async (product: any) => {
    try {
      if (product.cartQuantity > 1) {
        const response = await axios.put(
          `${API_URL}cart/updatecart/${product._id}`,
          product.cartQuantity - 1
        );
      } else {
        const response = await axios.delete(
          `${API_URL}cart/delete${product._id}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (!product) {
    <div>imen nullllllllllllllllll</div>
    return null;
  }





  return (
    <Box sx={{ padding: "50px 20px" }}>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          justifyContent: "space-evenly",
          alignItems: "start",
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "40%", lg: "40%" } }}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "secondary.main",
              maxWidth: "500px",
              borderRadius: "20px",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <img
              style={{ width: "100%" }}
              src={product?.images[0].url}
              alt=""
            />
          </Box>
          <Box sx={{ margin: "10px 0" }}>
            <Flex justifyContent="space-between">
              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  width: "48%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {product?.images[0] ? (
                  <img
                    style={{ width: "100%" }}
                    src={product?.images[0].url}
                    alt=""
                  />
                ) : null}
              </Box>

              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  width: "48%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {product?.images[0] ? (
                  <img
                    style={{ width: "100%" }}
                    src={product?.images[0].url}
                    alt=""
                  />
                ) : null}
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          sx={{
            color: "secondary.main",
            width: { xs: "100%", sm: "100%", md: "40%", lg: "40%" },
          }}
        >
          <Typography variant="h4">{product?.name}</Typography>
          <Box sx={{ margin: "20px 0" }}>
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
                ${product?.price}
              </Button>
              <Divider
                sx={{
                  marginInline: "10px",
                  height: "25px",
                  border: ".05px solid white",
                }}
              />

              <Flex>
                <Box sx={{ marginInline: "2px" }}></Box>
                <StarIcon sx={{ color: "warning.main" }} />

                <Box sx={{ color: "secondary.contrastText" }}>
                  {`${product?.ratings} (${product?.numberOfReviews} ${
                    product?.numberOfReviews > 1 ? "reviews" : "review"
                  })`}
                </Box>
              </Flex>
            </Flex>
          </Box>

          <Box sx={{ margin: "20px 0" }}>
            <Typography variant="h6">color: {product?.color}</Typography>
            <CircleIcon sx={{ color: product?.color }} />
          </Box>

          <Box sx={{ margin: "20px 0" }}>
            <Typography variant="h6">Size: {product?.size}</Typography>
            <Button
              variant="outlined"
              sx={{
                color: "info.main",
                border: "2px #12a5e7 solid",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                padding: "1px",
              }}
            >
              {product?.size}
            </Button>
          </Box>

          <Box sx={{ margin: "20px 0" }}>
            <CustomIconButton
              backgroundColor="#ccd3d6"
              textColor="#111827"
              fontSize="10px"
              color="secondary"
              text="Add to bag"
              onClick={() => addToCart(product)}
              icon={<ShoppingBasketOutlinedIcon sx={{ fontSize: "20px" }} />}
            />
          </Box>
          <Divider
            sx={{
              backgroundColor: "secondary.contrastText",
              margin: "20px 0",
              width: "100%",
            }}
          />

          <CustomAccordion
            header="Description"
            content={<Typography>Accordion Content 1</Typography>}
          />
          <CustomAccordion
            header="Description"
            content={<Typography>Accordion Content 1</Typography>}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
