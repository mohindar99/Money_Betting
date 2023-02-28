interface BreakPointInterface {
  [key: string]: BreakPointInterface | any;
}

const breakpoints: BreakPointInterface = {
  values: {
    xs: 0,
    xs1: 300,
    sm: 600,
    sm1: 700,
    sm2: 800,
    md: 960,
    md1: 1060,
    md2: 1160,
    lg: 1280,
    lg1: 1380,
    xl: 1440,
  },
};

export { breakpoints };
