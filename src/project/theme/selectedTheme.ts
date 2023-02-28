import { PaletteMode } from "@mui/material";
import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { lightThemePalette, darkThemePalette } from "./pallets";
import { typography } from "./typography";

const selectedTheme = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === "light" ? lightThemePalette : darkThemePalette),
    },
    breakpoints,
    typography,
    components,
  };
};

export { selectedTheme };
