interface PaletteInterface {
  [key: string]: PaletteInterface | any;
}

const lightThemePalette: PaletteInterface = {
  primary: { main: "#ffffff" },
  secondary: { main: "#307ecc" },
  button:{main:"#307ecc"},
  background: { main: "#f8f8f8" },
  text: { primary: "#000000",secondary:'#b3b3b3' },
};

const darkThemePalette: PaletteInterface = {
  primary: { main: "#1e1f26"},
  secondary: { main: "#307ecc" },
  button:{main:"#307ecc",},
  background: { main: "#000000", dark: "#181a1d" },
  text: { primary: "#ffffff" },
};

export { lightThemePalette, darkThemePalette };
