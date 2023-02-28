import ThemeModeProvider, {
  useThemeModeContext,
} from "@/project/contexts/ThemeMode.context";
import WalletProvider from "@/project/contexts/WalletContext";
import { store } from "@/project/reduxToolkit/store";
import { selectedTheme } from "@/project/theme/selectedTheme";
import { createTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const { activeThemeMode, toggleActiveThemeMode } = useThemeModeContext();
  const theme = useMemo(
    () => createTheme(selectedTheme(activeThemeMode)),
    [activeThemeMode]
  );
  
  return (
    <WalletProvider>
      <ThemeModeProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </ThemeModeProvider>
    </WalletProvider>
  );
}
