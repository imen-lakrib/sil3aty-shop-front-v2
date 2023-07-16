import React from "react";
import IconButton from "@mui/material/IconButton";
import { IconButtonProps } from "@mui/material";

interface CustomIconButtonProps extends Omit<IconButtonProps, "color"> {
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  fontSize?: string;
  clickEvent?: () => void;
  icon: React.ReactNode;
  text?: string;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  color,
  backgroundColor,
  textColor,
  hoverColor,
  fontSize,
  clickEvent,
  icon,
  text,
  ...props
}) => {
  const buttonStyle = {
    display: "flex", // Add flex display
    alignItems: "center", // Center icon and text vertically
    gap: "5px", // Add space between icon and text
    fontSize: fontSize ? fontSize : "15px",
    padding: { xs: "5px", sm: "10px 20px", md: "10px 20px", lg: "10px 20px" },
    backgroundColor: backgroundColor ? backgroundColor : "#111827",
    borderRadius: "20px",
    color: textColor,
    "&:hover": {
      backgroundColor: hoverColor ? `${hoverColor}80` : `${"#ccd3d6"}80`,
      color: "#111827",
    },
    fontWeight: "600",
    // Add more styles as needed
  };

  return (
    <IconButton sx={buttonStyle} color={color} onClick={clickEvent} {...props}>
      {icon}
      {text}
    </IconButton>
  );
};

export default CustomIconButton;
