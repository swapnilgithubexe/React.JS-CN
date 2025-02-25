import React from "react";
import styles from "./image.module.css";

class Image extends React.Component {
  render() {
    return (
      <div className={styles.imageContainer}>
        <img
          src={this.props.photo.url}
          alt={this.props.photo.title}
          height="100%"
          width="100%"
        />
      </div>
    );
  }
}

export default Image;
