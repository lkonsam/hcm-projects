/** App.jsx */
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";
import { BreakpointProvider } from "./context/BreakpointContext";
import TopHeader from "./components/Section/Header/TopHeader";
import FooterSection from "./components/Section/FooterSection/FooterSection";
import Header from "./components/Section/Header/Header";

function App() {
  return (
    <>
      <div className="w-full bg-gray-50 dark:bg-gray-900 dark:text-white">
        <BreakpointProvider>
          <div className="bg-orange-50 text-gray-800 dark:bg-gray-800  dark:text-gray-100">
            <TopHeader />
          </div>
          <div className="w-full bg-amber-700  dark:bg-gray-900 dark:text-white">
            <Header />
          </div>
          <SnackbarProvider>
            <Outlet />
          </SnackbarProvider>
          <FooterSection />
        </BreakpointProvider>
      </div>
    </>
  );
}

export default App;
