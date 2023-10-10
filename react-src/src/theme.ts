import { createTheme } from "@mui/material";

export const THEME = (mode: 'light' | 'dark') => createTheme({
    palette: {
      mode: mode,
    },
  });