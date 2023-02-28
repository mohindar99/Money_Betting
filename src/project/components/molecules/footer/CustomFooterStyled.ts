import { Box, Chip, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const TypographyHeadingStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "18px",
  marginTop: "auto",
}));

const StackStyled = styled(Stack)(({ theme }) => ({
  marginTop: "20px",
  height: "70px",
  display: "grid",
  gridTemplateRows: "30px",
  fontSize: "14px",
}));

const ChipStyled = styled(Chip)(({ theme }) => ({
  backgroundColor: "transparent",
  color:'inherit',
  display: "flex",
  justifyContent: "start",
  width: "fit-content",
  minWidth: "150px",

  "& .MuiChip-label": {
    fontSize: "14px",
  },

  "& .MuiChip-iconColorDefault": {
    // borderRadius: "50%",
    color: "inherit",
  },
}));

export { TypographyHeadingStyled, StackStyled, ChipStyled };
