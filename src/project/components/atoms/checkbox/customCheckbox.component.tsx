import { Checkbox, Stack, Typography } from "@mui/material";
import React from "react";
import { StyledCheckbox } from "./customCheckboxStyled";
import DoneIcon from "@mui/icons-material/Done";

interface CustomCheckboxInterface {
  checked?: boolean;
  handleClickFunc?: () => void;
}

const CustomCheckbox = ({
  checked,
  handleClickFunc,
}: CustomCheckboxInterface) => {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
      <StyledCheckbox onClick={handleClickFunc}>
        {checked && (
          <DoneIcon
            sx={{
              height: "100%",
              width: "100%",
              fontWeight: 900,
              color: (theme) => theme.palette.secondary.main,
            }}
          />
        )}
      </StyledCheckbox>
      <Typography variant="caption" fontWeight={600} fontSize={"13px"}>
        Remember me
      </Typography>
    </Stack>
  );
};

export default CustomCheckbox;
