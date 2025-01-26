import { useState } from "react";
import "./App.css";
import LandingPage from "./features/landing/pages/LandingPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
