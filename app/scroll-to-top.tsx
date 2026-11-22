"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return null;
}
