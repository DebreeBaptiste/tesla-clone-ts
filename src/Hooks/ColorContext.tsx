import React, { createContext, useState, ReactNode } from "react";

interface ColorContextProps {
  color: string;
  changeColor: (newColor: string) => void;
}

export const ColorContext = createContext<ColorContextProps>({
  color: "black",
  changeColor: () => {},
});

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider = ({ children }: ColorProviderProps) => {
  const [color, setColor] = useState("black"); // Initial color value

  const changeColor = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
