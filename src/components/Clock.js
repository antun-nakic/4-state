import React, { Component } from "react";
import FormatedTime from "./FormatedTime";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState((state, props) => ({
      time: new Date(),
    }));
  }

  render() {
    return (
      <div>
        <h1>Klasna</h1>
        <h2>
          It is <FormatedTime time={this.state.time} />.
        </h2>
      </div>
    );
  }
}
