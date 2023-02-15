import React from "react";
import ToggleColorMode from "./theme/theme";
import HomePage from "./page";
import { Box } from "@mui/system";
import ChildAndDadPage from "./page/ChildAndDad";

function App() {
  return (
    <Box>
      <ToggleColorMode>
        <HomePage />
        <ChildAndDadPage />
      </ToggleColorMode>
    </Box>
  );
}

export default App;
