var React = require('react');
var SWAPI = require('swapi-node');
var Search = require('./Search.jsx')
var Img = require('./Img.jsx');
var Info = require('./Info.jsx');

var UI = React.createClass({

  getInitialState: function() {
      return {
        people: []
      }
  },

  // THIS WILL RETURN API JSON DATA BEFORE FIRST RENDER
  componentDidMount: function() {

    fetch('http://swapi.co/api/people')
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        this.setState({ people: json });
        console.log(json);
      }.bind(this))
      .catch(function(err) {
        console.log(err);
      })
  },

  filterByName: function(name) {
    var filtered = this.state.people.results.filter(function(obj) {
      return obj.name.indexOf(name) > -1;
    });
  },
  
  render: function() {

      return (
        <div className="ui">
          <header className="search-bar">
            {/*<h1>{filtered}</h1>*/}
            {/*SEARCH BAR TO LOOK UP API INFO*/}
            <Search  characters={this.state.people} />
          </header>
          <input type="submit" value="search" onClick={this.filterByName} />
          <Img />
          <Info />
        </div>
    );
  }
});

module.exports = UI;
