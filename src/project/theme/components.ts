import { purple, red, blue, green } from "@mui/material/colors";

const components = {
  MuiButton: {
    styleOverrides: {
      // Name of the slot
      root: {
        color: "#fff",
        background: blue[600],
        "&:hover": {
          background: blue[700],
        },

        ".MuiButton-outlined": {
          // color: "#000",
          background: green[600],
          "&:hover": {
            background: red[800],
          },
        },
      },
    },
    defaultProps: {
      // The props to change the default for.
      disableRipple: false, // No more ripple, on the whole application 💣!
    },
  },
};

export { components };
