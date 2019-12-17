import React, {Component} from 'react';
import TodoItem from './comps/TodoItem'
//import AddItem from './comps/AddItem'
import todosData from "./comps/todosData"
import './App.css';

/////////////// This is going to be a to-do list that allows you to check and un-check items that are on the list.

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      importedToDos: todosData
    }
  }

  handleChange = (id) => {
    this.setState(previousState => {
      const updatedTodos = previousState.importedToDos.map(toDoItem => {
        if (toDoItem.id === id) {
          toDoItem.completed = !toDoItem.completed
        }

        return toDoItem

      })

      return {
        importedToDos: updatedTodos
      }

    })
  }


  render() {

    const todoItems = this.state.importedToDos.map(toDoItem => <TodoItem key={toDoItem.id} item={toDoItem} handleChange={this.handleChange}/>)

    return (
      <div className="bounceInUp">
        <h3>{todoItems}</h3>
      </div>
    )
  }
}

export default App;