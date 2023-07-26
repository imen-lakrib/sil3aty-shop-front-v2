import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Stack,
  IconButton,
  Typography,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Flex from "../../theme/Flex";
import {
  CLEAR_CART,
  GET_CART_DATA,
  TOTAL_ITEMS_PRICE,
  UPDATE_CART,
  selectCartItems,
  selectTotalItemsPrice,
} from "../../redux/slices/cartSlice";
import { selectIsLoggedIn } from "../../redux/slices/userSlice";
import API_URL from "../../routes/Api";
import Loader from "../../utils/Loader/Loader";
import { Add, Delete, Remove } from "@mui/icons-material";

interface CartItem {
  _id: string;
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  quantity: number;
}

interface CartPopoverProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartPopover: React.FC<CartPopoverProps> = ({ open, setOpen }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItemsPrice = useSelector(selectTotalItemsPrice);

  // Calculate total items price
  function calculateTotalItemsPrice(cartItems: CartItem[]): number {
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      total += item.productPrice * item.quantity;
    }

    return total;
  }

  const total = calculateTotalItemsPrice(cartItems);

  useEffect(() => {
    dispatch(TOTAL_ITEMS_PRICE(total));
  }, [dispatch, cartItems, total]);

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const ordernow = () => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      toast.error("Please login first");
      navigate("/");
    }
  };

  const increaseCart = async (item: CartItem) => {
    try {
      setIsLoading(true);
      const response = await axios.put(
        `${API_URL}cart/updatecart/${item._id}`,
        {
          quantity: item.quantity + 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success === true) {
        dispatch(
          UPDATE_CART({
            quantity: item.quantity + 1,
            productId: item.productId,
          })
        );
        setIsLoading(false);
        toast.success(response.data.message);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(String(error));
    }
  };

  const decreaseCart = async (item: CartItem) => {
    try {
      setIsLoading(true);
      if (item.quantity > 1) {
        const response = await axios.put(
          `${API_URL}cart/updatecart/${item._id}`,
          {
            quantity: item.quantity - 1,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response)
        dispatch(
          UPDATE_CART({
            quantity: item.quantity - 1,
            productId: item.productId,
          })
        );

        setIsLoading(false);
      } else {
        deleteFromCart(item);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(String(error));
    }
  };

  const deleteFromCart = async (item: CartItem) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(`${API_URL}cart/delete/${item._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.warning(response.data.message);

      fetchCartItems();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(String(error));
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${API_URL}cart/data`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      dispatch(GET_CART_DATA(response.data.cartData));
    } catch (error) {
      toast.error(String(error));
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [dispatch]);

  const clearCart = async () => {
    try {
      setIsLoading(true);
      const response = await axios.delete(`${API_URL}cart/deleteAll`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.warning(response.data.message);
      dispatch(CLEAR_CART());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(String(error));
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ zIndex: 100000000000000 }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 1,
          backgroundColor: "primary.main",
          textAlign: "left",
          color: "#ffffff",
        }}
      >
        <Typography variant="h4">Shopping cart</Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          backgroundColor: "#1f2937",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {isLoading ? (
          <Stack
            spacing={0.75}
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Loader />
            </div>
          </Stack>
        ) : (
          <Stack
            spacing={0.75}
            sx={{
              color: "secondary.light",
              padding: "10px",
              maxHeight: "400px",
            }}
          >
            {!cartItems.length ? (
              <Box sx={{ textAlign: "center" }}>
                <img
                  style={{ width: "250px" }}
                  src="/no-cart2.gif"
                  alt="empty"
                />

                <Typography variant="h4">
                  Your cart is currently empty!
                </Typography>

                <br />
                <Button
                  sx={{ color: "secondary.light" }}
                  onClick={() => handleClose()}
                >
                  <Link style={{ color: "#12a5e7" }} to="/shop">
                    &larr; Complete Shopping
                  </Link>
                </Button>
              </Box>
            ) : (
              <div>
                {cartItems.map((item: CartItem) => (
                  <Box key={item._id} sx={{ margin: "20px 0" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "stretch",
                      }}
                    >
                      <Flex justifyContent="flex-start" alignItems="stretch">
                        <Box
                          sx={{
                            marginRight: "10px",
                            backgroundColor: "secondary.light",
                            borderRadius: "20px",
                            height: "80px",
                            width: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            alt={item.productName}
                            style={{ width: "100%" }}
                            src={item.productImage}
                          />
                        </Box>

                        <Box>
                          <Typography variant="h5">
                            {`${item.productName}`
                              .substring(0, 80)
                              .concat("..")}
                          </Typography>
                          <Box
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <IconButton
                              disabled={isLoading}
                              onClick={() => decreaseCart(item)}
                            >
                              <Remove
                                sx={{
                                  fontSize: 20,
                                  border: "gray 1px solid",
                                }}
                              />
                            </IconButton>
                            <p>{item.quantity}</p>
                            <IconButton
                              disabled={isLoading}
                              onClick={() => increaseCart(item)}
                            >
                              <Add
                                sx={{
                                  fontSize: 20,
                                  border: "gray 1px solid",
                                }}
                              />
                            </IconButton>
                          </Box>
                        </Box>
                      </Flex>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
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
                          {(item.productPrice * item.quantity).toFixed(2)}$
                        </Button>
                        <Box>
                          <IconButton
                            disabled={isLoading}
                            onClick={() => deleteFromCart(item)}
                          >
                            <Delete
                              sx={{ fontSize: 30, color: "error.main" }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                    <Divider
                      sx={{
                        backgroundColor: "secondary.contrastText",
                        margin: "20px 0",
                      }}
                    />
                  </Box>
                ))}
              </div>
            )}
          </Stack>
        )}
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "primary.main" }}>
        <Box
          sx={{
            color: "secondary.light",
            width: "100%",
          }}
        >
          <Box sx={{ padding: "20px" }}>
            <Flex justifyContent="space-between">
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h5">
                {totalItemsPrice?.toFixed(2)}$
              </Typography>
            </Flex>
          </Box>

          <Typography
            variant="body1"
            sx={{ color: "secondary.contrastText", padding: "0 20px" }}
          >
            Shipping and taxes calculated at checkout.
          </Typography>
          <Box sx={{ padding: "0 20px", marginBottom: "10px" }}>
            <Flex justifyContent="space-between">
              <Button
                disabled={isLoading}
                onClick={ordernow}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  margin: "5px",
                  padding: "12px",
                  backgroundColor: "#ffffff",
                  color: "#111827",
                  fontWeight: "500",
                  borderRadius: "20px",
                  "&:hover": {
                    color: "#94a2af",
                  },
                }}
              >
                Check out
              </Button>

              <Button
                disabled={isLoading}
                color="error"
                aria-label="add"
                onClick={clearCart}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  margin: "5px",
                  padding: "12px",
                  backgroundColor: "error.main",
                  color: "#111827",
                  fontWeight: "500",
                  borderRadius: "20px",
                  "&:hover": {
                    color: "#94a2af",
                  },
                }}
              >
                Clear Cart
              </Button>
            </Flex>
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default CartPopover;
