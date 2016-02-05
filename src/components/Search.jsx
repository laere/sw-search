var React = require('react');

var Search = React.createClass({

    render: function() {
        return (

            <div>
                <img className="search-icon" src="https://cdn3.iconfinder.com/data/icons/ecommerce-5/100/search-01-128.png" width="18px" height="18px" />
                <input type="text" className="search" />
            </div>
        );
    }
});

module.exports = Search;
