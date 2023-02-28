import { Box, Chip, MenuItem } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import { alpha, styled } from "@mui/material/styles";
import { ReactNode } from "react";

const StyledNotificationMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 16,
    marginTop: theme.spacing(1),
    minWidth: 380,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "16px 0px",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const MenuItemNotificationStyled = styled(MenuItem)(({ theme }) => ({
  padding: "12px 19px",
  color: theme.palette.grey[600],

  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const ChipStyled = styled(Chip)(({ theme }) => ({
  "& .MuiChip-label": {
    color: "black",
    fontSize: "11px",
    fontWeight: 600,
  },
}));
export { StyledNotificationMenu, MenuItemNotificationStyled, ChipStyled };
