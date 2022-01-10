import React, { Component } from "react";
import ListItem from "./ListItem";

class Button extends Component {
  state = {
    itemValue: [],
  };

  handleItem() {
    this.setState({ itemValue: [...this.state.itemValue, this.props.value] });
    // this.state.itemValue.push(this.props.value)
  }
  handleButton() {
    // store value (in array)
    // remove value from inputplace
    this.handleItem();
    this.props.backInput();
  }
  handleDelete(item) {
    //hdelte el item elly dost 3lyh mn el arr
    // lw l2et item f arr = item elly mdholk
    this.setState({
      itemValue: this.state.itemValue.filter((listItem) => {
        return listItem !== item;
      }),
    });
  }
  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={() => {
            this.handleButton();
          }}
        >
          Add
        </button>

        <ListItem
          itemValue={this.state.itemValue}
          handleDelete={(item) => this.handleDelete(item)}
        />
      </div>
    );
  }
}

export default Button;
