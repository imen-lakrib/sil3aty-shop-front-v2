import { Box, Button, Input, Typography } from "@mui/material";

import Flex from "../theme/Flex";

import { Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import axios from "axios";
import API_URL from "../routes/Api";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}send-email`, formData);
      alert("Message sent successfully!");
      // Reset the form after successful submission
      setFormData({
        fullname: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message.");
    }
  };

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
          display: { sx: "block", sm: "block", md: "flex", lg: "flex" },
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

          <Box sx={{ marginBottom: "20px", width: "200px" }}>
            <Typography
              variant="h5"
              sx={{ color: "secondary.light", marginBottom: "10px" }}
            >
              🌏 SOCIALS
            </Typography>
            <Flex justifyContent="space-between">
              <Avatar sx={{ bgcolor: "#1877f2", width: 34, height: 34 }}>
                <FacebookIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: "#E1306C", width: 34, height: 34 }}>
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
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Box sx={{ textAlign: "left", margin: "15px 0" }}>
              <Typography>Full name</Typography>
              <Input
                fullWidth
                name="fullname"
                type="text"
                placeholder="Full name"
                inputProps={{ style: { color: "#ffffff" } }}
                value={formData.fullname}
                onChange={handleChange}
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
                fullWidth
                name="email"
                type="text"
                placeholder="Email"
                inputProps={{ style: { color: "#ffffff" } }}
                value={formData.email}
                onChange={handleChange}
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
                fullWidth
                name="message"
                multiline
                rows={4} // Set the number of rows for multiple lines
                type="text"
                placeholder="Message"
                inputProps={{ style: { color: "#ffffff" } }}
                value={formData.message}
                onChange={handleChange}
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
