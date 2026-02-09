import { createContext, useContext } from "react";
import { rootStore, RootStore } from "./rootStore";

export const StoresContext = createContext<RootStore>(rootStore);

export const useStores = () => {
  const context = useContext(StoresContext);

  if (!context) {
    throw new Error("useStores must be used within StoresProvider");
  }

  return context;
};
