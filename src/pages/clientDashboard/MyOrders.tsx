import axios from "axios";
import API_URL from "../../routes/Api";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Grid,
  Input,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import jwt_decode from "jwt-decode";
import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { GET_MY_ORDERS, selectMyOrders } from "../../redux/slices/orderSlice";
import { useDispatch, useSelector } from "react-redux";

const MyOrders = () => {
  // Mui table
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - myOrders.length) : 0;
  const [connectionErr, setConnectionErr] = useState(false);
  const [search, setSearch] = useState("");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // data

  // the order data:

  const [orderStatus, setOrderStatus] = useState("");

  const [selected, setSelected] = useState({});

  const [isLoadingOrder, setIsLoadingOrder] = useState(false);

  const [models, setModels] = useState([]);
  const [progress, setProgress] = useState(0);

  // {/* ***********************************handle form dialog ********************************* */}

  // {/* ***********************************crud opperation********************************* */}

  // get all orders:
  const dispatch = useDispatch();
  const myOrders = useSelector(selectMyOrders);

  const getMyOrders = async () => {
    try {
      setIsLoadingOrder(true);
      const res = await axios.post(`${API_URL}order/mine`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.data.myOrders) {
        console.log("errooooorrrrrrrrrr");
      }

      dispatch(GET_MY_ORDERS({ myOrders: res.data.myOrders }));
      console.log("myOrdersmyOrdersmyOrdersmyOrders", myOrders);
      setIsLoadingOrder(false);
      setConnectionErr(false);
    } catch (error) {
      setIsLoadingOrder(false);
      setConnectionErr(true);
    }
  };

  useEffect(() => {
    getMyOrders();
  }, [dispatch]);

  return (
    <Box sx={{ padding: "20px 10px" }}>
      <Typography variant="h3">Order History</Typography>
      <Box>
        <Card sx={{ p: 2 ,backgroundColor: "transparent", color:"#ffffff"}}>
        <TableContainer
            sx={{
              "& table": {
                backgroundColor: "transparent" // Set the background to transparent
              },
            }}
          >
            <Table size="small">
              <TableHead sx={{ backgroundColor: "#151d2c"}}>
                <TableRow >
                  <TableCell sx={{ color:"secondary.light", padding:"15px 0" }}># Id</TableCell>

                  <TableCell sx={{ color:"secondary.light" }}>Total Price</TableCell>

                  <TableCell sx={{ color:"secondary.light" }}>Products</TableCell>

                  <TableCell sx={{ color:"secondary.light" }}>Order Status</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {!isLoadingOrder &&
                  myOrders
                    // .filter(e => e.email?.toLowerCase().includes(search.toLowerCase()))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          key={row._id}
                          tabIndex={-1}
                          onClick={() => setSelected(row)}
                          sx={{
                            
                            backgroundColor:
                              selected === row
                                ? "info.main"
                                : "transparent",
                            "&:hover": {
                              backgroundColor: "info.main",
                              cursor: "pointer",
                              
                            },
                          }}
                        >
                          <TableCell
                            sx={{ cursor: "pointer",color:"secondary.light", }}
                            component="th"
                            scope="row"
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              {index}
                            </Stack>
                          </TableCell>

                          <TableCell
                            sx={{ cursor: "pointer" ,color:"secondary.light", }}
                            component="th"
                            scope="row"
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Typography variant="subtitle2" noWrap>
                                {row.totalPrice}
                              </Typography>
                            </Stack>
                          </TableCell>

                          <TableCell
                            sx={{ cursor: "pointer" ,color:"secondary.light", }}
                            component="th"
                            scope="row"
                          >
                            <TableContainer>
                              <Table size="small">
                                <TableHead>
                                  <TableRow>
                                    <TableCell sx={{color:"secondary.light" }}>
                                      <Typography variant="subtitle1">
                                        Product Name
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{color:"secondary.light" }}>
                                      <Typography variant="subtitle1">
                                        Price
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{color:"secondary.light" }}>
                                      <Typography variant="subtitle1">
                                        Quantity
                                      </Typography>
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {row.orderItems.map((order) => (
                                    <TableRow key={order.productId}>
                                      <TableCell sx={{color:"secondary.light" }}>{order.productName}</TableCell>
                                      <TableCell sx={{color:"secondary.light" }}>
                                        {order.productPrice}
                                      </TableCell>
                                      <TableCell sx={{color:"secondary.light" }}>{order.quantity}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </TableCell>

                          <TableCell
                            sx={{ cursor: "pointer" }}
                            component="th"
                            scope="row"
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Typography variant="subtitle2" noWrap>
                                {row.orderStatus === "Processing" ? (
                                  <Chip
                                    label="Processing"
                                    color="primary"
                                    size="small"
                                  />
                                ) : (
                                  <Chip
                                    label="Delivered"
                                    color="success"
                                    size="small"
                                  />
                                )}
                              </Typography>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                {!isLoadingOrder && emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell sx={{color:"secondary.light" }} colSpan={7} />
                  </TableRow>
                )}
                {!isLoadingOrder && connectionErr && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell sx={{color:"secondary.light" }} colSpan={7}>
                      <Box
                        sx={{ display: "flex", justifyContent: "center" }}
                      ></Box>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography variant="h6" color="#ffffff">
                          {" "}
                          Vérifier votre connexion internet et réessayer.
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                )}
                {isLoadingOrder && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell sx={{color:"secondary.light" }} colSpan={7}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          pt: 3,
                          pb: 1,
                          px: 1,
                        }}
                      >
                        <CircularProgress />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          pb: 3,
                          px: 1,
                        }}
                      >
                        <Typography variant="h6" color="#ffffff">
                          {" "}
                          Chargement de contenu.
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                )}
                {!isLoadingOrder && myOrders.length === 0 && !connectionErr && (
                  <TableRow>
                    <TableCell sx={{color:"secondary.light" }} colSpan={7}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 2,
                          mt: 2,
                        }}
                      >
                        {/* <img width={70} alt="NETWORK PROBLEM" src="/static/assets/no-result.png" /> */}
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography variant="h6" color="#ffffff">
                          {" "}
                          Aucune résultat.
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {!isLoadingOrder && !connectionErr && myOrders.length > 0 && (
            <TablePagination
            sx={{color:"secondary.light" }}
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={myOrders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage={"Element par page"}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default MyOrders;
