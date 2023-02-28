/* eslint-disable react-hooks/exhaustive-deps */
import { PaletteMode } from "@mui/material";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from "react";

interface ThemeModeProviderInterface {
  children: ReactNode;
}

interface ThemeModeContextInterface {
  [key: string]: any;
}

// INITIALIZE 1: CREATE CONTEXT

export const ThemeModeContext = createContext<ThemeModeContextInterface>({});

// CONTEXT WRAPPER: PROVIDES THEME MODE
function ThemeModeProvider({ children }: ThemeModeProviderInterface) {
  const [activeThemeMode, setActiveThemeMode] = useState<PaletteMode>("light");

  const toggleActiveThemeMode = useCallback(() => {
    setActiveThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, [activeThemeMode]);

  return (
    <ThemeModeContext.Provider
      value={{ activeThemeMode, toggleActiveThemeMode }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
}

export const useThemeModeContext = () => useContext(ThemeModeContext);

// EXPORT CONTEXT
export default ThemeModeProvider;
