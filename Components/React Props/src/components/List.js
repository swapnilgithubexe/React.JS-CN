import React from "react";
import ListItem from "./ListItem.js";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "LinkedIn",
          link: "http://linkedin.com",
          icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
          bgColor: "#ff9580"
        },
        {
          id: 2,
          name: "GitHub",
          link: "https://github.com",
          icon: "https://cdn-icons-png.flaticon.com/128/3291/3291695.png",
          bgColor: "#f2faa6"
        },
        {
          id: 3,
          name: "Twitter",
          link: "https://twitter.com/",
          icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
          bgColor: "#b8b3e8"
        }
      ]
    };
  }

  render() {
    const { data } = this.state;

    // Code here
    return <div className="List">
      {data.map((item, index) => (
        <ListItem key={index} name={item.name} imgSrc={item.icon} link={item.link} bgColor={item.bgColor} />
      ))}
    </div>;
  }
}

export default List;
