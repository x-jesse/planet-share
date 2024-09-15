import React from "react";
import { Box } from "@mui/material";
import Navigation from "./Navigation";
import { useTheme } from "@emotion/react";

const PageContainer = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: { sx: "block", md: "flex" } }}>
      <Navigation />
      <Box
        component="main"
        sx={{
          backgroundColor: theme.palette.background.default,
          height: "100vh",
          width: "100%",
        }}
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageContainer;
