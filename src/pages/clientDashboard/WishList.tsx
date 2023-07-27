import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectWishlist, STORE_WISHLIST_ITEMS } from "../../redux/slices/wishListSlice";
import WishlistCart from "../../theme/carts/WishlistCart";
import axios from "axios";
import API_URL from "../../routes/Api";
import { toast } from "react-toastify";

const WishList: React.FC = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlist);

  const fetchWishlistItems = async () => {
    try {
      const response = await axios.get(`${API_URL}cart/wishlistdata`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success) {
        dispatch(STORE_WISHLIST_ITEMS(response.data.wishlistData));
      } else {
        console.log("not found");
      }
    } catch (error) {
      toast.error(error.message || "Error fetching wishlist items");
    }
  };

  React.useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <>
      <Box sx={{ padding: "20px 10px" }}>
        <Typography variant="h3">List of saved products</Typography>
        {wishlistItems.length === 0 ? (
          <Box sx={{ textAlign: "center" }}>
            <img style={{ width: "250px" }} src="/no-cart2.gif" alt="empty" />
            <Typography variant="h4">Your wishlist is currently empty!</Typography>
            <br />
            <Button sx={{ color: "secondary.light" }}>
              <Link style={{ color: "#12a5e7" }} to="/shop">
                &larr; Complete Shopping
              </Link>
            </Button>
          </Box>
        ) : (
          <Grid container spacing={2}>
            {wishlistItems.map((row) => (
              <Grid key={row._id} item xs={12} sm={12} md={6} lg={4}>
                <WishlistCart data={row} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default WishList;
