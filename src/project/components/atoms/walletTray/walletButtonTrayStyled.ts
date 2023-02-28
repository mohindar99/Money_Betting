import { Chip } from "@mui/material";
import { styled } from "@mui/system";

const CustomChip = styled(Chip)(({ theme }) => ({
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
  minWidth: "fit-content",
  fontSize: "13px",
  fontWeight: 600,
  height: "35px",
  backgroundColor: theme.palette.background.main,

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
}));

export { CustomChip };
