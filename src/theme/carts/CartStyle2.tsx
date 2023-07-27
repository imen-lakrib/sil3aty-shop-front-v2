import React from "react";
import Flex from "../Flex";
import { Box, Typography } from "@mui/material";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";

interface CartStyle2Props {
  data: {
    // id: string;
    // subTitle: string;
    // title: string;
    // image: string;
    // link: string;
    categoryName: string
    // Add more properties as needed
  };
}

const CartStyle2: React.FC<CartStyle2Props> = ({ data }) => {

  // const navigate = useNavigate();
  


  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "secondary.main",
        padding: "20px",
        borderRadius: "15px",
        margin: "10px",
      }}
      component={Link} to={`category/${data.categoryName}`}
      // onClick={() => handleCategoryClick(data.link)}
    >
      <Flex justifyContent="space-between">
        <Box sx={{textAlign:"left", width:"55%"}}>
          <Typography sx={{ color: "primary.main", fontSize:"12px", margin:"5px 0" }} variant="body1">
            {data.categoryName}
          </Typography>
          <Typography sx={{ color: "primary.main", fontSize:"20px", margin:"5px 0"  }} variant="h3">
            {data.categoryName}
          </Typography>
          <Box sx={{ margin: "20px 0" }}>
            <CustomButton color="secondary" variant="text" fontSize="10px">
              click me
            </CustomButton>
          </Box>
        </Box>
        <Box sx={{ width: "150px" }}>
          <img style={{ width: "100%" }} src="/5.png" alt="" />
        </Box>
      </Flex>
    </Box>
  );
};

export default CartStyle2;
