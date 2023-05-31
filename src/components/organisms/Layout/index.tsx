import React, { ReactNode } from "react";
import { Nav } from "@components/molecules";

const index: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default index;
