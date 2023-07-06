import React from "react";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@mui/material";

interface CustomIconButtonProps {
  onClick?: () => void;
  icon: React.ReactNode;
  text?: string;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  onClick,
  icon,
  text
}) => {
  return (
    <IconButton
      sx={{
        color: "secondary.main",
        "&:hover": {
          backgroundColor: `${"#ffffff"}20`,
        },
      }}
      onClick={onClick}
    >
      {icon} {text}
    </IconButton>
  );
};

export default CustomIconButton;
