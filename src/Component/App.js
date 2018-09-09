import React, { Component, Fragment } from "react";
import FilterBar from "./Layout/FilterBar";
import Header from "./Layout/Header";
import ParkingDisplay from "./Parking/ParkingDisplay";
import Footer from './Layout/Footer';

export default class extends Component {
  state = {
  };

  handleZoneSelected = zones => {
    this.setState({
      zones
    });
    console.log(this.state.zones)
  };

  render() {
    const { zones} = this.state;
    return (
      <Fragment>
        <Header />

        <ParkingDisplay
          zones={zones}
        />
        <Footer />  
      </Fragment>
    );
  }
}
