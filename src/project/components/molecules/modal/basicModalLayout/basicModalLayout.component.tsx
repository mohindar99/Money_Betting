import { CloseRounded } from "@mui/icons-material";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";

interface BasicModalLayoutInterface {
  title: string;
  description: string;
  children?: ReactNode;
  crossFunc?: () => void;
}

const BasicModalLayout = ({
  title,
  description,
  children,
  crossFunc,
}: BasicModalLayoutInterface) => {
  title = title || "Logout";
  description = description || "Lorem ipsum dolor, minima quaerat dolores.";
  const sharedSize = "28px";

  return (
    <Stack alignItems={"center"} sx={{ position: "relative" }}>
      {crossFunc && (
        <Avatar
          sx={{
            width: sharedSize,
            height: sharedSize,
            backgroundColor: (theme) => theme.palette.grey[500],
            position: "absolute",
            right: "-40px",
            top: "-30px",
            cursor: "pointer",
          }}
          onClick={crossFunc}
        >
          <CloseRounded fontSize="small" />
        </Avatar>
      )}
      <Box
        sx={{
          position: "relative",
          height: "33px",
          width: "30px",
          marginBottom: "16px",
        }}
      >
        <Image src="/icon/logoutIcon.png" alt="" fill />
      </Box>
      <Typography
        variant="h2"
        fontSize={"21px"}
        color={(theme) =>
          theme.palette.mode === "light"
            ? theme.palette.common.black
            : theme.palette.common.white
        }
        fontWeight={600}
        maxWidth={"200px"}
        textAlign={"center"}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        fontSize={"13px"}
        color={(theme) =>
          theme.palette.mode === "light"
            ? theme.palette.common.black
            : theme.palette.common.white
        }
        fontWeight={400}
        maxWidth={"80%"}
        textAlign={"center"}
        marginTop={"8px"}
        marginBottom={"12px"}
      >
        {description}
      </Typography>
      {children}
    </Stack>
  );
};

export default BasicModalLayout;
