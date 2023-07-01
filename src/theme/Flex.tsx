import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface FlexProps {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
}

const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent,
  alignItems,
}) => (
  <div
    style={{
      display: "flex",
      justifyContent,
      alignItems,
    }}
  >
    {children}
  </div>
);

export default Flex;
