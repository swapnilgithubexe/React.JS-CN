import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img
          src="https://res.cloudinary.com/dl26pbek4/image/upload/v1675072763/code_srz4jx.png"
          alt="logo"
        />
        <div>
          <img
            src="https://res.cloudinary.com/dl26pbek4/image/upload/v1675075232/bag_1_qns6wh.png"
            alt="bag"
          />
          <strong>{this.props.bagCount}</strong>
        </div>
      </div>
    );
  }
}

export default Navbar;
