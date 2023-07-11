"use client";
import { Button, TextField, Grid } from "@mui/material";
import Image from "next/image";
import doctor from "../../../public/doctor.png";

export default function Landing() {
  return (
    <Grid
      className="Landing"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <h1>Track your chronic pain, help doctor find a cure</h1>
        <p style={{ maxWidth: "800px", lineHeight: "1.45" }}>
          This app helps you track your chronic pain, and provides opportunity
          for you to help doctors understaning your condition.
        </p>
      </Grid>
      <Grid
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ py: 2 }}
      >
        <TextField
          sx={{ mr: 2 }}
          size="small"
          label="me@mail.com"
          variant="outlined"
        />
        <Button variant="contained">Signup</Button>
      </Grid>
      <Grid item>
        <Image
          className="pointer"
          src={doctor}
          alt="doctor"
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "auto",
            margin: "auto",
          }}
        />
      </Grid>
    </Grid>
  );
}
