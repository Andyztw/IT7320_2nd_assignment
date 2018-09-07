import React, { Fragment } from "react";
import {
  Grid, 
  Paper, 
  Typography,
  List,
  ListItem,
  ListItemText,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Toolbar
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  },
  FreeRow: {
    background: "green"
  },
  NotFreeRow: {
    background: "red"
  }
};

/** This will loop through all the objects in the spots array in each of the streets
 * recived as an argument 
 * and increment the count variable if the empty attribute is true,
 * return total count at the end of spots array as a number
 */
function findFree(obj) {
  var count = 0;
  obj.spots.map(thisObj => {
    thisObj.empty === true ? (count += 1) : null;
  });
  return count;
}

/** This return the string with street argument's title
 * and call findFree to get the total free spots in that street
 * return the string in format "street.title"-----Free Spots : count
 */
function findTotalFree(obj) {
  var freeSpot = obj.title;
  var count = findFree(obj);
  freeSpot += "----------------Free Spot: ";
  freeSpot += count;
  return freeSpot;
}

export default ({ parkingSpots, zones, onSelect, street }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {!zones || zones === "" || zones === "HC2" ? (
          <Fragment key="HC2">
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              HC2
            </Typography>
            <List component="ul">
              {parkingSpots.HC2.map(obj => (
                <ListItem button onClick={() => onSelect(obj.id)}>
                  <ListItemText
                    primary={findTotalFree(obj)}
                    style={
                      findFree(obj) > 0 ? styles.FreeRow : styles.NotFreeRow
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ) : null}

        {!zones || zones === "" || zones === "HC3" ? (
          <Fragment key="HC3">
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              HC3
            </Typography>
            <List component="ul">
              {parkingSpots.HC3.map(obj => (
                <ListItem button onClick={() => onSelect(obj.id)}>
                  <ListItemText
                    primary={findTotalFree(obj)}
                    style={
                      findFree(obj) > 0 ? styles.FreeRow : styles.NotFreeRow
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ) : null}

        {!zones || zones === "" || zones === "HC4" ? (
          <Fragment key="HC4">
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              HC4
            </Typography>
            <List component="ul">
              {parkingSpots.HC4.map(obj => (
                <ListItem button onClick={() => onSelect(obj.id)}>
                  <ListItemText
                    primary={findTotalFree(obj)}
                    style={
                      findFree(obj) > 0 ? styles.FreeRow : styles.NotFreeRow
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ) : null}
        {!zones || zones === "" || zones === "RIVERBANK" ? (
          <Fragment key="RIVERBANK">
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              RIVER BANK
            </Typography>
            <List component="ul">
              {parkingSpots.RIVERBANK.map(obj => (
                <ListItem button onClick={() => onSelect(obj.id)}>
                  <ListItemText
                    primary={findTotalFree(obj)}
                    style={
                      findFree(obj) > 0 ? styles.FreeRow : styles.NotFreeRow
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ) : null}
      </Paper>
    </Grid>

    <Grid item sm>
      <Paper style={styles.Paper}>
        <Toolbar>
          <Typography variant="display1">{street.title}</Typography>
        </Toolbar>
        {street.id ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="headline">Spot number</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="headline">Free Status</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="headline">Time til leave</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {street.spots.map(row => {
                return (
                  <TableRow
                    key={row.id}
                    style={row.empty ? styles.FreeRow : styles.NotFreeRow}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.empty ? "Yes" : "No"}</TableCell>
                    <TableCell>{row.timeLeft}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ) : (
            <Toolbar>
              <Typography variant="display1">
                Please click on a street name to the left
            </Typography>
            </Toolbar>
          )}
      </Paper>
    </Grid>
  </Grid>
);


