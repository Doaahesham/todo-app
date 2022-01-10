import React, { Component } from "react";
import Button from "./Button";


class InputPlace extends Component {
  state = {
    inputValue: ""
  };
  handleInput(e) {
      
    this.setState({ inputValue: e.target.value });
  }
  backInput() {
    
    this.setState({ inputValue: ""});
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="enter your todo"
            className="box-style"
            value={this.state.inputValue}
            onChange={(e) => {
              this.handleInput(e);
            }}
          ></input>
        </form>
         {/* {console.log(this.state.inputValue)}  */}

        <Button value={this.state.inputValue} backInput={()=>this.backInput()}/>
      </div>
    );
  }
}

export default InputPlace;