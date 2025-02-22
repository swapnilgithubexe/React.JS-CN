import { Component } from "react";
import styled from "styled-components";

const CartCount = styled.div`
margin-top: 12px;
  background: orange;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 8px;
  border-radius: 50%;

`

class Navbar extends Component {
  render() {
    return (
      <>
        <div style={styles.nav} className="nav">
          <div style={styles.title} className="title">Title</div>
          <div
            style={styles.cartContainer}
            className="cartContainer">
            <img style={styles.cartIcon} className="cartIcon" src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="cart item" />
            <CartCount className="cartCount">{this.props.cartCount}</CartCount>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar;



const styles = {
  nav: {
    width: "100 %",
    height: 50,
    background: "skyblue", display: "flex", justifyContent: "space-between"
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", "sans-serif"',
    textTransform: "uppercase",
    marginLeft: 20
  },
  cartIcon: {
    marginTop: 17,
    height: 25,
    marginRight: 20
  },
  cartContainer: {
    position: "relative",
    cursor: "pointer"
  },
  // cartCount: {
  //   marginTop: 12,
  //   background: "orange",
  //   padding: "4px 8px",
  //   position: "absolute",
  //   right: 10,
  //   top: -5,
  //   fontSize: 8,
  //   borderRadius: "50%"
  // }

}