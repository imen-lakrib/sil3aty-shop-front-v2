import { Facebook, Google } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  
  Grid,
  IconButton,
  Input,
  InputAdornment,
 
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Flex from "../theme/Flex";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import API_URL from "../routes/Api";

import Loader from "../utils/Loader/Loader";



const Register = () => {

  const [isLOading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  

  const [error, setError] = useState(false);
  

  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().max(30).required("Ce champ est obligatoire"),
      email: Yup.string().max(30).required("Ce champ est obligatoire"),
      password: Yup.string().max(30).required("Ce champ est obligatoire"),
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const result = await axios.post(`${API_URL}user/register`, {
          username: values.username,
          email: values.email,
          password: values.password,
        });
        console.log(result)

        //   handleClose()
        toast.success("you have registered successfully, please login now");
        setIsLoading(false);

        navigate("/login");
      } catch (err) {
        setError(true);
        setIsLoading(false);
        // setErrorMessage(err.response.data.message);
      }
    },
  });

  return (
    <Box sx={{ textAlign: "center", color: "secondary.light" }}>
      <Typography
        sx={{ fontSize: "50px", fontWeight: "bold", margin: "50px 0" }}
      >
        Signup
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
              <Typography>User Name</Typography>
              <Input
                onChange={formik.handleChange}
                value={formik.values.username}
                error={Boolean(formik.touched.username && formik.errors.username)}
                // helperText={formik.touched.email && formik.errors.email}
                fullWidth
                name="username"
                type="text"
                placeholder="User Name"
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
                      <img style={{width:"50px"}} src='/eye.gif' alt="pw"/>
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
                to="/login"
                //   variant="body1"
                //   underline="hover"
                style={{ cursor: "pointer", color: "#5dc65f" }}
              >
                Login
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

export default Register;
