import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: "00",
      minute: "00",
      ampmIndex: 0,
      ampm: "AM"
    };
  }
  changeHour(e) {
    if (e.target.value === "0") {
      this.setState({
        hour: "00"
      });
    } else if (parseInt(e.target.value) < 10) {
      this.setState({
        hour: "0" + e.target.value
      });
    } else {
      this.setState({
        hour: e.target.value
      });
    }
  }
  changeMinute(e) {
    if (e.target.value === "0") {
      this.setState({
        minute: "00"
      });
    } else if (parseInt(e.target.value) < 10) {
      this.setState({
        minute: "0" + e.target.value
      });
    } else {
      this.setState({
        minute: e.target.value
      });
    }
  }
  setAmPm(e) {
    if (e.target.value === "1") {
      this.setState({
        ampm: "PM",
        ampmIndex: 1
      });
    } else if (e.target.value === "0") {
      this.setState({
        ampm: "AM",
        ampmIndex: 0
      });
    }
  }
  render() {
    let ampmStyles = {
      cursor: "pointer",
      color: this.state.ampm === "PM" ? "steelblue" : "yellow",
      transition: "all .3s ease-in"
    };
    let containerStyles = {
      background: this.state.ampm === "PM" ? "#152736" : "skyblue",
      transition: "all .3s ease-in"
    };

    return (
      <div className="container" style={containerStyles}>
        <div className="alarm">
          <div className="readout">
            <span>{this.state.hour}</span>
            <span>:</span>
            <span>{this.state.minute}</span>&nbsp;
            <span onClick={this.setAmPm.bind(this)} style={ampmStyles}>
              {this.state.ampm}
            </span>
          </div>
          <div className="sliders">
            <input
              onChange={this.changeHour.bind(this)}
              type="range"
              max="12"
              value={this.state.hour}
            />
            <input
              onChange={this.changeMinute.bind(this)}
              type="range"
              max="59"
              value={this.state.minute}
            />
            <input
              onChange={this.setAmPm.bind(this)}
              type="range"
              max="1"
              value={this.state.ampmIndex}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
