import {
  Avatar,
  Box,
  Button,
  Chip,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";
import {
  ArrowDropUp,
  ArrowDropDown,
  AccountBalanceWalletOutlined,
  SettingsOutlined,
  PowerSettingsNewOutlined,
} from "@mui/icons-material";
import { MenuItemStyled, StyledMenu } from "./profileMenuStyled";
import ModifiedModal from "@/project/components/molecules/modal/modifiedModal.component";
import YesNoModal from "@/project/components/molecules/modal/yesNoModal/yesNoModal.component";
import { logoutUser, token } from "@/project/utility/AxiosInterceptors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/project/reduxToolkit/store";
import {
  authAccessDispatchers,
  resetLogin,
} from "@/project/reduxToolkit/auth/authSlice";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useRouter } from "next/router";

interface ProfileMenuInterface {
  openMenu: boolean;
  handleOpenMenu: () => void;
  handleLogout: (value: boolean) => void;
  isLogin: boolean;
}
const ProfileMenu = ({
  openMenu,
  handleOpenMenu,
  handleLogout,
  isLogin,
}: ProfileMenuInterface) => {
  const componentRef = useRef(null);
  const modalRef = useRef<any>();
  const dispatch = useDispatch();
  const router = useRouter();
  // const { logout } = useSelector((state: RootState) => state?.authSlice);

  const handleShowLogoutModal = useCallback(
    (isVisible: boolean) => {
      if (modalRef.current) {
        isVisible
          ? modalRef.current.openModal()
          : modalRef.current.closeModal();
      }
    },
    [modalRef]
  );

  const handleClickLogout = async () => {
    const isLogin = await logoutUser();
    handleLogout(isLogin);
  };
  const sharedDimension = 44;
  const sharedArrowStyle = {
    color: "primary",
    fontSize: "30px",
    cursor: "pointer",
  };
  const sharedMenuList = {
    fontSize: "12px",
    fontWeight: 500,
  };
  const sharedIconStyle = { color: "inherit !important" };

  return (
    <Box>
      {isLogin ? (
        <>
          <Stack
            ref={componentRef}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              minWidth: "200px",
              padding: "0px 10px",
            }}
          >
            <Avatar
              src="/profilePic/profile1.webp"
              sx={{ width: sharedDimension, height: sharedDimension }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: "11px", fontWeight: 600 }}
              >
                Welcome
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "14px", fontWeight: 600 }}
              >
                Gandalf Hand
              </Typography>
            </Box>
            {openMenu ? (
              <ArrowDropUp sx={sharedArrowStyle} onClick={handleOpenMenu} />
            ) : (
              <ArrowDropDown sx={sharedArrowStyle} onClick={handleOpenMenu} />
            )}
          </Stack>

          <StyledMenu
            open={openMenu}
            anchorEl={componentRef.current}
            onClose={handleOpenMenu}
          >
            {/* <MenuItemStyled>
              <AccountBalanceWalletOutlined sx={sharedIconStyle} />
              <Typography
                fontSize={sharedMenuList.fontSize}
                fontWeight={sharedMenuList.fontWeight}
              >
                Balance
              </Typography>
            </MenuItemStyled> */}
            {/* <MenuItemStyled>
              <SettingsOutlined sx={sharedIconStyle} />
              <Typography
                fontSize={sharedMenuList.fontSize}
                fontWeight={sharedMenuList.fontWeight}
              >
                Settings
              </Typography>
            </MenuItemStyled> */}
            <MenuItemStyled onClick={() => handleShowLogoutModal(true)}>
              <PowerSettingsNewOutlined sx={sharedIconStyle} />
              <Typography
                fontSize={sharedMenuList.fontSize}
                fontWeight={sharedMenuList.fontWeight}
              >
                Logout
              </Typography>
            </MenuItemStyled>
            <ModifiedModal disableEnforceFocus elemRef={modalRef}>
              <YesNoModal
                yesFunc={() => handleClickLogout()}
                noFunc={() => handleShowLogoutModal(false)}
                crossFunc={() => handleShowLogoutModal(false)}
              />
            </ModifiedModal>
          </StyledMenu>
        </>
      ) : (
        <Stack
          direction={"row"}
          fontSize={14}
          marginRight={5}
          justifyContent={"center"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/login")}
          >
            <LockOutlinedIcon sx={{ fontSize: "20px", marginRight: "6px" }} />
            <Typography variant="h1" fontSize={"inherit"} fontWeight={800}>
              Login
            </Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default ProfileMenu;
