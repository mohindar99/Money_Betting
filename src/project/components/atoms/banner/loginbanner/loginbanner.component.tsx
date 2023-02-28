import { CardMedia } from "@mui/material";
import Image from "next/image";
import React from "react";
import { CustomImageCard } from "./loginbannerStyled";

const Loginbanner = () => {
  return (
    <CustomImageCard
      variant="outlined"
      sx={{
        display: {
          xs: "none",
          lg: "flex",
        },
      }}
    >
      <Image
        src="/banner/banner.jpeg"
        alt=""
        fill
        style={{ padding: "10px", borderRadius: "14px" }}
      />
    </CustomImageCard>
  );
};

export default Loginbanner;
