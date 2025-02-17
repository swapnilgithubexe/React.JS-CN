import { Component } from "react";
import AnimeCard from "./AnimeCard.js";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const { anime } = this.props;


    return <div className="anime-list">
      {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
      {anime.map((item, index) => (
        <AnimeCard key={index} name={item.name} image={item.image} />
      ))}
    </div>;
  }
}

export default AnimeList;
