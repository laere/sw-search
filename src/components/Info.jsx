var React = require('react');

var Info = React.createClass({
  render: function() {
      return (
        <div>
          <h2>{this.props.name} Info</h2>
          <p></p>
        </div>
      );
  }
});

module.exports = Info;
