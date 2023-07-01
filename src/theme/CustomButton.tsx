// import React from 'react';
// import Button from '@mui/material/Button';

// // Custom Button component
// interface CustomButtonProps {
//   children: React.ReactNode;
//   color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
//   backgroundColor?: string;
//   textColor?: string;
//   hoverColor?: string;
//   variant?: 'text' | 'contained' | 'outlined';
//   clickEvent?: () => void;
// }

// const CustomButton: React.FC<CustomButtonProps> = ({
//   children,
//   color,
//   backgroundColor,
//   textColor,
//   hoverColor,
//   variant,
//   clickEvent,
//   ...props
// }) => {
//   const buttonStyle = {
//     backgroundColor: backgroundColor ? backgroundColor : '#111827',
//     borderRadius: '20px',
//     color: textColor,
//     '&:hover': {
//       backgroundColor: hoverColor ? `${hoverColor}80` : `${'#ccd3d6'}80`,
//     },
//     // Add more styles as needed
//   };

//   return (
//     <Button variant={variant} sx={{ ...buttonStyle, color }} {...props} onClick={clickEvent}>
//       {children}
//     </Button>
//   );
// };

// export default CustomButton;



import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  children: React.ReactNode;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  variant?: 'text' | 'contained' | 'outlined';
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
  ...props
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor ? backgroundColor : '#111827',
    borderRadius: '20px',
    color: textColor,
    '&:hover': {
      backgroundColor: hoverColor ? `${hoverColor}80` : `${'#ccd3d6'}80`,
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
