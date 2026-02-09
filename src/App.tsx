import { ThemeProvider } from "styled-components";
import { StoresProvider } from "./srores/StoresProvider";
import { theme } from "./shared/styles/theme";
import { GlobalStyles } from "./shared/styles/globalStyles";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <StoresProvider>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </StoresProvider>
  );
}

export default App;
