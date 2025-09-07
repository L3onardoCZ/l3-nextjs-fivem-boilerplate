"use client";

import { nuiCallback } from "@/lib/nuiCallback";
import { useCallback, useEffect } from "react";
import { useUI } from "@/context/UIContext";

interface EventListenerProps {
  children: React.ReactNode;
}

export default function EventListener({ children }: EventListenerProps) {
  const {
    displayUI,
    setDisplayUI,
    setData,
  } = useUI();

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log("Escape key pressed");
          setDisplayUI(false);
          nuiCallback("/closeUI");
      }
    },
    [setDisplayUI]
  );

  const onMessage = useCallback(
    (event: MessageEvent) => {
      const {
        action,
        type,
        data,
      }: { action?: string; type: string; data: any } = event.data;
      if (action === "openUI") {
        setDisplayUI(true);
        setData(data);
      } else if (action === "closeUI") {
        setDisplayUI(false);
        nuiCallback("/closeUI");
      }
    },
    [setDisplayUI]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("message", onMessage);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("message", onMessage);
    };
  }, [onMessage, onKeyDown]);

  return children;
}
