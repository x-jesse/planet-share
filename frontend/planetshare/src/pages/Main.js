import React from "react";
import { Box, Button, Typography } from "@mui/material";

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
      <h1 style={{ color: "#ffffff" }}>PlanetShare</h1>
      <Box display="flex" flexDirection="column" gap={"1rem"}>
        <Button variant="contained">Sign Up</Button>
        <Button variant="outlined">Log In</Button>
      </Box>
    </Box>
  );
};

export default Main;
