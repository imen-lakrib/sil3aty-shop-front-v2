import React from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import Flex from "./Flex";
import { IconButton } from "@mui/material";

interface ArrowsProps {
  next: () => void;
  prev: () => void;
}

const Arrows: React.FC<ArrowsProps> = ({ next, prev }) => {
  return (
    <Flex>
      <IconButton
        sx={{
          color: "secondary.contrastText",
          "&:hover": {
            backgroundColor: `${"#ffffff"}20`,
          },
        }}
        onClick={prev}
      >
        <WestIcon />
      </IconButton>

      <IconButton
        sx={{
          color: "secondary.contrastText",
          "&:hover": {
            backgroundColor: `${"#ffffff"}20`,
          },
        }}
        onClick={next}
      >
        <EastIcon />
      </IconButton>
    </Flex>
  );
};

export default Arrows;
