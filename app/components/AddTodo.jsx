var React = require('react');

var AddTodo = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        var todo = this.refs.todo.value;

        if (todo.length > 0) {
            this.refs.todo.value = '';
            this.props.onAdd(todo);
        } else {
            this.refs.todo.focus();
        }
    },
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input

                        type="text"
                        placeholder="Что нужно сделать?"
                        ref="todo" />
                    <button  className="button expanded">Добавить</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;