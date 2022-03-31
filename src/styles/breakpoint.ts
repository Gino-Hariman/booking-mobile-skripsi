type tBreakpoints = {
  [key: string]: string[] | number;
};

const breakpoints: tBreakpoints = {
  list: ['xs', 'sm', 'md', 'lg', 'xl'],
  xs: 320,
  sm: 360,
  md: 768,
  lg: 1024,
  xl: 1366,
};

export default breakpoints;
