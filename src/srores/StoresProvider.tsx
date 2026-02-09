import type { ReactNode } from "react";
import { rootStore } from "./rootStore";
import { StoresContext } from "./storesContext";

type Props = {
  children: ReactNode;
};

export const StoresProvider = ({ children }: Props) => {
  return (
    <StoresContext.Provider value={rootStore}>
      {children}
    </StoresContext.Provider>
  );
};
