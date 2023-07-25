import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  fontSize?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  backgroundColor,
  textColor,
  hoverColor,
  fontSize,
  ...props
}) => {
  const buttonStyle = {
    fontSize: fontSize ? fontSize : "15px",
    padding: { xs: "5px", sm: "10px 20px", md: "10px 20px", lg: "10px 20px" },
    backgroundColor: backgroundColor ? backgroundColor : '#111827',
    borderRadius: '20px',
    color: textColor,
    '&:hover': {
      backgroundColor: hoverColor ? `${hoverColor}80` : `${'#ccd3d6'}80`,
      color: "#111827",
    },
    fontWeight: '600',
    // Add more styles as needed
  };

  return (
    <Button sx={buttonStyle} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
