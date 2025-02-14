import React from "react";
import "./styles.css";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src="/photos/avengers.jpg" alt="poster" />
          </div>

          <div className="right">
            <div className="title">The avangers</div>
            <div className="plot">The 2nd best movie</div>
            <div className="price">Rs. 180</div>

            <div className="footer">
              <div className="rating">8.9</div>
              <div className="stars">star</div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>



        </div>

      </div>)
  }
}

export default MovieCard;