import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* app component */}
    </ThemeProvider>
  );
}

export default App;
