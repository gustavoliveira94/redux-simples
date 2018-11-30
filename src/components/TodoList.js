import React from 'react'
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/todos'
import { connect } from 'react-redux'


class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        newTodoText: ''
    }

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText)
        this.setState({
            newTodoText: ''
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map(todos => {
                            return (
                                <li key={todos.id}>{todos.text}</li>
                            )
                        })
                    }
                </ul>

                <input
                    type="text"
                    value={this.state.newTodoText}
                    onChange={(e) => {
                        this.setState({
                            newTodoText: e.target.value
                        })
                    }}
                />
                <button onClick={this.addNewTodo}>Add Todo</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(todoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)