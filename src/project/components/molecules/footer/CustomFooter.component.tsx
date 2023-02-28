import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  ChipStyled,
  StackStyled,
  TypographyHeadingStyled,
} from "./CustomFooterStyled";

import { Twitter, Instagram } from "@mui/icons-material";
import { FaDiscord, FaFacebookF } from "react-icons/fa";

const CustomFooter = () => {
  const sharedDimension = {
    display: "grid",
    gridTemplateRows: "50px auto",
    margin: "10px 0px",
  };
  const sharedFontStyle = { fontSize: "inherit" };
  const sharedMargin = "30px";
  return (
    <Stack
      sx={{
        padding: `0px 50px`,
        backgroundColor: (theme) => theme.palette.secondary.main,
        color: (theme) => (theme.palette.mode === "light" ? "#fff" : "#fff"),
      }}
    >
      <Grid
        container
        sx={{
          padding: `${sharedMargin} 0px`,
          minHeight: "200px",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} lg={5} sx={sharedDimension}>
          <TypographyHeadingStyled fontSize={"26px !important"}>
            LOGO
          </TypographyHeadingStyled>
          <StackStyled sx={{ width: "70%", ...sharedFontStyle }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit qui vitae dicta incidunt commodi.
          </StackStyled>
        </Grid>
        <Grid item xs={6} lg={2} sx={sharedDimension}>
          <TypographyHeadingStyled>Platform</TypographyHeadingStyled>
          <StackStyled>
            <Typography sx={sharedFontStyle}>Support</Typography>
            <Typography sx={sharedFontStyle}>FAQ</Typography>
          </StackStyled>
        </Grid>
        <Grid item xs={6} lg={2} sx={sharedDimension}>
          <TypographyHeadingStyled>About Us</TypographyHeadingStyled>
          <StackStyled sx={sharedFontStyle}>
            <Typography sx={sharedFontStyle}>Privacy Policy</Typography>
            <Typography sx={sharedFontStyle}>Terms and Conditions</Typography>
          </StackStyled>
        </Grid>
        <Grid item xs={6} lg={3} sx={sharedDimension}>
          <TypographyHeadingStyled>Communities</TypographyHeadingStyled>
          <StackStyled
            sx={{
              gridTemplateColumns: "auto auto",
              ...sharedFontStyle,
            }}
          >
            <ChipStyled
              icon={<FaFacebookF style={{ fontSize: "1.2125rem" }} />}
              label="Facebook"
            />
            <ChipStyled icon={<Instagram />} label="Instagram" />
            <ChipStyled icon={<Twitter />} label="Twitter" />
            <ChipStyled
              icon={<FaDiscord style={{ fontSize: "1.2125rem" }} />}
              label="Discord"
            />
          </StackStyled>
        </Grid>
      </Grid>
      <Divider
        sx={{
          borderBottomWidth: 1,
          background: (theme) =>
            theme.palette.mode === "light" ? "#fff" : "#fff",
        }}
      />
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ padding: `${sharedMargin} 0px` }}
      >
        <Typography sx={sharedFontStyle}>
          Copyright © 2022 HUSH,Dominos, Inc. All rights reserved.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CustomFooter;
