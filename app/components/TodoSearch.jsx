var React = require('react');

var TodoSearch = React.createClass({
    handleSearch() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render() {
        return (
            <div className="container__header">
                <div>
                    <input onChange={this.handleSearch}
                        type="text"
                        ref="searchText"
                        placeholder="Search todos"/>
                </div>
                <div>
                    <label>
                        <input onChange={this.handleSearch}
                            type="checkbox" ref="showCompleted"/>
                        Показать выполненные
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;