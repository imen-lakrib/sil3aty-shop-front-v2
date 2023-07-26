import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../theme/CustomButton";
import { heroSliders } from "../../data/Data";

const Hero = () => {
  const carouselContainerStyle = {
    margin: "0 !important",
    padding: "0 !important",
    width: "100%", // Adjust the width as needed
    position: "relative" as const, // Set the position to 'relative'
    overflow: "hidden",
  };

  return (
    <div style={carouselContainerStyle}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true} // Display the indicators
        interval={5000} // Adjust the interval as needed
      >
        {heroSliders.map((heroSlider) => {
          return (
            <div key={heroSlider.id}>
              <Box
                sx={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${heroSlider.path}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "550px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#fff",
                  padding:"0 50px"
                }}
              >
                <Box sx={{ maxWidth: "700px", margin: "0", textAlign: "left" }}>
                  <Typography
                    variant="h5"
                    component="h5"
                    sx={{ marginBottom: "1rem",fontSize:{xs:"15px", sm:"20px", md:"25px", lg:"25px"} }}
                  >
                    {heroSlider.title1}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{ marginBottom: "1rem" , fontSize:{xs:"30px", sm:"50px", md:"50px", lg:"50px"}}}
                  >
                    {heroSlider.title2}
                  </Typography>
                  <CustomButton color="secondary" variant="text">
                    {heroSlider.button}
                  </CustomButton>
                </Box>
              </Box>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
