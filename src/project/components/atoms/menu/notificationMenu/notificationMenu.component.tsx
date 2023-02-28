import { DoneAll, NotificationsOutlined } from "@mui/icons-material";
import { Badge, Box, Divider, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import CardComponent from "../../cards/cardComponent";
import {
  ChipStyled,
  MenuItemNotificationStyled,
  StyledNotificationMenu,
} from "./notificationMenuStyled";

interface NotificationMenuInterface {
  openMenu: boolean;
  handleOpenMenu: () => void;
}

const NotificationMenu = ({
  openMenu,
  handleOpenMenu,
}: NotificationMenuInterface) => {
  const componentRef = useRef(null);
  return (
    <Box>
      <Box
        ref={componentRef}
        onClick={handleOpenMenu}
        sx={{
          background: "#307ecc",
          padding: "14px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        <Badge
          variant="dot"
          invisible={false}
          sx={{
            color: "#fff",
            "& .MuiBadge-badge": {
              backgroundColor: "#b73838",
              right: `9px`,
              top: `5px`,
            },
          }}
        >
          <NotificationsOutlined sx={{ fontSize: "24px" }} />
        </Badge>
      </Box>
      <StyledNotificationMenu
        open={openMenu}
        onClick={handleOpenMenu}
        anchorEl={componentRef.current}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
          sx={{
            padding: "4px 0px",
            margin: "0px 16px",
          }}
        >
          <Typography variant="h6" fontWeight={700} sx={{ color: "black" }}>
            Notification
          </Typography>
          <ChipStyled
            sx={{ backgroundColor: "transparent" }}
            icon={<DoneAll sx={{ fontSize: "18px" }} />}
            label="Mark as read"
          />
        </Stack>
        <Divider
          sx={{
            margin: "12px 16px",
          }}
        />

        <Box sx={{ maxHeight: "200px", overflowY: "scroll" }}>
          <MenuItemNotificationStyled
            sx={{
              whiteSpace: "unset",
              wordBreak: "break-word",
            }}
          >
            <CardComponent />
          </MenuItemNotificationStyled>
          <MenuItemNotificationStyled
            sx={{
              whiteSpace: "unset",
              wordBreak: "break-word",
            }}
          >
            <CardComponent />
          </MenuItemNotificationStyled>
          <MenuItemNotificationStyled
            sx={{
              whiteSpace: "unset",
              wordBreak: "break-word",
            }}
          >
            <CardComponent />
          </MenuItemNotificationStyled>
          <MenuItemNotificationStyled
            sx={{
              whiteSpace: "unset",
              wordBreak: "break-word",
            }}
          >
            <CardComponent />
          </MenuItemNotificationStyled>
          <MenuItemNotificationStyled
            sx={{
              whiteSpace: "unset",
              wordBreak: "break-word",
            }}
          >
            <CardComponent />
          </MenuItemNotificationStyled>
        </Box>
      </StyledNotificationMenu>
    </Box>
  );
};

export default NotificationMenu;
