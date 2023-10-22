"use client";

import { useEffect } from "react";

const useWindowResize = (callback) => {
  useEffect(() => {
    const handleResize = () => {
      callback();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback]);

  return;
};

export default useWindowResize;
