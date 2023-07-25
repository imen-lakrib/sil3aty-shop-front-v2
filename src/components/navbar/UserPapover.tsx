import React from "react";
import { selectEmail, selectIsLoggedIn } from "../../redux/slices/userSlice";

import {
  Box,
  Popover,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";

import {  useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Flex from "../../theme/Flex";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PlaylistAddCheckCircleOutlinedIcon from "@mui/icons-material/PlaylistAddCheckCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import CustomIconButton from "../../theme/CustomIconButton";
import useLogout from "../../utils/HandleLogout";

interface UserPopoverProps {
  openUser: any; // Replace 'any' with the correct type for 'openUser'
  setOpenUser: (value: any) => void; // Replace 'any' with the correct type for 'setOpenUser'
}

const UserPapover: React.FC<UserPopoverProps> = ({ openUser, setOpenUser }) => {
  const useremail= useSelector(selectEmail)
  const isLoggedIn = useSelector(selectIsLoggedIn);



  const handleClose = () => {
    setOpenUser(false);
  };

  


  // Calculate total items price

  const navigate = useNavigate();

  // handle logout
  const handleLogout = useLogout();

  return (
    <div>
      <Popover
        open={Boolean(openUser)}
        anchorEl={openUser}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            backgroundColor: "#1f2937",
            borderRadius: "20px",
            p: 1,
            mt: "20px",
            width: "250px",
            right: "10px",
            height: "400px",
            zIndex: 9999999, // Set a higher z-index value here
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
            position: "fixed", // Update the position to "fixed"
          },
        }}
      >
        <Box sx={{ padding: "20px", color: "secondary.light" }}>
          <Box>
            <Flex alignItems="stretch">
              <Avatar alt="Remy Sharp" src="/5.png" />
              <Box sx={{ marginLeft: "10px" }}>
                <Typography variant="h6">{isLoggedIn? useremail: "Guest"}</Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  any where from the world
                </Typography>
              </Box>
            </Flex>
          </Box>
          <Divider
            sx={{ backgroundColor: "secondary.contrastText", margin: "25px 0" }}
          />
          {isLoggedIn ? (
            <Box>
              <CustomIconButton
                backgroundColor="transparent"
                fontSize="15px"
                color="secondary"
                text="My Account"
                onClick={() => {
                  navigate("/my-account/account-info")
                  handleClose()

                }}
                icon={<Person2OutlinedIcon sx={{ fontSize: "20px" }} />}
              />

              <CustomIconButton
                backgroundColor="transparent"
                fontSize="15px"
                color="secondary"
                text="My Order"
                onClick={() => navigate("/my-account/my-orders")}
                icon={
                  <PlaylistAddCheckCircleOutlinedIcon
                    sx={{ fontSize: "20px" }}
                  />
                }
              />
              <CustomIconButton
                backgroundColor="transparent"
                fontSize="15px"
                color="secondary"
                text="My Wishlist"
                onClick={() => navigate("/my-account/wishlist")}
                icon={<FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />}
              />
            </Box>
          ) : (
            <Box>
              <CustomIconButton
                backgroundColor="transparent"
                fontSize="15px"
                color="secondary"
                text="Login"
                onClick={() => navigate("/login")}
                icon={<ExitToAppOutlinedIcon sx={{ fontSize: "20px" }} />}
              />
              <CustomIconButton
                backgroundColor="transparent"
                fontSize="15px"
                color="secondary"
                text="Register"
                onClick={() => navigate("/register")}
                icon={<HowToRegOutlinedIcon sx={{ fontSize: "20px" }} />}
              />
            </Box>
          )}

          {isLoggedIn ? (
            <Box>
              <Divider
                sx={{
                  backgroundColor: "secondary.contrastText",
                  margin: "20px 0",
                }}
              />
              <CustomIconButton
                backgroundColor="transparent"
                fontSize="15px"
                color="secondary"
                text="Logout"
                onClick={handleLogout}
                icon={<LoginOutlinedIcon sx={{ fontSize: "20px" }} />}
              />
            </Box>
          ) : null}
        </Box>
      </Popover>
    </div>
  );
};

export default UserPapover;
