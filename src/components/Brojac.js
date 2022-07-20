import React, { Component } from "react";

export default class Brojac extends Component {
  constructor(props) {
    super(props);
    this.state = { brojac: 0 };
    this.napumpaj = this.napumpaj.bind(this);
  }

  povecaj(korak, e) {
    console.log(e.target);
    this.setState((state, props) => {
      return { brojac: state.brojac + korak };
    });
  }

  povisi = (korak, e) => {
    console.log(e.target);
    this.setState((state, props) => {
      return { brojac: state.brojac + korak };
    });
  };

  napumpaj() {
    this.setState((state, props) => {
      return { brojac: state.brojac + 1 };
    });
  }

  render() {
    return (
      <div>
        <span>{this.state.brojac}</span>
        <button onClick={(e) => this.povecaj(8, e)}>Povecaj s povecaj</button>
        <button onClick={this.povecaj.bind(this, 8)}>
          Povecaj s povecaj zavezano sa bindom
        </button>
        <button onClick={this.povisi.bind(this, 4)}>Povecaj s povisi</button>
        <button onClick={this.napumpaj}>Povecaj s napumpaj</button>
      </div>
    );
  }
}
