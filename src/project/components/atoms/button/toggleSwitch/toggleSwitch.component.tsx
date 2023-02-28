import { FormControlLabel, PaletteMode } from "@mui/material";
import React from "react";
import { MaterialUISwitch } from "./toggleSwitchStyled";

interface ToggleSwitchInterface {
  mode: PaletteMode;
  handleToggle: () => void;
}

const ToggleSwitch = ({ mode, handleToggle }: ToggleSwitchInterface) => {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} />}
      label={null}
      checked={mode === "light" ? false : true}
      onChange={handleToggle}
    />
  );
};

export default ToggleSwitch;
