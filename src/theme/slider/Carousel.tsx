import React, { useState } from "react";
import Arrows from "../Arrows";
import { Box, Container, Typography } from "@mui/material";

interface CarouselProps {
  children: React.ReactElement[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = children.length;

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const renderSlides = () => {
    const displayedSlides = [
      children[currentIndex],
      children[(currentIndex + 1) % totalSlides],
      children[(currentIndex + 2) % totalSlides],
    ];
    return displayedSlides.map((slide, index) => (
      <Box key={index}>{slide}</Box>
    ));
  };

  return (
    <>
      <Arrows next={goToNextSlide} prev={goToPreviousSlide} />

      <Box sx={{overflow:"hidden"}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",

          }}
        >
          {renderSlides()}
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
