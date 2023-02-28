import { AppBar, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CustomAppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "8px 0px",
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  backgroundImage: "none",

  //   [theme.breakpoints.up("xs")]: {
  //     maxWidth: "none",
  //     width: "100%",
  //   },
  //   [theme.breakpoints.up("sm")]: {
  //     maxWidth: "450px",
  //     // width: "50%",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     marginLeft: "40px",
  //     width: "50%",
  //   },
}));

const ModifiedAppField = styled(Typography)(({ theme }) => ({
  color: "#969696",
  fontSize: "14px",
  cursor: "pointer",
  //   padding:'10px'
}));

export { CustomAppBarStyled, ModifiedAppField };
