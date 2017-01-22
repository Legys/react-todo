var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render() {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Добавлено ';
            var timestamp = createdAt;

            if( completed) {
                message = 'Выполнено ';
                timestamp = completedAt
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY - H:mm');
        };

        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id);
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div >
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>

            </div>
        )
    }
});

module.exports = Todo;