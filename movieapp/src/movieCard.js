import React from "react";
import "./styles.css";


class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { starsCount: 0, fav: false, addedToCart: false }
  }
  increaseLikeCount = () => {
    if (this.state.starsCount >= 10) {
      return alert("Stars cant be more than 10")
    }
    this.setState((prevState) => ({ starsCount: prevState.starsCount + 1 }))
  }
  decreaseStarsCount = () => {
    if (this.state.starsCount <= 0) {
      return alert("Stars cant be less than 0")
    }
    this.setState((prevState) => ({ starsCount: prevState.starsCount - 1 }))

  }
  handleFavorite = () => {
    this.setState({ fav: !this.state.fav })
  }

  addToCart = () => {
    this.setState({
      addedToCart: !this.state.addedToCart
    })
  }

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
              <div className="star-dis">
                <img alt="minus" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  className="str-btn" onClick={this.decreaseStarsCount} />
                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" className="stars" />
                <img alt="plus" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                  className="str-btn" onClick={this.increaseLikeCount} />
                <span>{this.state.starsCount}</span>
              </div>
              {this.state.fav ? <button className="unfavourite-btn" onClick={this.handleFavorite}>Unfavourite</button> : <button className="favourite-btn" onClick={this.handleFavorite}>Favourite</button>}


              {this.state.addedToCart ? <button className="remove-cart-btn" onClick={this.addToCart}>Remove from Cart</button> : <button className="cart-btn" onClick={this.addToCart}>Add to Cart</button>}



            </div>
          </div>



        </div>

      </div>)
  }
}

export default MovieCard;