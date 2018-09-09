import React from "react";
import {Toolbar, Typography } from "@material-ui/core";

export default props => (
  <div>
    <Toolbar color='primary'>
      <Typography color="inherit" style={{ flex: 1 }}>
        Copyrighted @2018 Assignment 2 by Zhantu Wang and Hank Chou
      </Typography>
    </Toolbar>
  </div>
);
