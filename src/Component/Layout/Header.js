import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Hutt Council Parking Finder v 1.0
      </Typography>
    </Toolbar>
  </AppBar>
);
