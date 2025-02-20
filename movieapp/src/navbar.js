import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <div style={{
          width: "100 %",
          height: 50,
          background: "skyblue", display: "flex", justifyContent: "space-between"
        }} className="nav">
          <div className="title">Title</div>
          <div>

            <span className="cartImg">0 <img className="cartImg" src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="cart item" /></span>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar;