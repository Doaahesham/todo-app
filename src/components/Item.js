import React, { Component } from "react";

class Item extends Component {
  state = {};

  render() {
    return (
      <div>
        <li className="btnn">{this.props.item}</li>
        <button
          onClick={() => {
            this.props.handleDelete(this.props.item);
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default Item;
