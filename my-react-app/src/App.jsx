import { useState } from "react";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";
import Header from "./components/Section/Header/Header";

function App() {
  return (
    <>
      <SnackbarProvider>
        <Header />
        <Outlet />
      </SnackbarProvider>
    </>
  );
}

export default App;
