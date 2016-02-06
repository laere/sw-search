var React = require('react');

var Search = React.createClass({

    render: function() {
        return (

            <div>
                <img className="search-icon" src="https://cdn3.iconfinder.com/data/icons/ecommerce-5/100/search-01-128.png" width="16px" height="16px" />
                <input type="text" className="search" value={this.props.name}/>
                <input type="submit" ref="searchInput" value="search" onClick={this.filterByName} />
            </div>
        );
    }
});

module.exports = Search;
