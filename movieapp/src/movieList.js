import React from "react";
import MovieCard from "./movieCard.js";

class MovieList extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map((item, index) => {
          return (
            <MovieCard
              key={index}
              data={item}
              toggleFavorite={() => this.props.toggleFavorite(index)}
              addStars={() => this.props.addStars(index)}
              removeStars={() => this.props.removeStars(index)}
              addedToCart={() => this.props.addedToCart(index)}
            />
          );
        })}
      </>
    );
  }
}

export default MovieList;
