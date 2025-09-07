"use client"

import { createContext, useContext, useState } from "react";

interface UIContextType {
  displayUI: boolean;
  data: any;

  setDisplayUI: (display: boolean) => void;
  setData: (data: any) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const useUI = () => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
}

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [displayUI, setDisplayUI] = useState(false);
    const [data, setData] = useState(null);

    
    const contextValue: UIContextType = {
      displayUI,
      data,


      setDisplayUI,
      setData,

    };

    return (
        <UIContext.Provider value={contextValue}>
            {children}
        </UIContext.Provider>
    );
};
