import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledCheckbox = styled(Box)(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "18px",
  height: "18px",
  outline:'1px solid grey',
  borderRadius: "7px",
  cursor: "pointer",
  marginRight:'10px'
}));

export { StyledCheckbox };
