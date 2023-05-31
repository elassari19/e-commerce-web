import { Typography } from "@mui/material";
import React from "react";
import { ThemeButton } from "..";

const index = () => {
  return (
    <div className="flex flex-row justify-between p-4">
      <Typography>Brand</Typography>
      <ThemeButton />
    </div>
  );
};

export default index;
