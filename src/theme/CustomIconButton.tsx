import React from "react";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@mui/material";

interface CustomIconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  onClick,
  icon,
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
      {icon}
    </IconButton>
  );
};

export default CustomIconButton;
