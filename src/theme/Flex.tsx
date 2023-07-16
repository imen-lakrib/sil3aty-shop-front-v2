import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface FlexProps {
  children: ReactNode;
  justifyContent?: string;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse"; // Update the prop type here
  alignItems?: string;
}

const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent,
  alignItems,
  flexWrap
}) => (
  <div
    style={{
      display: "flex",
      justifyContent,
      alignItems,
      flexWrap,
    }}
  >
    {children}
  </div>
);

export default Flex;
