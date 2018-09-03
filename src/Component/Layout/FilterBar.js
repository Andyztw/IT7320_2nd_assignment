import React from "react";
import { Paper, Tabs, Tab, Grid, Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default ({ zone, zones, onSelect }) => {
  const index = zones ? zone.findIndex(group => group === zones) + 1 : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : zone[index - 1]);

  return (
    <Grid container>
      <Grid item sm>
        <Paper>
          <Tabs
            value={index}
            onChange={onIndexSelect}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="All" />
            {zone.map(group => <Tab key={group} label={group} />)}
          </Tabs>
        </Paper>
      </Grid>
    </Grid>
  );
};
