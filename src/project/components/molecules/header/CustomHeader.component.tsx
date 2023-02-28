import { useWindowSize } from "@/project/customHooks/useWindowSize";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Stack, Toolbar } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useDisconnect } from "wagmi";
import ProfileMenu from "../../atoms/menu/profileMenu/profileMenu.component";
import { CustomAppBarStyled } from "./CustomHeaderStyled";

interface CustomHeader {
  handleOpen?: () => void;
}
const CustomHeader = ({ handleOpen }: CustomHeader) => {
  const [openMenuProfile, setOpenMenuProfile] = useState(false);
  const { width } = useWindowSize();
  const [tokenData, setTokenData] = useState(false);
  const cookies = new Cookies();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (cookies.get("Authorization")) {
      setTokenData(true);
    } else {
      setTokenData(false);
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
    [cookies.get("Authorization"), tokenData]
  );

  return (
    <CustomAppBarStyled position="relative">
      <Toolbar>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          {width && width < 900 && (
            <Stack alignItems={"center"} justifyContent={"center"}>
              <MenuIcon onClick={handleOpen} />
            </Stack>
          )}
          <Stack
            direction={"row"}
            alignItems="center"
            sx={{ marginLeft: "auto" }}
          >
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <ProfileMenu
                openMenu={openMenuProfile}
                handleOpenMenu={() => setOpenMenuProfile(!openMenuProfile)}
                handleLogout={handleLogout}
                isLogin={tokenData}
              />
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </CustomAppBarStyled>
  );
};

export default CustomHeader;
