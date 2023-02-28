import { useWindowSize } from "@/project/customHooks/useWindowSize";
import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
import { Box, Stack } from "@mui/material";
import LOGO from "public/logo/Logo.svg";
import { useCallback, useEffect, useState } from "react";
import SidebarAccordion from "../../atoms/accordion/sidebarAccordion/sidebarAccordion.component";
import ProfileMenu from "../../atoms/menu/profileMenu/profileMenu.component";
import { DrawerStyled } from "./CustomSiderbarStyled";
import CancelIcon from "@mui/icons-material/Cancel";
import Cookies from "universal-cookie";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";
// import { authAccessDispatchers } from "@/project/reduxToolkit/auth/authSlice";
import { disconnect } from "@wagmi/core";

interface CustomSidebarInterface {
  open: boolean;
  handleOpen?: () => void;
}
const CustomSidebar = ({ open, handleOpen }: CustomSidebarInterface) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useWindowSize();
  const [tokenData, setTokenData] = useState(false);
  const drawerType = width && width > 900 ? "permanent" : "temporary";
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    if (cookies.get("Authorization")) {
      setTokenData(true);
    } else {
      setTokenData(false);
      disconnect();
    }
  }, [cookies.get("Authorization")]);

  const handleLogout = useCallback(
    (value: boolean) => {
      if (value) {
        setTokenData(false);
        disconnect();
      } else {
        setTokenData(true);
      }
    },
    [cookies, cookies.get("Authorization"), tokenData]
  );

  return (
    <DrawerStyled variant={drawerType} open={open}>
      <Stack
        sx={{ position: "relative" }}
        alignItems={{ xs: "flex-start" }}
        justifyContent={"center"}
        height="81px"
      >
        {width && width <= 900 && (
          <CancelIcon
            onClick={handleOpen}
            sx={{
              position: "absolute",
              right: "-6px",
              top: "30px",
              cursor: "pointer",
            }}
          />
        )}
        <Box
          sx={{
            transform: "ScaleY(0.5) ScaleX(0.7)",
            display: { xs: "none", lg: "block" },
          }}
        >
          <LOGO />
        </Box>
        <Box sx={{ display: { xs: "block", lg: "none", width: "90%" } }}>
          <ProfileMenu
            openMenu={openMenu}
            handleOpenMenu={() => {
              setOpenMenu(!openMenu);
            }}
            handleLogout={handleLogout}
            isLogin={tokenData}
          />
        </Box>
      </Stack>
      {width && width < 900 && <Divider />}
      <Stack sx={{ marginTop: "20px" }}>
        {/* <SidebarAccordion
          heading="NFTs"
          icon={<BarChartOutlinedIcon sx={{ marginRight: "10px" }} />}
        >
          <Stack direction={"row"}>
            <BarChartOutlinedIcon sx={{ marginRight: "10px" }} />
            <Typography>Market place</Typography>
          </Stack>
          <Stack direction={"row"}>
            <BarChartOutlinedIcon sx={{ marginRight: "10px" }} />
            <Typography>Market place</Typography>
          </Stack>
        </SidebarAccordion> */}
        {/* <SidebarAccordion
          heading="Merchandise"
          icon={<QuestionAnswerIcon sx={{ marginRight: "10px" }} />}
        >
          <Stack direction={"row"}>
            <SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />
            <Typography>Market place</Typography>
          </Stack>
          <Stack direction={"row"}>
            <SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />
            <Typography>Coll. Merchandise</Typography>
          </Stack>
        </SidebarAccordion> */}
        {/* <SidebarAccordion
          heading="Live bets"
          icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
        />
        <SidebarAccordion
          heading="Live bets"
          icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
        />
        <SidebarAccordion
          heading="Live bets"
          icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
        />
        <SidebarAccordion
          heading="Live bets"
          icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
        />
        <SidebarAccordion
          heading="Live bets"
          icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
        />
        <SidebarAccordion
          heading="Live bets"
          icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
        />
        <SidebarAccordion
          heading="Live bets"
          icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
        />
        <SidebarAccordion
          heading="Live bets"
          icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
        /> */}
        <SidebarAccordion
          heading="Live bets"
          icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
        />
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          {/* <SidebarAccordion
            heading="Activity"
            icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
          /> */}
          <SidebarAccordion
            heading="FAQ"
            icon={<SafetyCheckOutlinedIcon sx={{ marginRight: "10px" }} />}
          />
        </Box>
      </Stack>
    </DrawerStyled>
  );
};

export default CustomSidebar;
