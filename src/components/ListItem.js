import React, { Component } from "react";
import Item from "./Item";

class ListItem extends Component {
  state = {
  };
  render() {

    return (
      <ul className="todos">
        {this.props.itemValue.map((item,i) => {
        
          return <Item item={item} key={i} handleDelete={this.props.handleDelete}/> //// 7omaraaaaaa kberaa
        })}
      </ul>
    );
  }
}

export default ListItem;
