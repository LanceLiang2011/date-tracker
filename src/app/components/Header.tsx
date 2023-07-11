"use client";
import { Avatar, Grid, Button, Switch, FormControlLabel } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { MuiThemeContext } from "../theme/MuiThemeProvider";
import Image from "next/image";
import lance from "../../../public/me.png";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { switchTheme } = useContext(MuiThemeContext);

  return (
    <Grid sx={{ p: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent={pathname === "/" ? "center" : "space-between"}
        alignItems="center"
      >
        <Grid item lg={6}>
          <Image
            style={{ borderRadius: 100 }}
            src={lance}
            width={70}
            height={70}
            alt="logo of the author"
          />
        </Grid>
        <Grid
          xs={6}
          rowSpacing={1}
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <FormControlLabel
            control={
              <Switch onChange={switchTheme} name="gilad" color="primary" />
            }
            label="Night mode"
          />
          <Avatar
            className="pointer"
            onClick={() => router.push("/profile")}
            sx={{ width: 56, height: 56, backgroundColor: "#1F6FFF" }}
          >
            L
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
}
