import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <SnackbarProvider>
        <Outlet />
      </SnackbarProvider>
    </>
  );
}

export default App;
