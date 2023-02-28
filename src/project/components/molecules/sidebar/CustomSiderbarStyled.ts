import { Drawer } from "@mui/material";
import { styled } from "@mui/system";

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  maxWidth: "300px",
  "& .MuiDrawer-paper": {
    padding: "0px 16px",
    position: "relative",
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    zIndex: 1000,
  },
}));

export { DrawerStyled };
