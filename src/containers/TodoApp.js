import React, { Component } from "react";
import ListaTodoova from "../components/ListaTodoova";
import UnosTaska from "../components/UnosTaska";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unos: "", //hdfkjdhjhf
      lista: ["cvgsfdvbkjs", "dkgbfd", "dsjhgjkdsgbjk"],
    };
  }

  componentDidUpdate() {
    console.log("updeateala sam se");
  }

  handleInputChange = (e) => {
    this.setState((state, props) => {
      return { unos: e.target.value };
    });
  };

  handleAddTask = (e) => {
    this.setState((state, props) => {
      return { lista: [...state.lista, state.unos], unos: "" };
    });
  };

  render() {
    return (
      <div>
        <UnosTaska
          input={this.state.unos}
          handleInputChange={this.handleInputChange}
          handleAddTask={this.handleAddTask}
        />
        <ListaTodoova tasks={this.state.lista} />
      </div>
    );
  }
}
