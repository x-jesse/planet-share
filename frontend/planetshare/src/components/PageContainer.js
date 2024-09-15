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
          width: { xs: "88vw", sm: "92vw", md: "auto" },
          backgroundColor: theme.palette.background.default,
        }}
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageContainer;
