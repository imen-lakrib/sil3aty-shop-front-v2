import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import CustomButton from "./theme/CustomButton";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        

      </ThemeProvider>
    </>
  );
}

export default App;
