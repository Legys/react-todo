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
                  text: 'Выгулять собаку'
                },
                {
                    id: uuid(),
                    text: 'Почистить двор'
                },
                {
                    id: uuid(),
                    text: 'Позаниматься английским'
                },
                {
                    id: uuid(),
                    text: 'Написать приложение'
                }
            ]
        }
    },
    handleAddTodo(text) {
      this.setState({
          todos: [
              ...this.state.todos,
              {
                  id: uuid(),
                  text: text,
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
                <TodoList todos={todos}/>
                <AddTodo onAdd={this.handleAddTodo} />
            </div>
        )
    }
});
module.exports = TodoApp;