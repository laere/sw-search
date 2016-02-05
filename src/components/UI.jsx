var React = require('react');
var Search = require('./Search.jsx')
var Img = require('./Img.jsx');
// var HTTP = require('..services/api');

var UI = React.createClass({

  getInitialState: function() {
      return {
        people: []
      }
  },

  //THIS WILL RETURN API JSON DATAE BEFORE FIRST RENDER
  // componentWillMount: function() {
  //   //GRAB THE URL
  //     HTTP.get('/people')
  //     //THEN GRAB THE URL DATA
  //       .then(function(data)) {
  //         //LOG DATA
  //         console.log('Data: ', data);
  //         //SET STATE FROM INITIAL TO DATA RECEIVED
  //           this.setState({
  //             people: data
  //           });
  //       });
  // },

  render: function() {

      return (
        <div className="ui">
          <header className="search-bar">
            {/*SEARCH BAR TO LOOK UP API INFO*/}
            <Search />
          </header>
          <Img />
        </div>
    );
  }
});

module.exports = UI;
