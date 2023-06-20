import React, { createContext, useState, ReactNode } from "react";

interface MobileContextProps {
  mobileDevice: boolean;
  changeMobileDevice: (mobileDevice: boolean) => void;
}

export const MobileContext = createContext<MobileContextProps>({
  mobileDevice: false,
  changeMobileDevice: () => {},
});

interface MobileProviderProps {
  children: ReactNode;
}

export const MobileProvider = ({ children }: MobileProviderProps) => {
  const [mobileDevice, setMobileDevice] = useState(false);

  const changeMobileDevice = (mobileDevice: boolean) => {
    setMobileDevice(mobileDevice);
  };

  return (
    <MobileContext.Provider value={{ mobileDevice, changeMobileDevice }}>
      {children}
    </MobileContext.Provider>
  );
};
