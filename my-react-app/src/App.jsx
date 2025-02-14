/** App.jsx */
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full bg-gray-50 dark:bg-gray-900 dark:text-white">
        <SnackbarProvider>
          <Outlet />
        </SnackbarProvider>
      </div>
    </>
  );
}

export default App;
