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
import { Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <Box sx={{ textAlign: "center", color: "secondary.light" }}>
      <Typography
        sx={{ fontSize: "50px", fontWeight: "bold", margin: "50px 0" }}
      >
        Contact
      </Typography>

      <Box
        sx={{
          margin: "20px",
          alignItems: "start",
          display: {sx:"block", sm:"block", md:"flex", lg:"flex"},
          flexGrow: 1,
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            margin: "15px 0",
            width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
          }}
        >
          <Box sx={{ marginBottom: "20px" }}>
            <Typography
              variant="h5"
              sx={{ color: "secondary.light", marginBottom: "10px" }}
            >
              🗺 ADDRESS
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "secondary.contrastText", fontWeight: 400 }}
            >
              Photo booth tattooed prism, portland taiyaki hoodie neutra
              typewriter
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography
              variant="h5"
              sx={{ color: "secondary.light", marginBottom: "10px" }}
            >
              💌 EMAIL
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "secondary.contrastText", fontWeight: 400 }}
            >
              nc.example@example.com
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "20px" }}>
            <Typography
              variant="h5"
              sx={{ color: "secondary.light", marginBottom: "10px" }}
            >
              ☎ PHONE
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "secondary.contrastText", fontWeight: 400 }}
            >
              000-123-456-7890
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "20px", width:"200px" }}>
            <Typography
              variant="h5"
              sx={{ color: "secondary.light", marginBottom: "10px" }}
            >
              🌏 SOCIALS
            </Typography>
            <Flex justifyContent="space-between">
              <Avatar  sx={{ bgcolor: "#1877f2", width: 34, height: 34 }}>
                <FacebookIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: "#E1306C" , width: 34, height: 34}}>
                <InstagramIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: "#FF0000", width: 34, height: 34 }}>
                <YouTubeIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: "#0A66C2", width: 34, height: 34 }}>
                <LinkedInIcon />
              </Avatar>
            </Flex>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "left",
            width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          }}
        >
          <form
            autoComplete="off"
            noValidate
            // onSubmit={formik.handleSubmit}
          >
            <Box sx={{ textAlign: "left", margin: "15px 0" }}>
              <Typography>Full name</Typography>
              <Input
                // onChange={formik.handleChange}
                // value={formik.values.email}
                // error={Boolean(formik.touched.email && formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
                fullWidth
                name="fullname"
                type="text"
                placeholder="Full name"
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

            <Box sx={{ textAlign: "left", margin: "15px 0" }}>
              <Typography>Email</Typography>
              <Input
                // onChange={formik.handleChange}
                // value={formik.values.email}
                // error={Boolean(formik.touched.email && formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
                fullWidth
                name="email"
                type="text"
                placeholder="Email"
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

            <Box sx={{ textAlign: "left", margin: "15px 0" }}>
              <Typography>Message</Typography>
              <Input
                // onChange={formik.handleChange}
                // value={formik.values.email}
                // error={Boolean(formik.touched.email && formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
                fullWidth
                name="message"
                multiline
                rows={4} // Set the number of rows for multiple lines
                type="text"
                placeholder="Message"
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

            <Box sx={{ py: 1 }}>
              <Button
                // disabled={formik.isSubmitting}

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
                {/* {isLOading ? <Loader /> : "Continue"} */}
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
