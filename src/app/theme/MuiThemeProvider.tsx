"use client";

import React, { createContext, useMemo, useState } from "react";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { darkTheme, lightTheme } from "./theme";

type Props = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};
export const MuiThemeContext = createContext<any>(null);

export default function MuiThemeProvider({ children }: Props) {
  const [isDark, setIsDark] = useState(false);
  function switchTheme(): void {
    setIsDark((cur) => !cur);
  }
  const value = useMemo(() => ({ isDark, switchTheme }), [isDark]);

  return (
    <MuiThemeContext.Provider value={value}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <body>{children}</body>
        </LocalizationProvider>
      </ThemeProvider>
    </MuiThemeContext.Provider>
  );
}
