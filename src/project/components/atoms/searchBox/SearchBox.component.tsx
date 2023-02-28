import { Box, TextField } from "@mui/material";
import React from "react";
// import SearchIcon from "/public/icon/searchIcon.svg";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#f8f8f8",
        padding: "0px 14px",
        borderRadius: "5px",
        width: "100%",
      }}
    >
      <SearchIcon sx={{ fontSize: "26px", color: "#307ecc" }} />
      <TextField
        sx={{
          padding: "10px 8px",
          width: "100%",
          input: { color: (theme) => theme.palette.text.primary },
        }}
        variant="standard"
        InputProps={{ disableUnderline: true }}
      />
      <CloseIcon sx={{ cursor: "pointer" }} />
    </Box>
  );
};

export default SearchBox;
