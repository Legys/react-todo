var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApp = React.createClass({
    getInitialState() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                  id: 1,
                  text: 'Выгулять собаку'
                },
                {
                    id: 2,
                    text: 'Почистить двор'
                },
                {
                    id: 3,
                    text: 'Позаниматься английским'
                },
                {
                    id: 4,
                    text: 'Написать приложение'
                }
            ]
        }
    },
    handleAddTodo(text) {
      alert('New todo: ' + text);
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