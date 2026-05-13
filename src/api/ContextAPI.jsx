"use client";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userHistory, setUserHistory] = useState([]);

  return (
    <AppContext.Provider value={{ userHistory, setUserHistory }}>
      {children}
    </AppContext.Provider>
  );
};
