import React from "react";

export default class Image extends React.Component {
  render() {
    return (
      <img
        src={this.props.image}
        alt={this.props.image}
        height="175px"
        width="100%"
        onError={(e) => (e.target.style.display = "none")}
      />
    );
  }
}
