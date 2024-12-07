import React from "react";
import MobileNav from "./MobileNav";
import WebNav from "./WebNav";
import { useTheme, useMediaQuery, Box } from "@mui/material";

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return <Box component="nav">{isMobile ? <MobileNav /> : <WebNav />}</Box>;
};

export default Navigation;
