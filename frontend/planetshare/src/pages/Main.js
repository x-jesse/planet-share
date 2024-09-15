import React from "react";
import { Box, Typography } from "@mui/material";

const Main = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={"100vh"}
      gap="2rem"
      backgroundColor="primary.main"
    >
      <h1>PlanetShare</h1>
      <button>Hello</button>
    </Box>
  );
};

export default Main;
