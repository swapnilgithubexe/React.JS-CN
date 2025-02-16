import React from "react";
import "./styles.css";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { starsCount: 0, addedToCart: false };
  }

  increaseLikeCount = () => {
    if (this.state.starsCount >= 10) {
      return alert("Stars can't be more than 10");
    }
    this.setState((prevState) => ({ starsCount: prevState.starsCount + 1 }));
  };

  decreaseStarsCount = () => {
    if (this.state.starsCount <= 0) {
      return alert("Stars can't be less than 0");
    }
    this.setState((prevState) => ({ starsCount: prevState.starsCount - 1 }));
  };

  addToCart = () => {
    this.setState((prevState) => ({
      addedToCart: !prevState.addedToCart
    }));
  };

  render() {
    const { title, plot, poster, rating, price, fav, toggleFavorite } =
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
                  onClick={this.decreaseStarsCount}
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
                  onClick={this.increaseLikeCount}
                />
                <span>{this.state.starsCount}</span>
              </div>


              <button className="favourite-btn" onClick={toggleFavorite}>
                {fav ? "Unfavourite" : "Favourite"}
              </button>


              <button
                className={
                  this.state.addedToCart ? "remove-cart-btn" : "cart-btn"
                }
                onClick={this.addToCart}
              >
                {this.state.addedToCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
