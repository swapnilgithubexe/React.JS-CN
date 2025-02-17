import React, { Component } from "react";

// Complete this Component
const ListItem = ({ name, imgSrc, link, bgColor }) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor
      }}
    >
      <img src={imgSrc} alt={name} />
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;
