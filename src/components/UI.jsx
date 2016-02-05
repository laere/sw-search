var React = require('react');
var HTTP = require('..services/api');

var UI = React.createClass({

  getInitialState: function() {

      return {
        people: []
      }
  },

  //THIS WILL RETURN API JSON DATAE BEFORE FIRST RENDER
  componentWillMount: function() {
    //GRAB THE URL
      HTTP.get('/people')
      //THEN GRAB THE URL DATA
        .then(function(data)) {
          //LOG DATA
          console.log(data);
          //SET STATE FROM INITIAL TO DATA RECEIVED
            this.setState({
              people: data
            });
        });
  },

  render: function() {

      return (
        <div>
          <header>
            {/*SEARCH BAR TO LOOK UP API INFO*/}
            <div className="search-bar"></div>
            <Search />
          </header>
          <div className="banner">
            {/*IMAGE BANNER OF SEARCHED ITEM*/}
            <Img />
          </div>
          <div>
            {/*INFORMATION OF SEARCHED ITEM*/}
            <Info className="info" />
          </div>
        </div>
    );
  }
});

module.exports = UI;
