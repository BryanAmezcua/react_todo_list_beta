import React, {Component} from "react"

class TodoItem extends Component {

    render() {

        const ID_Style = {
            paddingRight: "10px"
        }
        return (
            <div className="todo-item">
                <p style={ID_Style} >{this.props.id}.)</p>
                <input 
                    type="checkbox"
                />
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default TodoItem;