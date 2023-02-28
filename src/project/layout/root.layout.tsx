import {
  Box,
  Button,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import ProfileMenu from "../components/atoms/menu/profileMenu/profileMenu.component";
import CustomFooter from "../components/molecules/footer/CustomFooter.component";
import CustomHeader from "../components/molecules/header/CustomHeader.component";
import { useThemeModeContext } from "../contexts/ThemeMode.context";
import { useWindowSize } from "../customHooks/useWindowSize";
import { selectedTheme } from "../theme/selectedTheme";
import { logoutUser } from "../utility/AxiosInterceptors";
import Cookies from "universal-cookie";
import CustomSidebar from "../components/molecules/sidebar/CustomSidebar.component";
const cookie = new Cookies();

const RootContainer = styled(Container)(({ theme }) => ({
  padding: "0px !important",
  minHeight: "100vh",
  maxWidth: "100vw",
  backgroundColor: theme.palette.background.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

interface RootLayout {
  enableRoot?: "active" | "deactive";
  children: ReactNode;
}

const RootLayout = ({ enableRoot, children }: RootLayout) => {
  enableRoot = enableRoot || "active";

  const { activeThemeMode } = useThemeModeContext();
  const theme = createTheme(selectedTheme(activeThemeMode));
  const [open, setOpen] = useState(true);
  const { width } = useWindowSize();
  const { isConnected, address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    const reloadOnLogout = async () => {
      if (!isConnected) {
        console.log({ isConnected, address });
        const user: any | null =
          localStorage.getItem("user") &&
          JSON.parse(localStorage.getItem("user") || "{}")
            ? JSON.parse(localStorage.getItem("user") || "{}")
            : null;
        if (
          (!user?.email &&
            user?.walletAddress &&
            cookie.get("Authorization")) ||
          (user?.walletAddress && user?.email && cookie.get("Authorization"))
        ) {
          await logoutUser();
          window.location.reload();
        }
      }
    };
    reloadOnLogout();
  }, [isConnected, cookie.get("Authorization")]);

  const sharedWidth = width && width > 900 ? "300px" : "0px";
  const sharedHeight = "81px";
  //prevent initial breaking of uið due to undefined width
  if (!width || !sharedHeight || !sharedWidth) return <></>;
  return (
    <ThemeProvider theme={theme}>
      <RootContainer maxWidth={false}>
        {enableRoot === "active" ? (
          <>
            <Box
              sx={{
                position: "fixed",
                zIndex: 1,
                left: "0px",
                top: "0px",
                width: sharedWidth,
              }}
            >
              <CustomSidebar open={open} handleOpen={() => setOpen(!open)} />
            </Box>
            <Box
              sx={{ marginLeft: "auto", width: `calc(100vw - ${sharedWidth})` }}
            >
              <Box
                sx={{
                  width: `calc(100vw - ${sharedWidth})`,
                  top: "0px",
                  right: "0px",
                  zIndex: 1,
                }}
              >
                <CustomHeader handleOpen={() => setOpen(!open)} />
              </Box>
              <Stack
                sx={{
                  minHeight: `calc(100vh - ${sharedHeight})`,
                  overflowY: "hidden",
                }}
              >
                {children}
              </Stack>
            </Box>
          </>
        ) : (
          <>{children}</>
        )}
      </RootContainer>
    </ThemeProvider>
  );
};

export default RootLayout;
