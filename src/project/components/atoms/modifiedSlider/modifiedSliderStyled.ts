import { styled } from "@mui/material";
import Slider from "react-slick";

const StyledSlider = styled(Slider)({
  width: "100% !important",
  justifyContent: "center",
  alignItems: "center",

  "& .slider": {
    height: "100%",
    width: "100%",
    background: "yellow",
    overflow: "hidden",
    
    ".slide": {
      overflow: "hidden",
    },

    "& .item": {
      width: "100%",
      height: "100%",
    },
  },
});

export { StyledSlider };
