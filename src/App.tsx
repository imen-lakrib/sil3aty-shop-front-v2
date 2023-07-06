import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import CustomButton from "./theme/CustomButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop  />}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
