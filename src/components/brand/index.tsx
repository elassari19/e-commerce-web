import { Typography } from "@mui/material";
import React, { FC } from "react";
import { Props } from "./type";

const index: FC<Props> = ({ size, variant }) => {
  return (
    <div>
      <Typography className={`${size} ${variant}`}>MY BRAND</Typography>
    </div>
  );
};

export default index;
