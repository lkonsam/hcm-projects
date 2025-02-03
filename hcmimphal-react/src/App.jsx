import React from "react";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/Sections/NavBar/NavBar";
import Footer from "./Components/Sections/Footer/Footer";

export default function App() {
  return (
    <SnackbarProvider>
      <CssBaseline />
      <NavBar />
      <Outlet />
      <Footer />
    </SnackbarProvider>
  );
}
