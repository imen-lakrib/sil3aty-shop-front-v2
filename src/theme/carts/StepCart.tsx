import { Box, Chip, Typography } from "@mui/material";
import React from "react";

interface StepDataProps {
  data: {
    id: string;
    description: string;
    title: string;
    image: string;
    // Add more properties as needed
  };
}

const StepCart: React.FC<StepDataProps> = ({ data }) => {
  return (
    <Box sx={{ textAlign: "center", width:"230px", margin:"10px" }}>
        
      <Box
        sx={{
          margin: "10px 40px",
          width: "150",
          borderRadius: "30px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <img style={{width:"100%"}} src={data.image} alt="" />
      </Box>
      <Box sx={{ margin: "20px 0" }}>
        <Chip sx={{margin:"10px 0"}} label={`Step ${data.id}`} color="info" />

        <Typography
          variant="h3"
          sx={{ color: "secondary.light", fontSize: "18px" }}
        >
          {data.title}
        </Typography>
        <Typography sx={{ color: "secondary.contrastText" }}>
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default StepCart;
