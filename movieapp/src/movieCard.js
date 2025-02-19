import React from "react";
import "./styles.css";

class MovieCard extends React.Component {
  render() {
    const { title, plot, poster, rating, price, fav, toggleFavorite, star, addStar, reduceStar } =
      this.props.data;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt="poster" />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="minus"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  className="str-btn"
                  onClick={reduceStar}
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png"
                  className="stars"
                />
                <img
                  alt="plus"
                  src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                  className="str-btn"
                  onClick={addStar}
                />
                <span>{star}</span>
              </div>


              <button className="favourite-btn" onClick={toggleFavorite}>
                {fav ? "Unfavourite" : "Favourite"}
              </button>


              {/* <button
                className={
                  this.state.addedToCart ? "remove-cart-btn" : "cart-btn"
                }
                onClick={this.addToCart}
              >
                {this.state.addedToCart ? "Remove from Cart" : "Add to Cart"}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
