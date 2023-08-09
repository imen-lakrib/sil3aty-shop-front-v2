import ImagesSwiper from "../theme/swiperOfImages/ImagesSwiper";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ margin: { xs: "15px", sm: "25px", md: "30px", lg: "40px" } }}>
      <Box
        sx={{
          margin: "100px 0",
          display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}>
          <Typography
            variant="h1"
            sx={{ color: "secondary.light", marginBottom: "40px" }}
          >
            👋 About Us.
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "secondary.contrastText", fontWeight: 400 }}
          >
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content which inform,
            educate and entertain millions of people in the around the world.
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}>
          <ImagesSwiper />
        </Box>
      </Box>

      <Box sx={{ margin: "100px 0" }}>
        <Box>
          <Typography
            variant="h2"
            sx={{ color: "secondary.light", marginBottom: "40px" }}
          >
            ⛱ Founder
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "secondary.contrastText", fontWeight: 400 }}
          >
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "50px 0",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "250px",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <img style={{ width: "100%" }} src="/imen.jpeg" alt="img" />
            </Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: "secondary.light" }}
            >
              Niamh O'Shea
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: "secondary.contrastText" }}
            >
              Co-founder and Chief Executive
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "100px 0",
          backgroundColor: "#0e131f",
          padding: "20px",
          borderRadius: "18px",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ color: "secondary.light", marginBottom: "20px" }}
          >
            Good news from far away 🥇
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "secondary.contrastText", fontWeight: 400 }}
          >
            Let's see what people think of Ciseco
          </Typography>
        </Box>
      </Box>

      <Box sx={{ margin: "100px 0" }}>
        <Box>
          <Typography
            variant="h2"
            sx={{ color: "secondary.light", marginBottom: "40px" }}
          >
            🚀 Fast Facts
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "secondary.contrastText", fontWeight: 400 }}
          >
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "50px 0",
          }}
        >
          <Box
            sx={{
              width: "300px",
              borderRadius: "18px",
              overflow: "hidden",
              backgroundColor: "#1f2937",
              padding: "20px",
              margin:"10px"
            }}
          >
            <Typography variant="h3" sx={{ color: "secondary.light" }}>
              10 million
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: "secondary.contrastText" }}
            >
              Articles have been public around the world (as of Sept. 30, 2021)
            </Typography>
          </Box>

          <Box
            sx={{
              width: "300px",
              borderRadius: "18px",
              overflow: "hidden",
              backgroundColor: "#1f2937",
              padding: "20px",
              margin:"10px"
            }}
          >
            <Typography variant="h3" sx={{ color: "secondary.light" }}>
              100,000
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: "secondary.contrastText" }}
            >
              Registered users account (as of Sept. 30, 2021){" "}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "300px",
              borderRadius: "18px",
              overflow: "hidden",
              backgroundColor: "#1f2937",
              padding: "20px",
              margin:"10px"
            }}
          >
            <Typography variant="h3" sx={{ color: "secondary.light" }}>
              220+
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: "secondary.contrastText" }}
            >
              Countries and regions have our presence (as of Sept. 30, 2021)
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "100px 0",
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "18px",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ color: "secondary.light", marginBottom: "20px" }}
          >
            Don't miss out on special offers
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "secondary.contrastText", fontWeight: 400 }}
          >
Register to receive news about the latest, savings combos, discount codes...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
