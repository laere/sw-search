var React = require('react');

var Search = React.createClass({

    getInitialState: function() {
      return {
        value: ''
      }
    },

    handleOnChange: function(e) {
        this.setState({
          value: e.target.value
        })
    },

    filterByName: function() {
      var desiredName = this.state.value;
      var matchingResult = this.props.characters.results.find(function(result) {
        return result.name === desiredName;
      });
    },

    render: function() {

        return (

            <div>
              <h1>{matchingResult}</h1>
                <img className="search-icon" src="https://cdn3.iconfinder.com/data/icons/ecommerce-5/100/search-01-128.png" width="16px" height="16px" />
                <input type="text" className="search" value={this.state.value} onChange={this.handleOnChange}/>
                <input type="submit" ref="searchInput" onClick={this.filterByName} />
            </div>
        );
    }
});

module.exports = Search;
