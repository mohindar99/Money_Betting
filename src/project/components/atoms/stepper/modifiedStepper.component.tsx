import { Box, Stack } from "@mui/material";
import React, { useState } from "react";

interface ModifiedSliderInterface {
  selectedItemIndex: number;
  numberOfElements: number;
  handleClick?: (index: number) => void;
}
const ModifiedStepper = ({
  selectedItemIndex,
  numberOfElements,
  handleClick,
}: ModifiedSliderInterface) => {
  selectedItemIndex = selectedItemIndex || 0;
  numberOfElements = numberOfElements || 1;
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        padding: { xs: "10px", sm: "26px" },
        borderRadius: "20px",
        width: "fit-content",
        boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
        backgroundColor: (theme) => theme.palette.primary.main,
        zIndex: 4,
      }}
    >
      {Array(numberOfElements)
        .fill(1)
        .map((item, index) => (
          <Box
            key={index + "modifiedStepper"}
            onClick={() => handleClick && handleClick(index)}
            sx={{
              height: "4px",
              width: selectedItemIndex === index ? "25px" : "13px",
              borderRadius: "10px",
              backgroundColor:
                selectedItemIndex === index
                  ? (theme) => theme.palette.secondary.main
                  : (theme) => theme.palette.grey[400],
              transition: "width 0.5s ease-in-out",
              cursor: "pointer",
              margin: selectedItemIndex === index ? "0px 4px" : "0px 2px",
              marginLeft: selectedItemIndex === 0 ? "0px" : "",
              marginRightt:
                selectedItemIndex === numberOfElements - 1 ? "0px" : "",
            }}
          />
        ))}
    </Stack>
  );
};

export default ModifiedStepper;
