// import axios from "axios";
// import API_URL from "../../routes/Api";

// import { useEffect, useState } from "react";
// import {
//   Avatar,
//   Box,
//   Button,
//   Input,
//   InputAdornment,
//   Typography,
// } from "@mui/material";
// import jwt_decode from "jwt-decode";
// import EditIcon from "@mui/icons-material/Edit";
// import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

// const AccountInfo = () => {
//   const [userInfo, setUserInfo] = useState({});
//   const [editing, setEditing] = useState(false);
//   const [editedInfo, setEditedInfo] = useState({});

//   useEffect(() => {
//     // Decode the token to extract the role
//     const decodedToken = jwt_decode(localStorage.getItem("token"));
//     const userId = decodedToken?.id?.id;

//     const fetchUserProfile = async (userId) => {
//       try {
//         const response = await axios.get(`${API_URL}user/profile/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         setUserInfo(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (userId) {
//       fetchUserProfile(userId);
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedInfo((prevInfo) => ({
//       ...prevInfo,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const updatedInfo = { ...userInfo, ...editedInfo };
//       await axios.put(`${API_URL}user/edit/${userInfo._id}`, updatedInfo, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       console.log("gooooooooooooooooooooooood");

//       // Optional: Show success message or perform other actions

//       setEditing(false);
//       setUserInfo(updatedInfo);
//       setEditedInfo({});
//     } catch (error) {
//       console.log(error);
//       console.log("baaaaaaaaaaaaaaaaaaaaad");

//       // Optional: Show error message or perform error handling
//     }
//   };

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  Avatar,
  Box,
  Button,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import jwt_decode from "jwt-decode";
import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import axios from "axios";
import API_URL from "../../routes/Api";

interface UserInfo {
  _id: string;
  username: string;
  email: string;
  // Add other fields based on your user information
}

const AccountInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ _id: "", username: "", email: "" });
  const [editing, setEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState<Partial<UserInfo>>({});

  useEffect(() => {
    // Decode the token to extract the role
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: { id: { id: string } } = jwt_decode(token);
      const userId = decodedToken?.id?.id;

      const fetchUserProfile = async (userId: string) => {
        try {
          const response = await axios.get(`${API_URL}user/profile/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserInfo(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      if (userId) {
        fetchUserProfile(userId);
      }
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setEditedInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedInfo = { ...userInfo, ...editedInfo };
      await axios.put(`${API_URL}user/edit/${userInfo._id}`, updatedInfo, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("gooooooooooooooooooooooood");

      // Optional: Show success message or perform other actions

      setEditing(false);
      setUserInfo(updatedInfo);
      setEditedInfo({});
    } catch (error) {
      console.log(error);
      console.log("baaaaaaaaaaaaaaaaaaaaad");

      // Optional: Show error message or perform error handling
    }
  };
  return (
    <Box sx={{ padding: "20px 10px" }}>
      <Typography variant="h3">Account infomation</Typography>
      <Box
        sx={{
          display: { sx: "block", sm: "block", md: "flex", lg: "flex" },
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box position="relative" display="inline-block" p={2}>
          <Avatar
            alt="Remy Sharp"
            src="/5.png"
            sx={{
              width: 150,
              height: 150,
            }}
          />
          {editing ? (
            <Box
              sx={{
                width: 150,
                height: 150,
                justifyContent: "center",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: `${"#111827"}90`,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                zIndex: 1,
              }}
            >
              <AddPhotoAlternateOutlinedIcon
                onClick={() => {
                  setEditing(!editing);
                  setEditedInfo({});
                }}
              />
              <Typography>Change Image</Typography>
            </Box>
          ) : null}
        </Box>
        <Box
          sx={{ width: { sx: "100%", sm: "80%", md: "60%", lg: "60%" } }}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Box sx={{ textAlign: "left", margin: "10px 0" }}>
            <Typography>Full Name</Typography>
            <Input
              name="username"
              value={
                editing
                  ? editedInfo.username || userInfo.username
                  : userInfo.username
              }
              onChange={handleInputChange}
              disabled={!editing}
              fullWidth
              type="text"
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

          <Input
            name="email"
            value={
              editing ? editedInfo.email || userInfo.email : userInfo.email
            }
            onChange={handleInputChange}
            disabled={!editing}
            fullWidth
            type="text"
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
            startAdornment={
              <InputAdornment position="start">
                <EditIcon
                  sx={{
                    color: "#9e9e95",
                    backgroundColor: "#1f2937",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                />
              </InputAdornment>
            }
          />

          <Box sx={{ textAlign: "left", margin: "10px 0" }}>
            <Typography>Email</Typography>
            <Input
              name="email"
              value={
                editing ? editedInfo.email || userInfo.email : userInfo.email
              }
              onChange={handleInputChange}
              disabled={!editing}
              fullWidth
              type="text"
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

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!editing}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setEditing(!editing);
              setEditedInfo({});
            }}
          >
            {editing ? "Cancel" : "Edit"}
          </Button>
        </Box>
      </Box>
    </Box>
  );/*  */
};

export default AccountInfo;
