import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Home from "./Home";
import Movies from "./Movies";
import theme from "./Utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
