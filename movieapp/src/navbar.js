import { Component } from "react";

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
            <span style={styles.cartCount} className="cartCount">1 </span>
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
  cartCount: {
    marginTop: 12,
    background: "orange",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 8,
    borderRadius: "50%"
  }

}