import { Component } from "react";
import MovieList from "./movieList.js";
import Navbar from "./navbar.js";
import { moviesData } from "./moviesData.js"


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      cartCount: 0
    }
  }
  toggleFavorite = (index) => {
    this.setState((prevState) => {
      const updatedMovies = [...prevState.movies];
      updatedMovies[index] = { ...updatedMovies[index], fav: !updatedMovies[index].fav }
      return { movies: updatedMovies }
    })
  }

  handleIncStars = (index) => {
    this.setState((prevState) => {

      const updatedMovies = [...prevState.movies];
      updatedMovies[index] = {
        ...updatedMovies[index],
        star: updatedMovies[index].star < 10 ? updatedMovies[index].star + 1 : updatedMovies[index].star
      };
      return { movies: updatedMovies }
    })
  }
  removeStars = (index) => {
    this.setState((prevState) => {

      const updatedMovies = [...prevState.movies];
      updatedMovies[index] = {
        ...updatedMovies[index],
        star: updatedMovies[index].star > 0 ? updatedMovies[index].star - 1 : updatedMovies[index].star
      }
      return { movies: updatedMovies };
    })
  }
  addedToCart = (index) => {
    this.setState((prevState) => {
      const updatedMovies = [...prevState.movies];

      updatedMovies[index] = {
        ...updatedMovies[index],
        isInCart: !updatedMovies[index].isInCart
      }

      const newCartCount = updatedMovies[index].isInCart ? prevState.cartCount + 1 : prevState.cartCount - 1


      return { movies: updatedMovies, cartCount: newCartCount }
    })
  }



  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <>
          <Navbar cartCount={this.state.cartCount} />
          <MovieList movies={movies} toggleFavorite={this.toggleFavorite} addStars={this.handleIncStars} removeStars={this.removeStars}
            addedToCart={this.addedToCart} />

        </>
      </div>
    );
  }
}



export default App;
