import { Facebook, Google } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Flex from "../theme/Flex";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE_USER, selectIsLoggedIn } from "../redux/slices/userSlice";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import jwt_decode from "jwt-decode";
import API_URL from "../routes/Api";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Loader from "../utils/Loader/Loader";

interface DecodedToken {
  id: {
    role: string;
  };
}

const Login = () => {
  const ariaLabel = { "aria-label": "description" };

  const [isLOading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const [error, setError] = useState(false);
  const isSubmitting = false;

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  //
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().max(30).required("Ce champ est obligatoire"),
      password: Yup.string().max(30).required("Ce champ est obligatoire"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        setIsLoading(true);
        const result = await axios.post(`${API_URL}user/login`, {
          email: values.email,
          password: values.password,
        });

        if (result.status === 200) {
          const { email, userID, token } = result.data;

          dispatch(
            SET_ACTIVE_USER({
              email,
              userID,
              token,
            })
          );
          setError(false);

          localStorage.setItem("token", token);
          localStorage.setItem("email", email);

          // Decode the token to extract the role
          const decodedToken: DecodedToken = jwt_decode(token);

          const role = decodedToken.id.role;

          setIsLoading(false);

          if (role === "Admin") {
            toast.success("Welcome to the admin Dashboard");
            navigate("/dashboard");
            console.log("is logged in after login", isLoggedIn);
          } else if (role === "Client") {
            toast.success("Welcome to your account");
            navigate("/mydashboard/myaccount");
            console.log("is logged in after login", isLoggedIn);
          } else {
            toast.error("You don't have access to this.");
            navigate("/");
            console.log("is logged in after login", isLoggedIn);
          }
        }
      } catch (err) {
        setIsLoading(false);
        console.error(err);
        setError(true);
      }
    },
  });

  return (
    <Box sx={{ textAlign: "center", color: "secondary.light" }}>
      <Typography
        sx={{ fontSize: "50px", fontWeight: "bold", margin: "50px 0" }}
      >
        Login
      </Typography>

      <Box
        component="main"
        sx={{
          margin: "20px",
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Box sx={{ textAlign: "left", margin: "10px 0" }}>
              <Typography>Email address</Typography>
              <Input
                onChange={formik.handleChange}
                value={formik.values.email}
                error={Boolean(formik.touched.email && formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
                fullWidth
                name="email"
                type="email"
                placeholder="Email Address"
                //   inputProps={ariaLabel}
                inputProps={{ style: { color: "#ffffff" } }}
                sx={{
                  mt: "5px",
                  padding: "8px 12px",
                  border: "1px solid #94a2af",
                  borderRadius: "15px",
                  "&:hover": {
                    color: "#94a2af",
                  },
                }}
              />
            </Box>

            <Box sx={{ textAlign: "left", margin: "10px 0" }}>
              <Typography>Password</Typography>

              {/* <Input
                onChange={formik.handleChange}
                value={formik.values.password}
                fullWidth
                name="password"
                type="password"
                placeholder="Password"
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                // helperText={formik.touched.password && formik.errors.password}
                //   inputProps={ariaLabel}
                inputProps={{ style: { color: "#ffffff" } }}
                sx={{
                  mt: "5px",
                  padding: "8px 12px",
                  border: "1px solid #94a2af",
                  borderRadius: "15px",
                  "&:hover": {
                    color: "#94a2af",
                  },
                }}
                <img src="eye.gif" alt="pw"/>
              /> */}

              <Input
                onChange={formik.handleChange}
                value={formik.values.password}
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                inputProps={{ style: { color: "#ffffff" } }}
                sx={{
                  mt: "5px",
                  padding: "8px 12px",
                  border: "1px solid #94a2af",
                  borderRadius: "15px",
                  "&:hover": {
                    color: "#94a2af",
                  },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      <img style={{ width: "50px" }} src="/eye.gif" alt="pw" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>

            <Box sx={{ py: 1 }}>
              <Button
                // disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{
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
                {isLOading ? <Loader /> : "Continue"}
              </Button>
            </Box>

            <Box
              sx={{ py: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Link
                to="/register"
                //   variant="body1"
                //   underline="hover"
                style={{ cursor: "pointer", color: "#5dc65f" }}
              >
                Create an account
              </Link>

              <Link
                to="/forgot-password"
                // variant="body1"
                // underline="hover"
                style={{ cursor: "pointer", color: "#5dc65f" }}
              >
                Forgot password?
              </Link>
            </Box>
            <Box
              sx={{
                py: "10px",
              }}
            >
              <Flex alignItems="center" justifyContent="space-between">
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#94a2af",
                    margin: "20px 0",
                  }}
                ></div>

                <Typography
                  sx={{ margin: "0 10px" }}
                  color="secondary.light"
                  variant="body1"
                >
                  OR
                </Typography>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#94a2af",
                    margin: "20px 0",
                  }}
                ></div>
              </Flex>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Button
                  sx={{ backgroundColor: "info.main" }}
                  fullWidth
                  startIcon={<Facebook />}
                  //   onClick={() => formik.handleSubmit()}
                  size="large"
                  variant="contained"
                >
                  Facebook
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  color="error"
                  fullWidth
                  //   onClick={() => formik.handleSubmit()}
                  size="large"
                  startIcon={<Google />}
                  variant="contained"
                >
                  Google
                </Button>
              </Grid>
            </Grid>
          </form>
          {error && (
            <Alert sx={{ m: 2 }} severity="error">
              {" "}
              invalid email/ password{" "}
            </Alert>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
