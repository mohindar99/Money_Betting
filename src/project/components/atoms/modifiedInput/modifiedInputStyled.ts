import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const CustomTextfield = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",

    "&.Mui-focused fieldset": {
      borderColor: "#c4c4c4",
    },

    "&:hover fieldset": {
      borderColor: "#cfcdcd",
    },
    input: {
      position: "relative",
      "&::placeholder": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        // color: "#9c9c9c",
        color: theme.palette.text.primary,
        fontSize: "15px",
        justifyContent: "center",
      },
    },
  },
}));
export { CustomTextfield };
