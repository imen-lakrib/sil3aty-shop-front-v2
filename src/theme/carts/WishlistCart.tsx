import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import CustomIconButton from "../CustomIconButton";
import { useDispatch } from "react-redux";
import { ADD_TO_WISHLIST, STORE_WISHLIST_ITEMS } from "../../redux/slices/wishListSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API_URL from "../../routes/Api";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

interface Product {
  _id: string;
  productName: string;
  productImage: string;
  productPrice: number;
  quantity: number;
  user: string;
  productId: string;
  __v: number;
}

const WishlistCart: React.FC<Product> = ({ data }) => {



  const [open, setOpen] = useState(false);
  const [openModele, setOpenModele] = useState(false);
  const [isLoadingWishlist, setIsLoadingWishlist] = useState(false)




  const navigate = useNavigate();
  const openProductDetails = (id: string) => {
    navigate(`/product-details/${id}`);
  };

  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();

  const addToCart = async () => {
    console.log(data)
    try {
      setIsLoading(true);

      const newItem = {
        productName: data.productName,
        quantity: 1,
        productImage: data.productImage,
        productPrice: data.productPrice,
        productId: data.productId,
      };

      const response = await axios.post(`${API_URL}cart/addtocart`, newItem, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success) {
        dispatch(ADD_TO_WISHLIST(response.data));
        toast.success("Successfully added to cart");
        fetchWishlistItems();
      } else {
        toast.error(response.data.message);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message || "Failed to add to cart");
    }
  };

  const fetchWishlistItems = async () => {
    try {
      setIsLoadingWishlist(true);
      const response = await axios.get(`${API_URL}cart/wishlistdata`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.data.success == true) {
        setIsLoadingWishlist(false);
        dispatch(STORE_WISHLIST_ITEMS(response.data.wishlistData));


      } else {
        console.log("not found")
        setIsLoadingWishlist(false);

      }


    } catch (error) {
      setIsLoadingWishlist(false);
      toast.error(error)

    }
  };


  //delete product form

  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => {
    setOpenDelete(true)
  };

  const handleSubmitDelete = () => {
    deleteData()
    handleCloseDelete()
  };

  const handleCloseDelete = () => {
    setOpenDelete(false)
  };

  const deleteData = async () => {
    try {
      setIsLoadingWishlist(true);

      const response = await axios.delete(`${API_URL}cart/remove/${data._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      if (response.data.success == true) {
        // dispatch(STORE_WISHLIST_ITEMS(response.data.wishlistData));
        fetchWishlistItems();

        console.log(response)
        toast.warning(response.data.message)
        setIsLoadingWishlist(false);
      }
      else {
        console.log("not found")
        setIsLoadingWishlist(false);
      }



    } catch (error) {
      setIsLoadingWishlist(false);
      console.log(error);

    }
  };

  return (
    <>
      <Box
        sx={{
          padding: "20px",
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            position: "relative",
            margin: "20px 0",
            padding: "20px",
            width: "100%",
            backgroundColor: "secondary.main",
            borderRadius: "20px",
            height: "280px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%" }}
            src={data.productImage || "https://www.google.com"}
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
            onClick={() => {handleClickOpenDelete()}}
              color="secondary"
              fontSize="10px"
              icon={<DeleteIcon sx={{ fontSize: "20px" }} />}
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
              opacity: 1,
            }}
          >
            <CustomIconButton
              fontSize="10px"
              color="secondary"
              text="Add to bag"
              onClick={() => addToCart()}
              icon={<ShoppingBasketOutlinedIcon sx={{ fontSize: "20px" }} />}
            />
          </Box>
        </Box>
        
        <Box sx={{ textAlign: "center" , cursor: "pointer" }}  onClick={() => openProductDetails(data.productId)}>
        <Typography
            variant="h3"
            sx={{ color: "secondary.light", fontSize: "18px" }}
          >
            {data.productName}
          </Typography>
          <Typography sx={{ color: "success.main", fontWeight: 600 }}>
            ${data.productPrice}
          </Typography>
         
        </Box>
      </Box>

       {/* ***********************************delete product ********************************* */}

       <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Are you sure wanna delete?"}
        </DialogTitle>
        <DialogContent >

          <Typography>"{data.productName}"</Typography>

          <DialogActions>
            <Button onClick={handleCloseDelete} autoFocus>Cancel</Button>
            <Button onClick={handleSubmitDelete}>Confirmer</Button>
          </DialogActions>

        </DialogContent>
      </Dialog>

    </>
  );
};

export default WishlistCart;
