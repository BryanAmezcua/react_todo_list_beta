import React, {Component} from 'react';
import TodoItem from './comps/TodoItem'
//import AddItem from './comps/AddItem'
//import todosData from "./comps/ToDos"
import './App.css';

/////////////// This is going to be a to-do list that allows you to check and un-check items that are on the list.

class App extends Component {

  state = {
    ID_Count: 1,
    todos: []
  }

  addItem = () => {

    const userInput = document.querySelector(".userInput").value

    this.setState(previousState => {
      return {
        ID_Count: previousState.ID_Count + 1,
        todos: [...previousState.todos, {id: previousState.ID_Count, text: userInput}]
      }
    })
  }

  render() {

    const todoItems = this.state.todos.map(item => <TodoItem id={item.id} text={item.text} />)

    return (
      <div className="bounceInUp">
        <h3>Add an Item to your to-do list:</h3>
        <input type="text" className="userInput"/>
        <br></br>
        <button className="buttonStyle" onClick={this.addItem}>Click To Add</button>
        <h3>{todoItems}</h3>
      </div>
    )
  }
}

export default App;