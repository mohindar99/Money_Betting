import { Box } from "@mui/material";
import { styled } from "@mui/system";

const CustomModalBox = styled(Box)(({ theme }) => ({
  minWidth: "200px",
  minHeight: "60px",
  padding: "20px 30px",
  borderRadius: "20px",
  boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.1)",
  border:
    theme.palette.mode === "light"
      ? "solid 1px #ccc"
      : `solid 1px ${theme.palette.grey[500]}`,
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

export { CustomModalBox };
