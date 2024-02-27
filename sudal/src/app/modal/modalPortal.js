import React, { useEffect, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
    }, []);

  if (typeof window === "undefined") return <></>;

  return mounted ? createPortal(children, document.getElementById("modal-root")) : <></>;
};

export default Portal;