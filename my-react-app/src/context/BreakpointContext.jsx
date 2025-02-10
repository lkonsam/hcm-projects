import { createContext, useState, useEffect, useContext } from "react";

const BreakpointContext = createContext();

export function BreakpointProvider({ children }) {
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(window.innerWidth)
  );

  function getBreakpoint(width) {
    // console.log(width);
    if (width < 640) return "xs";
    if (width < 768) return "sm";
    if (width < 1024) return "md";
    return "lg";
  }

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BreakpointContext.Provider value={breakpoint}>
      {children}
    </BreakpointContext.Provider>
  );
}

export function useBreakpoint() {
  return useContext(BreakpointContext);
}
