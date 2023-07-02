import React from "react";

interface RoundIconProps {
  children: React.ReactNode;
}

const RoundIcon: React.FC<RoundIconProps> = ({ children }) => {
  const iconStyle: React.CSSProperties = {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
  };

  return (
    <div style={iconStyle}>
      {children}
    </div>
  );
};

export default RoundIcon;
