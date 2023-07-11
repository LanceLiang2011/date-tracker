import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import MuiThemeProvider, { MuiThemeContext } from "./theme/MuiThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Date tracker App",
  description:
    "A practise of using MUI and Supabase in New Next.js app route by Lance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MuiThemeProvider>
        <Header />
        {children}
      </MuiThemeProvider>
    </html>
  );
}
