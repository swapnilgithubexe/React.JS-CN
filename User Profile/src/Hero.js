// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <>
        <p>Name: Pranav Sharad Yeole</p>
        <p>Email: pranav@google.com</p>
        <p>Phone: 7999600540</p>
        <p>Address: ABC, xyz street</p>
      </>
    );
  }
}

export default Hero;