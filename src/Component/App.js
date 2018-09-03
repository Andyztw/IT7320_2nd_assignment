import React, { Component, Fragment } from "react";
import FilterBar from "./Layout/FilterBar";
import Header from "./Layout/Header";
import Parking from "./Parking";
import { zone, parkingSpot } from "../Data";

export default class extends Component {
  state = {
    parkingSpot,
    Street: {}
  };

  handleStreetSelect(selectID) {
    var temp = parkingSpot.find(ex => ex.id === selectID);
    this.setState({
      Street: temp
    });
  }

  getParkingMap() {
    const parkingMap = { HC2: [], HC3: [], HC4: [], RIVERBANK: [] };
    this.state.parkingSpot.map(obj => {
      var myZone = obj.zone;
      switch (myZone) {
        case "HC2":
          parkingMap.HC2.push(obj);
          break;
        case "HC3":
          parkingMap.HC3.push(obj);
          break;
        case "HC4":
          parkingMap.HC4.push(obj);
          break;
        default:
          parkingMap.RIVERBANK.push(obj);
      }
    });
    return parkingMap;
  }

  handleZoneSelected = zones => {
    this.setState({
      zones
    });
  };

  render() {
    const { zones, Street } = this.state;
    const map = this.getParkingMap();

    return (
      <Fragment>
        <Header />
        <FilterBar
          zone={zone}
          zones={zones}
          onSelect={this.handleZoneSelected.bind(this)}
        />
        <Parking
          parkingSpots={map}
          zones={zones}
          onSelect={this.handleStreetSelect.bind(this)}
          street={Street}
        />
      </Fragment>
    );
  }
}
