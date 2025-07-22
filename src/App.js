import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WeatherContainer from "./components/WeatherContainer";
import Button from "@mui/material/Button";

const theme = createTheme({
  typography: {
    fontFamily: ['"IBM"'],
    fontWeightThin: 100,
    fontWeightExtraLight: 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#3d5afe",
          direction: "rtl",
        }}
      >
        <WeatherContainer />
        <Button variant="text" style={{ color: "white" }}>
          Text
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

