import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// import { render } from "@testing-library/react";

//showing vs-code github setup

class App extends Component {
  state = {
    items: [
      { id: 1, title: "Wake Up" },
      { id: 2, title: "Make breakfast" }
    ],
    id: uuidv4(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handle Change");
  };

  handleSubmit = e => {
    console.log("handle Submit");
  };

  clearList = () => {
    console.log("Clear List");
  };

  handleDelete = id => {
    console.log(`handle edit ${id}`);
  };

  handleEdit = id => {
    console.log(`edit edit ${id}`);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.state.clearList}
                handleDelete={this.state.handleDelete}
                handleEdit={this.state.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
