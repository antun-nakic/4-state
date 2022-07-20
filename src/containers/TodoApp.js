import React, { Component } from "react";
import ListaTodoova from "../components/ListaTodoova";
import UnosTaska from "../components/UnosTaska";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unos: "",
      lista: [],
    };
  }

  render() {
    return (
      <div>
        <UnosTaska />
        <ListaTodoova />
      </div>
    );
  }
}
