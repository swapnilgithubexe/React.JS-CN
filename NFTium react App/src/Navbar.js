import { Component } from "react";

// Write this code in Navbar.js file
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h2>NFTium</h2>
        <ul>
          <li>Collection</li>
          <li>Prices</li>
          <li>Support</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;