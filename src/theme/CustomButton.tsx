

import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  children: React.ReactNode;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  variant?: 'text' | 'contained' | 'outlined';
  fontSize?:string,
  clickEvent?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  color,
  backgroundColor,
  textColor,
  hoverColor,
  variant,
  clickEvent,
  fontSize,
  ...props
}) => {
  const buttonStyle = {
    fontSize:fontSize? fontSize: "15px",
    padding: {xs:"5px", sm:"10px 20px", md:"10px 20px", lg:"10px 20px"},
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
    <Button variant={variant} sx={buttonStyle} color={color} {...props} onClick={clickEvent}>
      {children}
    </Button>
  );
};

export default CustomButton;
