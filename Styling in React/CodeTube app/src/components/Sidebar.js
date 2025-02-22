import { Component } from "react";
import { instructors } from "../data";
import { Button, Container } from "../reusable.styled";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: []
    };
  }

  isFollowingInstructor = (id) => {
    return !!this.state.following.find((i) => i.id === id);
  };

  handleFollow = (id) => {
    const instructor = instructors.find((i) => i.id === id);
    this.setState({ following: [instructor, ...this.state.following] });
  };

  handleUnFollow = (id) => {
    const filteredList = this.state.following.filter((i) => i.id !== id);
    this.setState({ following: filteredList });
  };

  render() {
    return (
      //Use the conatiner here in place of the below div.
      <Container flex="1" className="sidebar">
        {instructors.map((i) => (
          <div key={i.id} className="instructor">
            <img src={i.image} alt={i.name} />
            <h3>{i.name}</h3>
            {/* Use the button Component from the reusable.styled.js here in place of given button with props as bg for background color */}
            <Button bg="blue"
              onClick={() =>
                !this.isFollowingInstructor(i.id)
                  ? this.handleFollow(i.id)
                  : this.handleUnFollow(i.id)
              }
            >
              {!this.isFollowingInstructor(i.id) ? "Follow" : "Unfollow"}
            </Button>
          </div>
        ))}
      </Container>
    );
  }
}

export default Sidebar;
