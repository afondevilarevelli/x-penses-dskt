import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "../theme";
import { ColorModeContext } from "../contexts/ColorModeContext";

export default function ToggleColorMode({ children }: { children: any }) {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => THEME(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
