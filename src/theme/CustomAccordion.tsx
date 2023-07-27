import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { alpha } from "@mui/material/styles";

interface CustomAccordionProps {
  header: string;
  content: React.ReactNode;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  header,
  content,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion
      sx={{ backgroundColor: "transparent" , color:"secondary.contrastText", margin:"10px 0"}}
      expanded={expanded}
      onChange={handleAccordionChange}
    >
      <AccordionSummary
        sx={{
            
          backgroundColor: `${alpha("#ccd3d6", 0.2)}`,
          borderRadius: "10px",
          padding: "0 10px",
        }}
        expandIcon={expanded ? <RemoveIcon sx={{color:"secondary.contrastText",}} /> : <AddIcon  sx={{color:"secondary.contrastText",}}/>}
      >
        <Typography sx={{fontWeight:"500"}} variant="h5">{header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: "flex", flexDirection: "column" }}>{content}</Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
