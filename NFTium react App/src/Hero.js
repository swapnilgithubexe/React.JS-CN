// Write this code in Hero.js file
import { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h3>NFTium is the best place to find cool and unique NFTs </h3>
        <img
          src="https://cdn.pixabay.com/photo/2022/05/25/02/37/nft-7219625_960_720.png"
          alt="nft"
        />
      </div>
    );
  }
}

export default Hero;