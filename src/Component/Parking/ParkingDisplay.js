import React, { Fragment, Component } from "react"
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    menu: {
      width: 400,
    }
});

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 520,
    overflowY: "auto"
  },
  PaperMenu: {
    padding: 5,
    marginTop: 10,
    marginBottom: 0,
    height: 45,
    background: "cyan"
  },
  FreeRow: {
    background: "green"
  },
  NotFreeRow: {
    background: "red"
  },
};

class ParkingDisplay extends Component{

  constructor(props){
    super(props);
    this.state = {
      filterZone: '',
      currentStreet: '',
      HC2: [],
      HC3: [],
      HC4: [],
      RIVERBANK: [],
      open: false}

      this.loadData();
  }

  /** Generates the Fitler component in form of a selector
    enables user to filter street list by zones
    */
  createFilterMenu(){
    const { classes } = this.props;
    return (
      <div>
     <form className={classes.root}autoComplete="off">
       <FormControl className={classes.formControl}>
         <Select className={classes.menu}
          autoWidth
          fullWidth
           open={this.state.open}
           onClose={this.handleClose}
           onOpen={this.handleOpen}
           value={this.state.filterZone}
           onChange={this.handleChange}
           inputProps={{
             name: 'filterZone',
           }}
         >
           <MenuItem value=''><em> None </em></MenuItem>
           <MenuItem value='HC2'>HC2 - 2 Hours max</MenuItem>
           <MenuItem value='HC3'>HC3 - Unlimited $6</MenuItem>
           <MenuItem value='HC4'>HC4 - Unlimted $4</MenuItem>
           <MenuItem value='RIVERBANK'>River Bank parking - Unlimited $4</MenuItem>
         </Select>
       </FormControl>
     </form>
     </div>
   );
  }

  /** When user select an item in the filterMenu component, setState to rerender
    the street list to the required view
    */

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**handle the closing of the filterMenu component
  */
  handleClose = () => {
    this.setState({ open: false });
  };

  /**handle the opening of the filterMenu component
  */
  handleOpen = () => {
    this.setState({ open: true });
  };

  /** This function use the fetch APi to retreive data from json-server
    and set state to each return zone array containing streets objects
  */
  loadData(){

            fetch("http://localhost:3000/HC2").then(response => {
              return response.json();
              }).then(data => {
                // Work with JSON data here
                  this.setState({HC2: data})
                })
                .catch(err => {
                  // Do something for an error here
              });

              fetch("http://localhost:3000/HC3").then(response => {
                return response.json();
                }).then(data => {
                  // Work with JSON data here
                    this.setState({HC3: data})
                  })
                  .catch(err => {
                    // Do something for an error here
                });

                fetch("http://localhost:3000/HC4").then(response => {
                  return response.json();
                  }).then(data => {
                    // Work with JSON data here
                      this.setState({HC4: data})
                    })
                    .catch(err => {
                      // Do something for an error here
                  });
                  fetch("http://localhost:3000/RIVERBANK").then(response => {
                    return response.json();
                    }).then(data => {
                      // Work with JSON data here
                        this.setState({RIVERBANK: data})
                      })
                      .catch(err => {
                        // Do something for an error here
                    });
            }

  /* This will loop through all the objects in the spots array in each of the streets
   * recived as an argument
   * and increment the count variable if the empty attribute is true,
   * return total count at the end of spots array as a number
   */
  findFree(obj) {
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
  findTotalFree(obj) {

    var count = this.findFree(obj);
    var freeSpot = obj.description;
    freeSpot += " Free: ";
    freeSpot += count;
    return freeSpot;
  }

  /**handles the process to take when user click on a street list ListItem
    will change state to rerender the parking spot panel
    */
  onSelect(obj){
    this.setState({currentStreet: obj});
  }

  /*Create the street list component panel using for zone arrays
    provided in the zone argument
    */
  createByZoneListItem( zone, zoneName ){
    return(<Fragment key={zoneName}>
      <Typography
        variant="headline"
        style={{ textTransform: "capitalize" }}
      >
        {zoneName}
      </Typography>
      <List component="ul">
        {zone.map(obj => (
          <ListItem button onClick={() => this.onSelect(obj)}>
            <ListItemText
              primary={this.findTotalFree(obj)}
              style={
                this.findFree(obj) > 0 ? style.FreeRow : style.NotFreeRow
              }
            />
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
  }

  /**Create the parkingspots table view panel when user click on the street
  list item, will read the currentStreet state item to render the table
  */
  createByStreetSpotTable(){

    return(
      <Fragment>
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
          {this.state.currentStreet.spots.map(row => {
            return (
              <TableRow
                key={row.id}
                style={row.empty ? style.FreeRow : style.NotFreeRow}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.empty ? "Yes" : "No"}</TableCell>
                <TableCell>{row.time_left}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </Fragment>
    );

  }

  /** the function where the app component are created.
  */
  render(){

    const {currentStreet, filterZone} = this.state;
    return(
    <Grid container>

      <Grid item xs={2}>
        <Paper style={style.PaperMenu}>
        <Typography variant="title">
              Filter by parking Zone:
        </Typography>
        </Paper>
      </Grid>
        <Grid item xs={4}>
          <Paper style={style.PaperMenu}>
          {this.createFilterMenu()}
          </Paper>
          </Grid>
        <Grid item xs={6}>
          <Paper style={style.PaperMenu}>
          <Typography variant="title">
          {this.state.currentStreet.zone} =>
          {this.state.currentStreet.description}
          </Typography>
        </Paper>
        </Grid>
      <Grid item sm>
        <Paper style={style.Paper}>
          {!filterZone || filterZone === "" || filterZone === "HC2" ? (
            this.createByZoneListItem(this.state.HC2,'HC2')
          ) : null}

          {!filterZone || filterZone === "" || filterZone === "HC3" ? (
            this.createByZoneListItem(this.state.HC3,"HC3")
          ) : null}

          {!filterZone || filterZone === "" || filterZone === "HC4" ? (
            this.createByZoneListItem(this.state.HC4,"HC4")
          ) : null}

          {!filterZone || filterZone === "" || filterZone === "RIVERBANK" ? (
            this.createByZoneListItem(this.state.RIVERBANK,"RIVER_BANK")
          ) : null}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={style.Paper}>
        {currentStreet? (
          this.createByStreetSpotTable()
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
}
}

ParkingDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkingDisplay);
