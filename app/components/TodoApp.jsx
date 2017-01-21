var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoApp = React.createClass({
    getInitialState() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                  id: uuid(),
                  text: 'Выгулять собаку',
                  completed: false
                },
                {
                    id: uuid(),
                    text: 'Почистить двор',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Позаниматься английским',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Написать приложение',
                    completed: false
                }
            ]
        }
    },
    handleToggle(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({todos: updatedTodos});
    },
    handleAddTodo(text) {
      this.setState({
          todos: [
              ...this.state.todos,
              {
                  id: uuid(),
                  text: text,
                  completed: false
              }
          ]
      })
    },
    handleSearch(showCompleted, searchText) {
      this.setState({
          showCompleted: showCompleted,
          searchText : searchText.toLowerCase()
      })
    },
    render() {
        var {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAdd={this.handleAddTodo} />
            </div>
        )
    }
});
module.exports = TodoApp;