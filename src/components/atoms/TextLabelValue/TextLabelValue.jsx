import { Typography } from "@mui/material";
import React from "react";

const TextLabelValue = ({ label, value, mt }) => {
  return (
    <div>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
        mt={mt}
      >
        {label}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {value}
      </Typography>
    </div>
  );
};

export default TextLabelValue;
