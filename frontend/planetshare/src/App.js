import React, { useEffect } from "react";
import { useTheme, ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import Main from "./pages/Main";
import "./App.css";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("test");
      let response = await fetch("http://127.0.0.1:5000/api/listall");
      let jsonData = await response.json();
      console.log("list all response: ", JSON.stringify(jsonData));

      response = await fetch("http://127.0.0.1:5000/api/search?name=Jesse");
      jsonData = await response.json();
      console.log("search response: ", JSON.stringify(jsonData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
