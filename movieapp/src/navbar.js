import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <div style={{
          width: "100 %", height: 50, background: "skyblue", display: "flex", justifyContent: "space-between"
        }} className="nav">
          <div className="title">Title</div>
          <div>
            <img alt="cart item" />
            <span>0</span>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar;