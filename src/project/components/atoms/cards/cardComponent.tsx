import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { AvatarStyled } from "./cardComponentStyled";

const CardComponent = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <AvatarStyled src="/profilePic/profile1.webp" />
      <Stack
        justifyContent={"center"}
        sx={{ fontSize: "13px", maxWidth: "280px" }}
      >
        <Typography
          display={"inline-block"}
          variant={"h2"}
          fontSize={"inherit"}
          marginBottom={'2px'}
        >
          Your Password has been <b>successfully changed</b>
        </Typography>
        <Typography fontSize={"inherit"}>July 23,2022 at 09:25 AM</Typography>
      </Stack>
    </Stack>
  );
};

export default CardComponent;
