"use client";

import { createContext, useEffect, useState } from "react";

interface Context {
  viewportWidth: number;
  viewportHeight: number;
}

const initial: Context = {
  viewportWidth: window.innerWidth,
  viewportHeight: window.innerHeight,
};

export const ViewportContext = createContext(initial);

export function ViewportContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [viewport, setViewport] = useState({
    width: initial.viewportWidth,
    height: initial.viewportHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider
      value={{ viewportWidth: viewport.width, viewportHeight: viewport.height }}
    >
      {children}
    </ViewportContext.Provider>
  );
}
