import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Main = () => {
  const { loginWithRedirect, user } = useAuth0();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!user) {
      loginWithRedirect({
        screen_hint: "login",
        redirectUri: `${window.location.origin}`,
      });
      return;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!user) {
      loginWithRedirect({
        screen_hint: "signup",
        redirectUri: `${window.location.origin}`,
      });
      return;
    }
  };

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
        <Button onClick={handleSignup} component="a" variant="contained">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Main;
