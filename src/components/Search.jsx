var React = require('react');

var Search = React.createClass({

    render: function() {
        return (

            <div>
              <form>
                <input type="text"/>
                <input type="submit" placeholder="Search..."/>
              </form>
            </div>
        );
    }
});

module.exports = Search;
